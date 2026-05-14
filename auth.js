// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// 🔐 Register new user
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}


// 🔑 Login user
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}


// 🚪 Logout
export function logout() {
  return signOut(auth);
}
