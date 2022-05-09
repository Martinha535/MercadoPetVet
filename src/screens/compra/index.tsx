import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, Picker, Dimensions } from "react-native";
import { Icon, Image } from "react-native-elements";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export interface CompraScreenProps {}

export function CompraScreen(props: CompraScreenProps) {
  const nav = useNavigation();
  const [formaPgto, setFormaPgto] = React.useState("0");
  // Dimensions e uma biblioteca que dá acesso ao recurso nativo
  // responsável por determinar a altura (h) e largura (w) para utilizar
  // nos componente ou outros fins
  //////////////////////////////////////////////
  // W é a largura atual da tela
  const w = Dimensions.get("window").width;
  // H é a altura atual da tela (caso queira usar 90% da altura, utiliza-se
  // H*0.9 para utilizar o conceito de porcentagem)
  const h = Dimensions.get("window").height;
  const [confirmacao, setConfirmacao] = React.useState("0");
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
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {confirmacao == "0" && (
          <View
            style={{
              height: "90%",
              width: "90%",
              backgroundColor: "#fff",
              borderRadius: 30,
              justifyContent: "space-around",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 3,
                height: 3,
              },
              minHeight: 320,
              shadowOpacity: 0.25,
              elevation: 5,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text>Selecione uma forma de pagamento:</Text>
              <Picker
                selectedValue={formaPgto}
                onValueChange={(value) => {
                  setFormaPgto(value);
                }}
                //o picker é umm componente do react native que permite criar um
                //balão com variados valores para seleção
                style={{ width: "90%" }}
              >
                <Picker.Item value="0" label="SELECIONAR" />
                <Picker.Item value="1" label="Cartão de crédito" />
                <Picker.Item value="2" label="Cartão de débito" />
                <Picker.Item value="3" label="PIX" />
                <Picker.Item value="4" label="Boleto" />
              </Picker>
            </View>
            {formaPgto == "1" && (
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Número do cartão</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#ddd",
                      width: 50,
                      height: 35,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                  >
                    <TextInput
                      maxLength={4}
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    ></TextInput>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#ddd",
                      width: 50,
                      height: 35,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                  >
                    <TextInput
                      maxLength={4}
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    ></TextInput>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#ddd",
                      width: 50,
                      height: 35,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                  >
                    <TextInput
                      maxLength={4}
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    ></TextInput>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#ddd",
                      width: 50,
                      height: 35,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                  >
                    <TextInput
                      maxLength={4}
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    ></TextInput>
                  </View>
                </View>
                <Text>Código de segurança</Text>
                <View
                  style={{
                    backgroundColor: "#ddd",
                    width: "70%",
                    height: 35,
                    borderRadius: 10,
                    margin: 5,
                  }}
                >
                  <TextInput
                    maxLength={5}
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  ></TextInput>
                </View>
                <Text>Nome do titular</Text>
                <View
                  style={{
                    backgroundColor: "#ddd",
                    width: "70%",
                    height: 35,
                    borderRadius: 10,
                    margin: 5,
                  }}
                >
                  <TextInput
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  ></TextInput>
                </View>
                <Text>Data de Vencimento</Text>
                <View
                  style={{
                    backgroundColor: "#ddd",
                    width: "70%",
                    height: 35,
                    borderRadius: 10,
                    margin: 5,
                  }}
                >
                  <TextInput
                    maxLength={3}
                    placeholder="00/00"
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  ></TextInput>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Text>Parcelas:</Text>
                  <Picker
                    //o picker é umm componente do react native que permite criar um
                    //balão com variados valores para seleção
                    style={{ width: "90%" }}
                  >
                    <Picker.Item label="1x S/JUROS" />
                    <Picker.Item label="2x S/JUROS" />
                    <Picker.Item label="3x S/JUROS" />
                    <Picker.Item label="4x S/JUROS" />
                    <Picker.Item label="5x S/JUROS" />
                    <Picker.Item label="6x S/JUROS" />
                    <Picker.Item label="7x S/JUROS" />
                    <Picker.Item label="8x S/JUROS" />
                    <Picker.Item label="9x S/JUROS" />
                    <Picker.Item label="10x S/JUROS" />
                    <Picker.Item label="11x S/JUROS" />
                    <Picker.Item label="12x S/JUROS" />
                  </Picker>
                </View>
              </View>
            )}
            {formaPgto == "2" && (
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Número do cartão</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#ddd",
                      width: 50,
                      height: 35,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                  >
                    <TextInput
                      maxLength={4}
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    ></TextInput>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#ddd",
                      width: 50,
                      height: 35,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                  >
                    <TextInput
                      maxLength={4}
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    ></TextInput>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#ddd",
                      width: 50,
                      height: 35,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                  >
                    <TextInput
                      maxLength={4}
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    ></TextInput>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#ddd",
                      width: 50,
                      height: 35,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                  >
                    <TextInput
                      maxLength={4}
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    ></TextInput>
                  </View>
                </View>
                <Text>Código de segurança</Text>
                <View
                  style={{
                    backgroundColor: "#ddd",
                    width: "70%",
                    height: 35,
                    borderRadius: 10,
                    margin: 5,
                  }}
                >
                  <TextInput
                    maxLength={5}
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  ></TextInput>
                </View>
                <Text>Nome do titular</Text>
                <View
                  style={{
                    backgroundColor: "#ddd",
                    width: "70%",
                    height: 35,
                    borderRadius: 10,
                    margin: 5,
                  }}
                >
                  <TextInput
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  ></TextInput>
                </View>
                <Text>Data de Vencimento</Text>
                <View
                  style={{
                    backgroundColor: "#ddd",
                    width: "70%",
                    height: 35,
                    borderRadius: 10,
                    margin: 5,
                  }}
                >
                  <TextInput
                    maxLength={3}
                    placeholder="00/00"
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  ></TextInput>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                ></View>
              </View>
            )}
            {formaPgto == "4" && (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ width: "90%", textAlign: "center" }}>
                  O seu boleto será gerado quando a compra for finalizada, O
                  boleto leva até 3 dias úteis para ser confirmado! Caso o
                  boleto não seja pago, seu pedido será cancelado
                  automaticamente.
                </Text>
              </View>
            )}
            {formaPgto == "3" && (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ textAlign: "center", width: "90%" }}>
                  O QR code do PIX será gerado ao finalizar a compra, sua
                  validade é de 24 horas. Caso não seja identificado o
                  pagamento, su pedido é cancelado!
                </Text>
              </View>
            )}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text>Selecione um endereço cadastrado:</Text>
              <Picker
                //o picker é umm componente do react native que permite criar um
                //balão com variados valores para seleção
                style={{ width: "90%" }}
              >
                <Picker.Item label="Meu endereço 1" />
              </Picker>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: w * 0.8,
                height: 60,
                marginTop: 10,
                backgroundColor: "rgb(187,136,59)",
                borderRadius: 15,
              }}
            >
              <Text
                onPress={() => {
                  setConfirmacao("1");
                }}
              >
                Finalizar
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {confirmacao == "1" && (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                padding: 20,
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                backgroundColor: "white",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
                shadowOpacity: 0.25,
                elevation: 5,
              }}
            >
              <Text>PEDIDO Nº - 31376017</Text>
              <Text style={{ marginVertical: 20 }}>
                Bolinha emborrachada com barulho
              </Text>
              <Text>Total do pedido: R$14,99</Text>
              <Text style={{ marginVertical: 20 }}>COMPRA FINALIZADA</Text>
              <Text style={{ color: "#0f0" }}>PAGAMENTO CONFIRMADO</Text>
              <Text style={{ marginVertical: 20 }}>
                STATUS: PREPARANDO ENVIO
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: w * 0.8,
                height: 60,
                marginTop: 10,
                backgroundColor: "rgb(187,136,59)",
                borderRadius: 15,
              }}
            >
              <Text
                onPress={() => {
                  setConfirmacao("0");
                }}
              >
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
