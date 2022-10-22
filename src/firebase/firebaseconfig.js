import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
require('dotenv').config()

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAI,
    projectId: process.env.PROJECTID,
    storageBucket:process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MENSSAGINGSENDERID,
    appId: process.env.APPID,
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);