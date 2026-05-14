import { db } from "../firebase.js";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 👤 Create user profile
export async function createUserProfile(user, username) {
  return await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    username: username,
    bio: "",
    avatar: "",
    createdAt: Date.now()
  });
}

// 🔍 Get user profile
export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// ✏️ Update profile
export async function updateProfile(uid, data) {
  return await updateDoc(doc(db, "users", uid), data);
}
