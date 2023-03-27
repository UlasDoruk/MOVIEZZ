// Redux
import { setFavMovies } from "../redux/firebaseSlice";
import store from "../redux/store"
 
// Firebase
import { initializeApp } from "firebase/app";
import {
    getAuth
    ,createUserWithEmailAndPassword
    ,signInWithEmailAndPassword
    ,signOut
    ,updateProfile
    ,updateEmail
    ,updatePassword
} from "firebase/auth"
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

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
const db = getFirestore(app)

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
        if(user){
          onSnapshot(
            query(
              collection(db, "favMovies"),
              where("uid", "==", auth.currentUser.uid)
            ),
            (doc) => {
              store.dispatch(
                setFavMovies(
                  doc.docs.reduce(
                    (movies, movie) => [...movies, movie.data()],
                    []
                  )
                )
              );
            }
          );

        }
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

export const update = async(data)=>{
  try{
    await updateProfile(auth.currentUser,data)
  }catch(error){
    toast.error(error.message, { position: toast.POSITION.TOP_LEFT });
  }
}

export const updateEMAİL = async(data)=>{
  try{
    await updateEmail(auth.currentUser,data)
  }catch(error){
    toast.error(error.message, { position: toast.POSITION.TOP_LEFT });
    console.log(error.message)
  }
}

export const updatePASSWORD = async (data) => {
  try {
    await updatePassword(auth.currentUser, data);
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.TOP_LEFT });
    console.log(error.message);
  }
};

export const addFavorite =async data=>{
  const result = await addDoc(collection(db, "favMovies"), data);
}


export default app