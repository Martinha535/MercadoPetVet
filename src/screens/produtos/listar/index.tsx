import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon, Image } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import {
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
export interface AppProps {}

export function ListaProdutosScreen(props: AppProps) {
  React.useEffect(() => {
    let db = getFirestore();
    getDocs(collection(db, "Produtos")).then((resultados) => {
      resultados.forEach((resultado) => {
        //@ts-ignore
        setProdutos((produtos) => [...produtos, resultado.data()]);
        console.log(JSON.stringify(resultado.data()));
      });
    });
  }, []);
  const nav = useNavigation();

  const [produtos, setProdutos]: any = React.useState([]);
  async function deletar(id: any) {

    const db = getFirestore();
    await deleteDoc(doc(db, "Produtos", id));

    await getDocs(collection(db, "Produtos")).then((resultados) => {
      let dados: any = [];
      resultados.forEach((resultado) => {
        dados.push(resultado.data());
      });
      setProdutos(dados);
    });
    alert("deletado com sucesso!");
  }

  return (
    <View
      style={{
        //marginTop: 30,
        flex: 1,
        backgroundColor: "rgb(245, 240, 240)",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <StatusBar hidden />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          backgroundColor: "rgb(92, 55, 21)",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          elevation: 5,
        }}
      >
        <Icon
          onPress={() => {
            nav.goBack();
            //setVisibilidade("visible");
          }}
          color={"white"}
          size={50}
          name="chevron-back"
          type="ionicon"
        />
        <Image
          style={{ width: 160, height: 50, margin: 10 }}
          source={require("../../../../assets/logo.png")}
        />
        <Icon color={"rgba(0,0,0,0)"} size={50} name="menu" type="ionicon" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          marginTop: 10,
        }}
      >
        {produtos.length == 0 && (
          <Text style={{ fontSize: 27, textAlign: "center" }}>
            Não há produtos cadastrados!
          </Text>
        )}
        {produtos.length > 0 && (
          <FlatList
            style={{ width: "100%" }}
            data={produtos}
            renderItem={(data) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  width: "100%",
                  height: "85%",
                  margin: 2,
                  padding: 10,
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },

                  shadowOpacity: 0.25,
                  elevation: 5,
                }}
              >
                <View style={{ justifyContent: "space-evenly" }}>
                  <Image
                    style={{ width: 90, height: 90, margin: 10 }}
                    source={{ uri: data.item.foto }}
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                  <Text style={{ margin: 10, fontSize: 17 }}>
                    {data.item.nome}
                  </Text>

                  <View style={{ margin: 10 }}>
                    <Text
                      style={{
                        //textDecorationLine: "line-through",
                        fontSize: 20,
                        margin: 0,
                        color: "#000",
                      }}
                    >
                      R${data.item.preco}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 40,
                    height: "100%",
                    backgroundColor: "rgb(187,136,59)",
                    borderRadius: 15,
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    deletar(data.item.nome);
                    //nav.navigate("cadastrarProdutos");
                  }}
                >
                  <Icon color={"white"} size={30} name="delete" type="trash" />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 60,
            backgroundColor: "rgb(187,136,59)",
            borderRadius: 15,
            marginBottom: 10,
          }}
          onPress={() => {
            //@ts-ignore
            nav.navigate("cadastrarProdutos");
          }}
        >
          <Text>Cadastrar um produto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
