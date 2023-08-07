import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAclMulFrV9fQT0twFeTaa_mq5t9rCprLQ",
  authDomain: "react-push-notification-bd42e.firebaseapp.com",
  projectId: "react-push-notification-bd42e",
  storageBucket: "react-push-notification-bd42e.appspot.com",
  messagingSenderId: "349836527765",
  appId: "1:349836527765:web:8e70f41f8dbd388858b39c"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);




 