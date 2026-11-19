import { auth, isFirebaseConfigured } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const msg = document.getElementById("msg");
const setupNotice = document.getElementById("setup-notice");
const requestedNext = new URLSearchParams(location.search).get("next");
const fallbackNext = new URL("index.html", location.href);
let next = fallbackNext.href;
try {
  const nextUrl = requestedNext ? new URL(requestedNext, location.href) : fallbackNext;
  const authPaths = ["login.html", "signup.html"].map(page => new URL(page, location.href).pathname);
  if (nextUrl.origin === location.origin && !authPaths.includes(nextUrl.pathname)) {
    next = nextUrl.href;
  }
} catch (error) {
  console.warn("Ignoring invalid return URL:", error);
}
document.querySelector(".auth-switch a").href = `login.html?next=${encodeURIComponent(next)}`;

if (!isFirebaseConfigured) {
  setupNotice.hidden = false;
  msg.textContent = "Account features are unavailable until Firebase is configured.";
}

document.getElementById("signup-form").addEventListener("submit", async event => {
  event.preventDefault();
  if (!isFirebaseConfigured) return;
  const submit = event.currentTarget.querySelector("button");
  submit.disabled = true;
  try {
    const name = document.getElementById("su-name").value.trim();
    if (!name) {
      msg.textContent = "Enter your name.";
      return;
    }
    const credential = await createUserWithEmailAndPassword(
      auth,
      document.getElementById("su-email").value.trim(),
      document.getElementById("su-pass").value
    );
    await updateProfile(credential.user, {
      displayName: name
    });
    location.assign(next);
  } catch (error) {
    msg.textContent = friendly(error);
  } finally {
    submit.disabled = false;
  }
});

function friendly(error) {
  const messages = {
    "auth/email-already-in-use": "That email is already registered.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/operation-not-allowed": "Email/password accounts are not enabled."
  };
  return messages[error.code] || `Could not create account: ${error.message || "please try again."}`;
}
