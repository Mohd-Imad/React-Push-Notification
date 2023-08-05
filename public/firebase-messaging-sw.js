import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCVAoitzm3bDPZ-fsYLzbsQ3prKvDBP_u0",
    authDomain: "push-notification-fda0c.firebaseapp.com",
    projectId: "push-notification-fda0c",
    storageBucket: "push-notification-fda0c.appspot.com",
    messagingSenderId: "418486799406",
    appId: "1:418486799406:web:14413aa8906a82224de3bf"
  };

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BOA3xiYUM1w6VP4aEe2gzqWQCKlAq0dbFASd-OlR-4u4t29tZNt3MGmHRZPPT8Wohyp_6tmsx4G6qj5Uhwdhlwo",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
