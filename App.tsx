import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavegacaoPrincipal } from './src/navigations';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/config/firebase-config';

import * as BackgroundFetch from "expo-background-fetch"
import * as TaskManager from "expo-task-manager"
import * as Notifications from "expo-notifications"
import { AndroidNotificationPriority } from 'expo-notifications';
import  Constants  from 'expo-constants';
import { Platform } from 'react-native';
export default function App() {
 
  initializeApp(firebaseConfig);
 
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
