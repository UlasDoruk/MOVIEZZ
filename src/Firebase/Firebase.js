import { initializeApp } from "firebase/app";
import {
    getAuth
    ,createUserWithEmailAndPassword
    ,signInWithEmailAndPassword
    ,signOut
} from "firebase/auth"
import {toast} from "react-toastify"

const firebaseConfig = {
  apiKey: "AIzaSyAo7Yt5DUkCBpl786C3dArF25Yc6r99D_Q",
  authDomain: "moviezz-4ef02.firebaseapp.com",
  projectId: "moviezz-4ef02",
  storageBucket: "moviezz-4ef02.appspot.com",
  messagingSenderId: "296792758906",
  appId: "1:296792758906:web:29d182b4c62affa8e1b9c3",
  measurementId: "G-BTJG8JY9CR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const register = async (email, password, displayName) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      );
      user.displayName = displayName
    return user;
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.TOP_LEFT });
  }
};

export const login = async(email,password)=>{
    try{
        const {user} = await signInWithEmailAndPassword(auth,email,password)
        return user
    }catch(error){
        toast.error(error.message, { position: toast.POSITION.TOP_LEFT });
    }
}

export const logout = async (email, password) => {
  try {
    await signOut(auth)
    return true;
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.TOP_LEFT });
  }
};

export default app