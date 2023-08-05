import { initializeApp } from "firebase/app";
import {getMessaging, getToken} from 'firebase-messaging'


const firebaseConfig = {
  apiKey: "AIzaSyCVAoitzm3bDPZ-fsYLzbsQ3prKvDBP_u0",
  authDomain: "push-notification-fda0c.firebaseapp.com",
  projectId: "push-notification-fda0c",
  storageBucket: "push-notification-fda0c.appspot.com",
  messagingSenderId: "418486799406",
  appId: "1:418486799406:web:14413aa8906a82224de3bf"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app)




 