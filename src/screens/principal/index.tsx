import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

//import Button from '../Components/Button';
//import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { Formik, validateYupSchema } from "formik";
import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import { TouchableHighlight } from "react-native-gesture-handler";

export interface InputRoundProps {}

export function PrincipalScreen(props: InputRoundProps) {
  const nav = useNavigation();

  const [cor, setCor] = React.useState("rgb(187, 136, 59)");
  const [cor2, setCor2] = React.useState("rgb(255, 255, 255)");
  const [pagina, setPagina] = React.useState(1);
  const [visibilidade, setVisibilidade] = React.useState("hidden");

  return (
    <>
      <StatusBar hidden />
      {visibilidade == "visible" &&
      <View style={{ position: "absolute", zIndex: 2, width: '100%', height: '100%', flexDirection: 'row'}}>
        <View
          style={{
            display: "flex",
            width: "70%",
            height: "100%",
            backgroundColor: "#fff",

            flexDirection: "column",
          }}
        >
          <View
            style={{
              display: "flex",
              height: 70,
              width: "100%",

              alignItems: "flex-start",
            }}
          >
            <Icon
            style={{marginLeft: 10}}
              onPress={() => {
                setVisibilidade("hidden");
              }}
              size={50}
              name="arrow-back"
              type="ionicon"
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(228, 228, 228)",
              display: "flex",
              height: 70,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderTopWidth: 1,
              //borderBottomWidth: 1,
            }}
            onPress={() => {
              setVisibilidade("hidden");
            }}
          >
            <Text>P??gina inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(248, 248, 248)",
              display: "flex",
              height: 70,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderTopWidth: 1,
              //borderBottomWidth: 1,
            }}
            onPress={() => {
              //@ts-ignore
              nav.navigate("racoes");
            }}
          >
            <Text>Ra????es</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(248, 248, 248)",
              display: "flex",
              height: 70,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderTopWidth: 1,
              //borderBottomWidth: 1,
            }}
            onPress={() => {
              //@ts-ignore
              nav.navigate("biscoitos");
            }}
          >
            <Text>Biscoitos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(248, 248, 248)",
              display: "flex",
              height: 70,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }}
            onPress={() => {
              //@ts-ignore
              nav.navigate("acessorios");
            }}
          >
            <Text>Acess??rios</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(248, 248, 248)",
              display: "flex",
              height: 70,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }}
            onPress={() => {
              //@ts-ignore
              nav.navigate("listaProdutos");
            }}
          >
            <Text>Lista de produtos</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
           
          }}
          onPress={() => {
            setVisibilidade("hidden");
          }}
        ></TouchableOpacity>
      </View>
      }

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
            if(visibilidade == "hidden"){
              setVisibilidade("visible");
            }else{
              setVisibilidade("hidden");
            }
            
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
      <View
        style={{
          //marginTop: 30,
          flex: 1,
          backgroundColor: "rgb(245, 240, 240)",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
            }}
          >
            <TextInput
              //onChangeText={handleChange("nomeCompleto")}
              style={{
                backgroundColor: "white",
                flex: 1,
                height: 60,
                padding: 10,
                borderRadius: 15,
                borderWidth: 2,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRightWidth: 0,
              }}
              placeholder="Pesquisar"
            />
            <TouchableOpacity
              style={{
                height: 60,
                width: 80,
                backgroundColor: "rgb(187, 136, 59)",
                borderWidth: 2,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderLeftWidth: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon color={"white"} name="search" type="ionicon"></Icon>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              //backgroundColor: "#f0f",
              minWidth: "90%",
            }}
          >
            <TouchableOpacity
              style={{
                height: 60,
                flex: 1,
                backgroundColor: cor,
                borderWidth: 2,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderRightWidth: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setCor("rgb(187, 136, 59)");
                setCor2("rgb(255, 255, 255)");
                setPagina(1);
              }}
            >
              <Text>Receber em casa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 60,
                flex: 1,
                backgroundColor: cor2,
                borderWidth: 2,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderLeftWidth: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setCor("rgb(255, 255, 255)");
                setCor2("rgb(187, 136, 59)");
                setPagina(2);
              }}
            >
              <Text>Retirar na loja</Text>
            </TouchableOpacity>
          </View>
        </View>

        {pagina == 1 && (
          // < HideWithKeyboard >
          <View style={{ flex: 2.5, minWidth: "100%" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                flexDirection: "row",
                margin: "5%",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                minHeight: 320,
                shadowOpacity: 0.25,
                elevation: 5,
              }}
            >
              <View style={{ justifyContent: "space-evenly" }}>
                <Image
                  style={{ width: 140, height: 140, margin: 10 }}
                  source={require("../../../assets/001.png")}
                />
                <Image
                  style={{ width: 140, height: 140, margin: 10 }}
                  source={require("../../../assets/002.png")}
                />
              </View>
              <View style={{ flex: 1, justifyContent: "space-between" }}>
                <Text style={{ margin: 10, fontSize: 17 }}>
                  Ra????es, brinquedos, acess??rios, shampoos, col??nias, roupinhas,
                  biscoitos Viewersos, petiscos, sach??s, medicamentos
                  veterin??rios, camas, produtos em geral para pets.
                </Text>
                <View style={{ alignItems: "flex-end", width: "100%" }}>
                  <TouchableOpacity>
                    <Icon size={50} name="chevron-right" type="FontAwesome" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          // </HideWithKeyboard>
        )}

        {pagina == 2 && (
          <View style={{ flex: 2.5, minWidth: "100%" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                flexDirection: "row",
                margin: "5%",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                minHeight: 320,
                shadowOpacity: 0.25,
                elevation: 5,
              }}
            ></View>
          </View>
        )}
      </View>
    </>
  );
}
