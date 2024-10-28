import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPkDG_UqQwv_1YiyceU0wPTqqMukd9d3Q",
  authDomain: "netflix-clone-f3713.firebaseapp.com",
  projectId: "netflix-clone-f3713",
  storageBucket: "netflix-clone-f3713.appspot.com",
  messagingSenderId: "1078522904151",
  appId: "1:1078522904151:web:ba945da367dbb975226d12",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signUp, login, logout };
