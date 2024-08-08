import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDM9r4UZ0JTzKrNq0PFcYyYG2sdoRc9M5Q",
    authDomain: "ecommerce-b38af.firebaseapp.com",
    projectId: "ecommerce-b38af",
    storageBucket: "ecommerce-b38af.appspot.com",
    messagingSenderId: "825840136643",
    appId: "1:825840136643:web:17d05a9821b74926f18d76"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
