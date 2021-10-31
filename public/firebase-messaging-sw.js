importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyByWevzPQxCjyonS7x8vB5jmM3QD5Iu9qY",
    authDomain: "alter-notifcication-test.firebaseapp.com",
    projectId: "alter-notifcication-test",
    storageBucket: "alter-notifcication-test.appspot.com",
    messagingSenderId: "145394511716",
    appId: "1:145394511716:web:3a35a15b534f0622929471",
    measurementId: "G-710G7TR9CH",
})

const isSupported = firebase.messaging.isSupported();
if (isSupported) {
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
        self.registration.showNotification(title, { body, icon: image || '/assets/icons/icon-72x72.png' });
    });
}