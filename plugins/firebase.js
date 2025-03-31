import Vue from 'vue'
import  firebase  from 'firebase/compat/app'; //記得從compat引入 不要問我為甚麼
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQZs2cBvBoWtfGY7dcuMQ6Wvq7fIqYZIc",
  authDomain: "we-forever.firebaseapp.com",
  databaseURL: 'https://we-forever.firebaseio.com',
  projectId: "we-forever",
  storageBucket: "we-forever.appspot.com",
  messagingSenderId: "329609042806",
  appId: "1:329609042806:web:26e6ab96162cb3fb6a7857",
  measurementId: "G-S3P87F62ZX"
};

// Initialize Firebase
export const firebaseApp =  firebase.initializeApp(firebaseConfig);
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL) 
//狀態 LOCAL SESSION NONE
export const db = firebaseApp.firestore()

