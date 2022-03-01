import { initializeApp } from 'firebase/app';
import { getFirestore ,collection } from 'firebase/firestore'
import { getAuth ,GoogleAuthProvider } from 'firebase/auth';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDt5sQ-t-n2Hu5itApzy4VJzzFysu_-sJc",
  authDomain: "disney-pluse-clone-29812.firebaseapp.com",
  projectId: "disney-pluse-clone-29812",
  storageBucket: "disney-pluse-clone-29812.appspot.com",
  messagingSenderId: "281614637727",
  appId: "1:281614637727:web:a9fd52fc652222e6fca0aa",
 
};

//init firebase app
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

//collection ref
const colRef = collection(db,"movies");

export { auth, provider, storage ,colRef };
export default db;

