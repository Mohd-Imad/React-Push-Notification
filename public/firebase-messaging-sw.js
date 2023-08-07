importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAclMulFrV9fQT0twFeTaa_mq5t9rCprLQ",
  authDomain: "react-push-notification-bd42e.firebaseapp.com",
  projectId: "react-push-notification-bd42e",
  storageBucket: "react-push-notification-bd42e.appspot.com",
  messagingSenderId: "349836527765",
  appId: "1:349836527765:web:8e70f41f8dbd388858b39c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});