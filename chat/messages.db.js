// /chat/messages.db.js

import { db } from "../firebase.js";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 📦 reference to messages collection
const messagesRef = collection(db, "messages");

// 💬 send message to database
export async function sendMessage(text, user) {
  if (!user) return;

  return await addDoc(messagesRef, {
    text: text,
    uid: user.uid,
    email: user.email,
    createdAt: serverTimestamp()
  });
}

// 👁️ real-time listener
export function listenMessages(callback) {
  const q = query(messagesRef, orderBy("createdAt", "asc"));

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    callback(messages);
  });
}
