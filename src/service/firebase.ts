// Import the functions you need from the SDKs you need
import {child, get, getDatabase, ref} from "firebase/database";
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {Product} from "../models/Product";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const dbRef = ref(getDatabase());
console.log(analytics);

export const getProducts: Promise<Product[]> = new Promise((resolve, reject) => {
    get(child(dbRef, `products`))
        .then(async (snapshot) => {
            if (snapshot.exists()) {
                resolve(snapshot.val())
            } else {
                reject("No data available");
            }
        }).catch((error) => {
        reject(error);
    });
});
