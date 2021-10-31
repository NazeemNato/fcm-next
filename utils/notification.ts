import { initializeApp } from "firebase/app";
import { getMessaging, getToken, deleteToken } from "firebase/messaging";
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
const app = initializeApp(config);

export const notification = async () => {
  if (typeof window !== "undefined") {
    const tk = localStorage.getItem("token");
    if (tk) {
      return tk;
    }

    const status = await Notification.requestPermission();
    if (status === "granted") {
const messaging = getMessaging(app);
      const token = await getToken(messaging, {
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

export const removeToken = async () => {
  if (typeof window !== "undefined") {
const messaging = getMessaging(app);
    await deleteToken(messaging);
    localStorage.removeItem("token");
  }
};
