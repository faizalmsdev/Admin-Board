
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";
    import {getStorage} from "firebase/storage"

    const firebaseConfig = {
    apiKey: "AIzaSyDzF1YCmi2Q7ofXaOGDCMEwRaRX4JfepSw" ,
    authDomain: "fbdatabase-2ffec.firebaseapp.com",
    projectId: "fbdatabase-2ffec",
    storageBucket: "fbdatabase-2ffec.appspot.com",
    messagingSenderId: "747795053178",
    appId: "1:747795053178:web:26e8ae80ff159d307559c3"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    export const auth = getAuth();
    export const storage = getStorage(app);
