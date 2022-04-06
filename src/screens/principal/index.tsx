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

export interface InputRoundProps {}

export function PrincipalScreen(props: InputRoundProps) {
  const nav = useNavigation();

  const [cor, setCor] = React.useState("rgb(187, 136, 59)");
  const [cor2, setCor2] = React.useState("rgb(255, 255, 255)");
  const [pagina, setPagina] = React.useState(1);

  return (
    <>
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
        <Icon color={"white"} size={50} name="menu" type="ionicon" />
        <Image
          style={{ width: 160, height: 50, margin: 10 }}
          source={require("../../../assets/logo.png")}
        />
        <Icon color={"rgba(0,0,0,0)"} size={50} name="menu" type="ionicon" />
      </View>
      <View
        style={{
          marginTop: 30,
          flex: 1,
          backgroundColor: "rgb(245, 240, 240)",
          justifyContent: "space-evenly",
          alignItems: "center",
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
              width: "90%",
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
            width: "90%",
          }}
        >
          <TouchableOpacity
            style={{
              height: 60,
              width: "50%",
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
              width: "50%",
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
        {pagina == 1 && <Text>Pagina 1</Text>}

        {pagina == 2 && <Text>Pagina 2</Text>}
      </View>
    </>
  );
}
