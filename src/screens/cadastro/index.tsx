import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
  ToastAndroid,
  Platform,
  Vibration,
} from "react-native";

//import Button from '../Components/Button';
//import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { Formik, validateYupSchema } from "formik";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase/auth";
import { doc, setDoc, getFirestore, collection } from "firebase/firestore";
export interface InputRoundProps {
  // teste
}

export function CadastroScreen(props: InputRoundProps) {
  let db = getFirestore();

  const nav = useNavigation();

  // Função para acessar
  const enviar = async (dados: any) => {
    if (dados.senha == dados.senha2) {
      try {
        await firebase.createUserWithEmailAndPassword(
          firebase.getAuth(),
          dados.email,
          dados.senha
        );
        const documento = doc(db, "Users", firebase.getAuth().currentUser.uid);
        //await firebase.firestore.collection("Users").doc(firebase.getAuth().currentUser.uid).update()
        setDoc(documento, {
          nome: dados.nomeCompleto,
          endereco: dados.endereco,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cep: dados.cep,
          cidade: dados.cidade,
          uf: dados.uf
        });
        alert("cadastrou");
      } catch (erro) {
        console.error(erro);
      }
    } else {
      if (Platform.OS == "android") {
        Vibration.vibrate([100, 100]);
        ToastAndroid.show("As senhas não conferem", ToastAndroid.BOTTOM);
      } else if (Platform.OS == "ios")
        Alert.alert("Erro!", "As senhas não conferem");
      else {
        alert("As senhas não conferem");
      }
    }

    // if (dados.email.split("@").length == 2) {
    //   if (dados.senha >= 6) {
    //     if (dados.senha2 === dados.senha) {
    //       await new Promise((resolve) => setTimeout(resolve, 2000));
    //       if (Platform.OS == "android")
    //         ToastAndroid.show("Cadastrado com sucesso!", ToastAndroid.BOTTOM);
    //       else if (Platform.OS == "ios")
    //         Alert.alert("Sucesso!", "Você foi cadastrado!");
    //       else {
    //         alert("Sucesso! Você foi cadastrado!");
    //       }
    //       //@ts-ignore

    //       nav.navigate("principal");
    //     } else {
    //       if (Platform.OS == "android")
    //         ToastAndroid.show("As senhas não conferem!", ToastAndroid.BOTTOM);
    //       else if (Platform.OS == "ios")
    //         Alert.alert("ERRO!", "As senhas não conferem!");
    //       else {
    //         alert("Erro, As senhas não conferem!");
    //       }
    //     }
    //   } else {
    //     if (Platform.OS == "android")
    //       ToastAndroid.show(
    //         "A senha requer no mínimo 6 caracteres",
    //         ToastAndroid.BOTTOM
    //       );
    //     else if (Platform.OS == "ios")
    //       Alert.alert("ERRO!", "A senha requer ao mínimo 6 caracteres!");
    //     else {
    //       alert("Erro, A senha requer ao mínimo 6 caracteres");
    //     }
    //   }
    // } else {
    //   if (Platform.OS == "android")
    //     ToastAndroid.show("ERRO! E-mail inválido!", ToastAndroid.BOTTOM);
    //   else if (Platform.OS == "ios") Alert.alert("ERRO!", "E-mail inválido!");
    //   else {
    //     alert("Erro, E-mail Inválido");
    //   }
    // }
  };

  //1 sempre é a página inicial

  const [pagina, setPagina] = React.useState(1);

  return (
    <Formik
      initialValues={{
        email: "",
        senha: "",
        nomeCompleto: "",
        endereco: "",
        complemento: "",
        bairro: "",
        cep: "",
        cidade: "",
        uf: "",
      }}
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
          {pagina == 1 && (
            <View
              style={{
                marginTop: 30,
                flex: 1,
                backgroundColor: "rgb(245, 240, 240)",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              //aqui fica apenas o background da tela!
            >
              <Image
                style={{ width: 180, height: 70 }}
                source={require("../../../assets/cadastrese.png")}
              />

              <TextInput
                onChangeText={handleChange("nomeCompleto")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                placeholder="Nome completo"
              />

              <TextInput
                onChangeText={handleChange("endereco")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                placeholder="Endereço"
              />

              <TextInput
                onChangeText={handleChange("complemento")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                placeholder="Complemento"
              />

              <TextInput
                onChangeText={handleChange("bairro")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                placeholder="Bairro"
              />

              <TextInput
                onChangeText={handleChange("cep")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                placeholder="CEP"
              />

              <TextInput
                onChangeText={handleChange("cidade")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                placeholder="Cidade"
              />

              <TextInput
                onChangeText={handleChange("uf")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                placeholder="UF"
              />

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 60,
                  backgroundColor: "rgb(187,136,59)",
                  borderRadius: 15,
                }}
                onPress={() => {
                  let pag = pagina;

                  setPagina(++pag);
                }}
              >
                <Text>próximo</Text>
              </TouchableOpacity>
            </View>
          )}
          {pagina == 2 && (
            <View
              style={{
                marginTop: 30,
                flex: 1,
                backgroundColor: "rgb(245, 240, 240)",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Text>Criação de conta de acesso</Text>
              <TextInput
                onChangeText={handleChange("email")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                placeholder="E-mail"
              />

              <TextInput
                onChangeText={handleChange("senha")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                secureTextEntry
                placeholder="Senha"
              />
              <TextInput
                onChangeText={handleChange("senha2")}
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 60,
                  padding: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                secureTextEntry
                placeholder="Confirmar senha"
              />

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 60,
                  backgroundColor: "rgb(187,136,59)",
                  borderRadius: 15,
                }}
                onPress={() => {
                  let pag = pagina;
                  setPagina(--pag);
                }}
              >
                <Text>Anterior</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 60,
                  backgroundColor: "rgb(187,136,59)",
                  borderRadius: 15,
                }}
                onPress={() =>
                  //@ts-ignore
                  nav.navigate("home")
                }
              >
                <Text>Voltar para tela de login</Text>
              </TouchableOpacity>
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
                  <Text>Cadastrar minha conta</Text>
                </TouchableOpacity>
              )}
              {isSubmitting && (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 200,
                    height: 60,
                    backgroundColor: "rgb(187,136,59)",
                    borderRadius: 15,
                  }}
                >
                  <ActivityIndicator></ActivityIndicator>
                </View>
              )}
            </View>
          )}
        </>
      )}
    </Formik>
  );
}
