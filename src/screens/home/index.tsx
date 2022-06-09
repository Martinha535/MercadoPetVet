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
  Vibration,
} from "react-native";
import * as firebase from "firebase/auth";
//import Button from '../Components/Button';
//import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { Formik, validateYupSchema } from "formik";
import { useNavigation } from "@react-navigation/native";

export interface InputRoundProps {}

export function HomeScreen(props: InputRoundProps) {
  const nav = useNavigation();
  const enviar = async (dados: any) => {
  
    try {
      await firebase.signInWithEmailAndPassword(
        firebase.getAuth(),
        dados.email,
        dados.senha
      );
      //@ts-ignore
      nav.navigate("principal");
    } catch (e:any) {
      if (Platform.OS == "android") {
        Vibration.vibrate([100, 100]);
        ToastAndroid.show(e.toString(), ToastAndroid.BOTTOM);
      } else if (Platform.OS == "ios") Alert.alert("Erro!", e.toString());
      else {
        alert(e.toString());
      }
    }


  };
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
      <Text>Acesse sua Conta!</Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: 300,
        }}
      >
        <Formik
          initialValues={{ email: "", senha: "" }}
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
                //leftIcon={{name:'person', color:'black'}}
              />
              {errors.email && (
                <Text style={{ color: "#f00" }}>
                  O campo e-mail está inválido
                </Text>
              )}
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
                secureTextEntry //<-- ativa caracteres ocultos (***)
                placeholder="Senha"
                //leftIcon={{name:'lock', color:'black'}}
              />
              {errors.senha && (
                <Text style={{ color: "#f00" }}>
                  A senha precisa ter ao menos 6 dígitos
                </Text>
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
                  <Text>ACESSAR</Text>
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

      <Text>
        Ainda não tem conta! &nbsp;
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            nav.navigate("cadastro");
          }}
        >
          <Text>Crie agora!</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
