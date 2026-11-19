import { auth, isFirebaseConfigured } from "./firebase.js";
import { onAuthStateChanged, EmailAuthProvider, reauthenticateWithCredential, deleteUser, updateProfile, signOut }
  from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { loadProfile, saveProfile, deleteUserData } from "./user-data.js";

const state = document.getElementById("profile-state");
const form = document.getElementById("profile-form");
const message = document.getElementById("profile-message");
const learnedList = document.getElementById("learned-list");
const avatar = document.getElementById("profile-avatar");
const deleteButton = document.getElementById("delete-account-button");
const deleteForm = document.getElementById("delete-account-form");
const cancelDelete = document.getElementById("cancel-delete-button");
const deleteMessage = document.getElementById("delete-message");

const logoutButton = document.createElement("button");
logoutButton.type = "button";
logoutButton.className = "profile-logout";
logoutButton.textContent = "Log out";
state.after(logoutButton);
logoutButton.addEventListener("click", async () => {
  try {
    await signOut(auth);
    location.replace("index.html");
  } catch (error) {
    state.textContent = `Could not log out: ${error.message}`;
  }
});

if (!isFirebaseConfigured) {
  state.textContent = "Firebase is not configured";
  message.textContent = "Configure Firebase to load and save profile information.";
  logoutButton.disabled = true;
  form.querySelector("button").disabled = true;
  deleteButton.disabled = true;
}

if (isFirebaseConfigured) onAuthStateChanged(auth, async user => {
  if (!isFirebaseConfigured) return;
  if (!user) {
    location.replace(`login.html?next=${encodeURIComponent(location.href)}`);
    return;
  }

  state.textContent = user.email || "Signed in";
  avatar.textContent = (user.displayName || user.email || "U")
    .split(/[\s@]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join("");

  try {
    const data = await loadProfile();
    const profile = data.profile || {};
    document.getElementById("profile-name").value = profile.name || user.displayName || "";
    document.getElementById("profile-gender").value = profile.gender || "";
    document.getElementById("profile-age").value = profile.age || "";
    document.getElementById("profile-work").value = profile.workEducation || "";

    const learned = Array.isArray(data.learnedLanguages)
      ? data.learnedLanguages.filter(record =>
        record && typeof record.language === "string" && typeof record.level === "string"
      )
      : [];
    if (learned.length) {
      learnedList.replaceChildren();
      [...learned].reverse().forEach(record => {
        const item = document.createElement("article");
        item.className = "learned-item";
        const title = document.createElement("strong");
        title.textContent = record.language;
        const level = document.createElement("span");
        level.textContent = `${record.level} level`;
        item.append(title, level);
        if (record.learnedAt) {
          const date = new Date(record.learnedAt);
          if (!Number.isNaN(date.getTime())) {
            const learnedAt = document.createElement("time");
            learnedAt.dateTime = date.toISOString();
            learnedAt.textContent = `Opened ${date.toLocaleDateString()}`;
            item.append(learnedAt);
          }
        }
        learnedList.append(item);
      });
    }
  } catch (error) {
    message.textContent = `Could not load profile: ${error.message}`;
  }
});

form.addEventListener("submit", async event => {
  event.preventDefault();
  if (!auth.currentUser) return;
  const submit = form.querySelector("button");
  submit.disabled = true;
  try {
    const profile = await saveProfile({
      name: document.getElementById("profile-name").value,
      gender: document.getElementById("profile-gender").value,
      age: document.getElementById("profile-age").value,
      workEducation: document.getElementById("profile-work").value
    });
    await updateProfile(auth.currentUser, { displayName: profile.name });
    avatar.textContent = profile.name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0].toUpperCase()).join("") || "U";
    message.textContent = "Profile saved.";
  } catch (error) {
    message.textContent = error.message;
  } finally {
    submit.disabled = false;
  }
});

deleteButton.addEventListener("click", () => {
  deleteButton.hidden = true;
  deleteForm.hidden = false;
  document.getElementById("delete-password").focus();
});

cancelDelete.addEventListener("click", () => {
  deleteForm.hidden = true;
  deleteButton.hidden = false;
  document.getElementById("delete-password").value = "";
  deleteMessage.textContent = "";
});

deleteForm.addEventListener("submit", async event => {
  event.preventDefault();
  const user = auth.currentUser;
  const password = document.getElementById("delete-password").value;
  if (!user || !password) {
    deleteMessage.textContent = "Enter your password to confirm.";
    return;
  }
  if (!window.confirm("Permanently delete this LangSphere account and all saved LangSphere data?")) {
    return;
  }

  const confirmButton = document.getElementById("confirm-delete-button");
  confirmButton.disabled = true;
  try {
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
    await deleteUserData();
    await deleteUser(user);
    location.replace("signup.html");
  } catch (error) {
    const messages = {
      "auth/wrong-password": "The password is incorrect.",
      "auth/invalid-credential": "The password is incorrect.",
      "auth/requires-recent-login": "Please log in again before deleting the account.",
      "auth/too-many-requests": "Too many attempts. Try again later."
    };
    deleteMessage.textContent = messages[error.code] || `Could not delete account: ${error.message}`;
  } finally {
    confirmButton.disabled = false;
  }
});
