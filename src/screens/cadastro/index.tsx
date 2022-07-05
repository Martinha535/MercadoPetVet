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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc, getFirestore } from "firebase/firestore";

export interface InputRoundProps {
  // teste
}

export function CadastroScreen(props: InputRoundProps) {
  let db = getFirestore();
  const auth = getAuth();

  const nav = useNavigation();

  // Função para acessar
  const enviar = async (dados: any) => {
    let db = getFirestore();
    if (dados.senha == dados.senha2) {
      createUserWithEmailAndPassword(auth, dados.email, dados.senha)
        //Opcionalmente para saber se criou com sucesso
        .then((usuario) => {
          //@ts-ignore
          const seuDoc = doc(db, "Users", getAuth().currentUser.uid);
          setDoc(seuDoc, {
            nome: dados.nomeCompleto,
            endereco: dados.endereco,
            complemento: dados.complemento,
            bairro: dados.bairro,
            cep: dados.cep,
            cidade: dados.cidade,
            uf: dados.uf,
          });

       
          alert("cadastrou");
        })
        //Opcionalmente para se falhou ao criar usuário
        .catch((error) => console.log(error));
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
