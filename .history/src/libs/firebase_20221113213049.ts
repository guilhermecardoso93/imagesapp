import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiGjCKUQju72CDf1KipscjmxeOEXzR2Z0",
  authDomain: "imageapp-e8e1a.firebaseapp.com",
  projectId: "imageapp-e8e1a",
  storageBucket: "imageapp-e8e1a.appspot.com",
  messagingSenderId: "598983249619",
  appId: "1:598983249619:web:b17714be214aa394198e26",
  measurementId: "G-FTDE387Z31",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp)