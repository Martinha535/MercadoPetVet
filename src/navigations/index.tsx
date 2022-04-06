import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./../screens/home";
import { CadastroScreen } from "./../screens/cadastro";
import { PrincipalScreen } from "../screens/principal";

const Stack = createNativeStackNavigator();

export const NavegacaoPrincipal = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="principal" component={PrincipalScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="cadastro" component={CadastroScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
