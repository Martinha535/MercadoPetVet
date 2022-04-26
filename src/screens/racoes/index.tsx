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

export interface InputRoundProps {}

export function RacoesScreen(props: InputRoundProps) {
  const nav = useNavigation();

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
            //setVisibilidade("visible");
          }}
          color={"white"}
          size={50}
          name="menu"
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
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            //height: 200,
            margin: "5%",
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
              Ração Seca Nestlé Purina Dog Chow Extra Life
            </Text>
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 20,
                  color: "#f00",
                }}
              >
                R$210,00
              </Text>
              <Text style={{ fontSize: 27, color: "#0f0" }}>R$200,00</Text>
            </View>
            <View style={{ alignItems: "flex-end", width: "100%" }}>
              <TouchableOpacity>
                <Icon size={50} name="chevron-right" type="FontAwesome" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            //height: 200,
            margin: "5%",
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
              source={require("../../../assets/Pedigree.png")}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Text style={{ margin: 10, fontSize: 17 }}>
              Ração Seca Pedigree para Cães Filhotes Raças Médias e Grandes.
            </Text>
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 20,
                  color: "#f00",
                }}
              >
                R$150,00
              </Text>
              <Text style={{ fontSize: 27, color: "#0f0" }}>R$140,00</Text>
            </View>
            <View style={{ alignItems: "flex-end", width: "100%" }}>
              <TouchableOpacity>
                <Icon size={50} name="chevron-right" type="FontAwesome" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
