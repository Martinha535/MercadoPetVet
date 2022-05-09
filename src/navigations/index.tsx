import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./../screens/home";
import { CadastroScreen } from "./../screens/cadastro";
import { PrincipalScreen } from "../screens/principal";
import { RacoesScreen } from "../screens/racoes";
import { BiscoitosScreen } from "../screens/biscoitos";
import { AcessoriosScreen } from "../screens/acessorios";
import { ProdutoScreen } from "../screens/produto";
import { CompraScreen } from "../screens/compra";
//import { NavegacaoDrawer } from "./drawer-menu";

const Stack = createNativeStackNavigator();

export const NavegacaoPrincipal = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="principal" component={PrincipalScreen} />
      <Stack.Screen name="acessorios" component={AcessoriosScreen} />
      <Stack.Screen name="biscoitos" component={BiscoitosScreen} />
      <Stack.Screen name="racoes" component={RacoesScreen} />
      <Stack.Screen name="produto" component={ProdutoScreen} />
      <Stack.Screen name="compra" component={CompraScreen} />

      <Stack.Screen name="cadastro" component={CadastroScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
