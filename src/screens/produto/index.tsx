import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, Dimensions, Picker } from "react-native";
import { Icon, Image } from "react-native-elements";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

export interface ProdutoScreenProps {}

export function ProdutoScreen(props: ProdutoScreenProps) {
  const nav = useNavigation();
  // Dimensions e uma biblioteca que dá acesso ao recurso nativo
  // responsável por determinar a altura (h) e largura (w) para utilizar
  // nos componente ou outros fins
  //////////////////////////////////////////////
  // W é a largura atual da tela
  const w = Dimensions.get("window").width;
  // H é a altura atual da tela (caso queira usar 90% da altura, utiliza-se
  // H*0.9 para utilizar o conceito de porcentagem)
  const h = Dimensions.get("window").height;
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
          source={require("../../../assets/logo.png")}
        />
        <Icon color={"rgba(0,0,0,0)"} size={50} name="menu" type="ionicon" />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: w * 0.7 }}>
          <FlatList
           // flatlist é utilizdo aqui para repetir imagens
           /////////////////////////////////////////
           // horizontal é um atributo que transforma a lista vertical em
           // uma lista horizontal, sempre que quiser uma lista horizontal
           // pode-se utilizar: horizontal ou horizontal ={true} (quando um
           // atributo recebe o valor true en react, apenas declaramos ele sem
           // associar a um valor)
            horizontal
            //pagingEnabled é um atributo do flatlist que permite criar páginas
            //no flatlist, evitando o efeito de scroll infinito.
            pagingEnabled
            //Data recebe um vetor de valores para repetir no flatlist, nesse
            //caso o vetor armazena as fotos do produto (lembrar de substituir
            //o valor de forma dinâmica!)
            data={[1, 2, 3, 4, 5]}
            //A função render apenas renderiza o componente escolhido várias vezes 
            //se necessário
            renderItem={(data) => (
              <Image
                //utilizando porcentagem para determinar altura e largura
                style={{ width: w * 0.7, height: h * 0.4, margin: 10 }}
                source={require("../../../assets/DogShow.png")}
              />
            )}
          />
        </View>
        <Text
          style={{
            width: "90%",
            fontSize: 17,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Ração Seca Nestlé Purina Dog Chow Extra Life Carne, Frango e Arroz
          Cães Adultos e filhotes. Todas as Raças.
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text>Selecione uma quantidade: </Text>
        
          <Picker 
        
          //o picker é umm componente do react native que permite criar um
          //balão com variados valores para seleção
          style={{ marginLeft: 10 }}>
            <Picker.Item label="1" />
            <Picker.Item label="2" />
            <Picker.Item label="3" />
            <Picker.Item label="4" />
            <Picker.Item label="5" />
          </Picker>
        </View>
        <Text>Digite o CEP para calcular frete: </Text>
        <TextInput
          //onChangeText={handleChange("senha")}
          style={{
            backgroundColor: "white",
            width: "90%",
            height: 60,
            marginTop: 10,
            padding: 20,
            borderRadius: 15,
            borderWidth: 2,
          }}
          
          placeholder="_____-__"
          
        />
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: w * 0.9,
            height: 60,
            marginTop: 10,
            backgroundColor: "rgb(187,136,59)",
            borderRadius: 15,
          }}
          onPress={() => {
            //@ts-ignore
            nav.navigate("compra")
          }}
        >
          <Text>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
