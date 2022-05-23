import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavegacaoPrincipal } from './src/navigations';
import { initializeApp } from "firebase/app";

export default function App() {
  initializeApp({
    apiKey: "AIzaSyBs1v95OkrQTF5lWzuhUnrkfP_G8oLK0hk",
    authDomain: "mercadopetvet.firebaseapp.com",
    projectId: "mercadopetvet",
    storageBucket: "mercadopetvet.appspot.com",
    messagingSenderId: "706852489813",
    appId: "1:706852489813:web:0fdcf9b46e3833ac18e2dc"
  });  
  return (
   <NavegacaoPrincipal/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
