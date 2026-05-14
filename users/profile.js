import { auth } from "../firebase.js";
import {
  createUserProfile,
  getUserProfile,
  updateProfile
} from "./users.db.js";

// 📦 DOM
const usernameInput = document.getElementById("username");
const bioInput = document.getElementById("bio");

// 🧠 Create profile after signup
window.createProfile = async () => {
  const user = auth.currentUser;
  const username = usernameInput.value;

  if (!user || !username) return;

  await createUserProfile(user, username);

  alert("Profile created!");
  window.location.href = "../chat/chat.html";
};

// 👀 Load profile
window.loadProfile = async () => {
  const user = auth.currentUser;

  if (!user) return;

  const profile = await getUserProfile(user.uid);

  if (profile) {
    usernameInput.value = profile.username || "";
    bioInput.value = profile.bio || "";
  }
};

// 💾 Update profile
window.saveProfile = async () => {
  const user = auth.currentUser;

  await updateProfile(user.uid, {
    username: usernameInput.value,
    bio: bioInput.value
  });

  alert("Profile updated!");
};
