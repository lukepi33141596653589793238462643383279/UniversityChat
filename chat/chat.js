// /chat/chat.js

import { auth } from "../firebase.js";
import { sendMessage, listenMessages } from "./messages.db.js";

// 📦 UI elements
const messagesBox = document.getElementById("messages");
const input = document.getElementById("messageInput");

// 🚀 render messages
function renderMessages(messages) {
  messagesBox.innerHTML = messages.map(msg => `
    <div class="msg">
      <strong>${msg.email}</strong>: ${msg.text}
    </div>
  `).join("");
}

// 👁️ start real-time listener
listenMessages(renderMessages);

// 📤 send message
window.sendMessage = async () => {
  const user = auth.currentUser;
  const text = input.value;

  if (!text.trim()) return;

  await sendMessage(text, user);
  input.value = "";
};
