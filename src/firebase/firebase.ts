import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDGhCK-aKaMyoWp7lUKCFd8t-QmQYpOAY0',
  authDomain: 'portfolio-44239.firebaseapp.com',
  databaseURL: 'https://portfolio-44239.firebaseio.com',
  projectId: 'portfolio-44239',
  storageBucket: 'portfolio-44239.appspot.com',
  messagingSenderId: '935449794574',
  appId: '1:935449794574:web:f4bf7cb3068072207c045f',
  measurementId: 'G-KHFTRQ9PS4'
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
