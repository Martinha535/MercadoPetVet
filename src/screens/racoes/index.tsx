import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ToastAndroid,
  Platform,
} from "react-native";

//import Button from '../Components/Button';
//import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { Formik, validateYupSchema } from "formik";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Icon, Image } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Produto from "../../models/produto";

export interface InputRoundProps {}

export function RacoesScreen(props: InputRoundProps) {
  const nav = useNavigation();
  const [produtos, setProdutos] = React.useState([
    {
      titulo: "Racao",
      preco: "10,00",
      foto: null,
      id: "1",
      precoPromocional: null,
    },
    {
      titulo: "Biscoito",
      preco: "15,00",
      foto: null,
      id: "2",
      precoPromocional: "10,00",
    },
    {
      titulo: "Acessório",
      preco: "15,00",
      foto: null,
      id: "2",
      precoPromocional: "10,00",
    },
    {
      titulo: "Acessório",
      preco: "15,00",
      foto: null,
      id: "2",
      precoPromocional: "10,00",
    },
  ]);

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
        <Text style={{ fontSize: 27 }}>RAÇÕES</Text>

        <FlatList
          data={produtos}
          renderItem={(data) => (
            
            <View
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                width: "85vw",
                height: 170,
                margin: "10vw",
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
                  source={require("../../../assets/DogShow.png")}
                />
              </View>
              <View style={{ flex: 1, justifyContent: "space-between" }}>
                <Text style={{ margin: 10, fontSize: 17 }}>
                  {data.item.titulo}
                </Text>
                {data.item.precoPromocional && (
                  <View style={{ margin: 10 }}>
                    <Text
                      style={{
                        textDecorationLine: "line-through",
                        fontSize: 20,
                        margin: 0,
                        color: "#f00",
                      }}
                    >
                      R${data.item.preco}
                    </Text>
                    <Text style={{ margin: 0, fontSize: 27, color: "#0f0" }}>
                      R${data.item.precoPromocional}
                    </Text>
                  </View>
                )}
                {!data.item.precoPromocional && (
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
                )}
                <View style={{ alignItems: "flex-end", width: "100%" }}>
                  <TouchableOpacity>
                    <Icon size={30} name="chevron-right" type="FontAwesome" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
