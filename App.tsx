import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavegacaoPrincipal } from './src/navigations';
import { initializeApp } from "firebase/app";
import * as BackgroundFetch from "expo-background-fetch"
import * as TaskManager from "expo-task-manager"
import * as Notifications from "expo-notifications"
import { AndroidNotificationPriority } from 'expo-notifications';
import  Constants  from 'expo-constants';
import { Platform } from 'react-native';
export default function App() {
  async function schedulePushNotification() {
    async function sendPushNotification(expoPushToken:any) {
      const message = {
        to: expoPushToken,
        sound: "default",
        title: "50% OFF",
        body: "Válido para todas as rações de até 1KG! Aproveite!",
        priority: AndroidNotificationPriority.MAX,
        data: { someData: "goes here" },
      };
      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-encoding": "gzip, deflate",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "50% OFF",
        body: "Válido para todas as rações de até 1KG! Aproveite!",
        priority: AndroidNotificationPriority.MAX,
      },
      trigger: { seconds: 1 },
    });
  }
async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      //console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",

        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    return token;
  }

const PROMO = "BACKGROUND_TASK";

  TaskManager.defineTask(PROMO, async () => {
  try{
      schedulePushNotification();

      // const receivedNewData = "Push";

      // return receivedNewData
      //   ? BackgroundFetch.Result.NewData
      //   : BackgroundFetch.Result.NoData;
    } catch (err) {
      //return BackgroundFetch.Result.Failed;
    }
  });

  const RegisterBackgroundTask = async () => {
    try {
      await BackgroundFetch.registerTaskAsync(PROMO, {
        minimumInterval: 1, // seconds,
        startOnBoot: true,
        stopOnTerminate: false,
      });
      console.log("Task registered");
    } catch (err) {
      console.log("Task Register failed:", err);
    }
  };
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
