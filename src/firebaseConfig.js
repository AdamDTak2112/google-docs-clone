import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBu77MTHxuYNydDPetfytRFfVAQQET2j6E",
    authDomain: "docs-clone-f8815.firebaseapp.com",
    projectId: "docs-clone-f8815",
    storageBucket: "docs-clone-f8815.appspot.com",
    messagingSenderId: "204308018343",
    appId: "1:204308018343:web:07d6b2f397e1466fd61782",
    measurementId: "G-P3KMRHV6R2"
};

export const app = initializeApp(firebaseConfig);
export const database =  getFirestore(app);