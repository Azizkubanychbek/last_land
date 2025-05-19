// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Конфигурация возьми из консоли Firebase (пример ниже)
const firebaseConfig = {
    apiKey: "AIzaSyAfHIrHzSh46qmJ5GB-eTd0VfRuhVzGnmY",
    authDomain: "invet-66156.firebaseapp.com",
    projectId: "invet-66156",
    storageBucket: "invet-66156.firebasestorage.app",
    messagingSenderId: "172854547645",
    appId: "1:172854547645:web:ec90a1758418babfcdd3d4",
    measurementId: "G-K781F9PBYN"
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);

// Получаем Firestore (базу данных)
const db = getFirestore(app);

export { db };
