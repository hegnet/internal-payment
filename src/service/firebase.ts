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
    apiKey: "AIzaSyBD1lwryVJDoxfXQsimAcrGplB6dC8fjBo",
    authDomain: "hegnets-bartendershop.firebaseapp.com",
    projectId: "hegnets-bartendershop",
    storageBucket: "hegnets-bartendershop.appspot.com",
    messagingSenderId: "1079071601788",
    appId: "1:1079071601788:web:3458ee10c77d27c58905f9",
    measurementId: "G-B0LB362MJN",
    databaseURL: "https://hegnets-bartendershop-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const database = getDatabase(app);

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
