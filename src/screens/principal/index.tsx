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

export interface InputRoundProps { }


// Função para acessar
const enviar = async (dados: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (dados.email == "teste@teste.com" && dados.senha == "123456")
    alert("logado com sucesso");
  else alert("Email ou senha incorreta");
};


export function PrincipalScreen(props: InputRoundProps) {
  const nav = useNavigation();


  return (
    <View
      style={{
        marginTop: 30,
        flex: 1,
        backgroundColor: "rgb(245, 240, 240)",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      
    </View>
  );
}
