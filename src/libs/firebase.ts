import { initializeApp } from 'firebase/app';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRABSE_APIKEY,
    authDomain: process.env.REACT_APP_FIRABSE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIRABSE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIRABSE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIRABSE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIRABSE_APPID
}

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);