import "firebase/messaging";
import firebase from "firebase/app";
import axios from "axios";

const config = {
  apiKey: "AIzaSyByWevzPQxCjyonS7x8vB5jmM3QD5Iu9qY",
  authDomain: "alter-notifcication-test.firebaseapp.com",
  projectId: "alter-notifcication-test",
  storageBucket: "alter-notifcication-test.appspot.com",
  messagingSenderId: "145394511716",
  appId: "1:145394511716:web:3a35a15b534f0622929471",
  measurementId: "G-710G7TR9CH",
};

if(!firebase.apps.length){
  firebase.initializeApp(config);
}

export const notification = async () => {
  if (typeof window !== "undefined") {

    const tk = localStorage.getItem("token");
    if (tk) {
      return tk;
    }


    const status = await Notification.requestPermission();
    const messaging = firebase.messaging();
    
    if (status === "granted") {
      const token = await messaging.getToken({
        vapidKey:
          "BP9ZiQjq4Zfaqu7kI7TuX0t4fpyLSilgBDAdS3dP2gAL7tR-SPTPw2mHGXqNWVvk2ajKtGcaabE5UM4AHJyYLUI",
      });
      await axios.post(
        "https://push-notification.buckthorndev.repl.co/api/v1/push",
        {
          token,
        }
      );
      localStorage.setItem("token", token);
      return token;
    }
  }
};

export const deleteToken = async () => {
  if (typeof window !== "undefined") {
const messaging = firebase.messaging();

    await messaging.deleteToken();
    localStorage.removeItem("token");
  }
};
