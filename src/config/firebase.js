import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCDz_Hagb60K5F9yunLxxWns4-bc_UuPV8",
  authDomain: "simpleblog-65a75.firebaseapp.com",
  databaseURL: "https://simpleblog-65a75-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "simpleblog-65a75",
  storageBucket: "simpleblog-65a75.appspot.com",
  messagingSenderId: "171709994489",
  appId: "1:171709994489:web:d26e29cd18c5c35ab69928"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
