import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text } from "react-native";
import { Icon, Image } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export interface ProdutoScreenProps {}

export function ProdutoScreen(props: ProdutoScreenProps) {
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
        
      </View>
    </View>
  );
}
