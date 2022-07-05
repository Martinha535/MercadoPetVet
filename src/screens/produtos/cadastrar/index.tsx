import { Formik } from "formik";
import * as React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Icon, Image } from "react-native-elements";
export interface AppProps {}

export function CadastraProdutosScreen(props: AppProps) {
  const nav = useNavigation();
  const  enviar = async (dados: any) => {
    let db = getFirestore();
    const seuDoc = doc(db, "Produtos", dados.nome);
    await setDoc(seuDoc, {
      nome: dados.nome,
      preco: dados.preco,
      foto: "",
    });
    //@ts-ignore
    nav.navigate('listaProdutos');
  };
  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(245, 240, 240)",
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
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 300,
      }}
    >
      <Formik
        initialValues={{ nome: "", preco: "" }}
        validationSchema={Yup.object().shape({})}
        onSubmit={enviar}
      >
        {({
          errors,
          setFieldValue,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <>
            <TextInput
              onChangeText={handleChange("nome")}
              style={{
                backgroundColor: "white",
                width: "90%",
                height: 60,
                padding: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
              placeholder="Nome do produto"
              //leftIcon={{name:'person', color:'black'}}
            />
            {errors.nome && (
              <Text style={{ color: "#f00" }}>O campo nome está inválido</Text>
            )}
            <TextInput
              onChangeText={handleChange("preco")}
              style={{
                backgroundColor: "white",
                width: "90%",
                height: 60,
                padding: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
             
              placeholder="Preço"
              //leftIcon={{name:'lock', color:'black'}}
            />
            {errors.preco && (
              <Text style={{ color: "#f00" }}>preço inválido</Text>
            )}
            {!isSubmitting && (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 60,
                  backgroundColor: "rgb(187,136,59)",
                  borderRadius: 15,
                }}
                onPress={() => handleSubmit()}
              >
                <Text>Cadastrar</Text>
              </TouchableOpacity>
            )}
            {isSubmitting && (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 60,
                  backgroundColor: "rgb(187,136,59)",
                  borderRadius: 15,
                }}
                onPress={() => handleSubmit()}
              >
                <ActivityIndicator color={"#fff"} />
              </TouchableOpacity>
            )}
          </>
        )}
      </Formik>
    </View>
    </View>

  );
}
