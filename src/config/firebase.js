
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAR3y6d98cM9ZWbe2agRu8SeNLN4_2qx6Q",
  authDomain: "tech-blog-f0853.firebaseapp.com",
  databaseURL: "https://tech-blog-f0853-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tech-blog-f0853",
  storageBucket: "tech-blog-f0853.appspot.com",
  messagingSenderId: "514941049127",
  appId: "1:514941049127:web:8939ef60c9b1267986b102"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
