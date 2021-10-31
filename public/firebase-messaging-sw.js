importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyByWevzPQxCjyonS7x8vB5jmM3QD5Iu9qY",
    authDomain: "alter-notifcication-test.firebaseapp.com",
    projectId: "alter-notifcication-test",
    storageBucket: "alter-notifcication-test.appspot.com",
    messagingSenderId: "145394511716",
    appId: "1:145394511716:web:3a35a15b534f0622929471",
    measurementId: "G-710G7TR9CH",
})

const messaging = firebase.messaging()
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // // Customize notification here
    // const notificationTitle = 'Background Message Title';
    // const notificationOptions = {
    //   body: 'Background Message body.',
    //   icon: '/firebase-logo.png'
    // };
  
    // self.registration.showNotification(notificationTitle,
    //   notificationOptions);
  });