import { auth, isFirebaseConfigured } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
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
document.querySelector(".auth-switch a").href = `signup.html?next=${encodeURIComponent(next)}`;

if (!isFirebaseConfigured) {
  setupNotice.hidden = false;
  msg.textContent = "Account features are unavailable until Firebase is configured.";
}

document.getElementById("login-form").addEventListener("submit", async event => {
  event.preventDefault();
  if (!isFirebaseConfigured) return;
  const submit = event.currentTarget.querySelector("button");
  submit.disabled = true;
  try {
    await signInWithEmailAndPassword(
      auth,
      document.getElementById("li-email").value.trim(),
      document.getElementById("li-pass").value
    );
    location.assign(next);
  } catch (error) {
    msg.textContent = friendly(error);
  } finally {
    submit.disabled = false;
  }
});

document.getElementById("forgot").addEventListener("click", async event => {
  event.preventDefault();
  if (!isFirebaseConfigured) return;
  const email = document.getElementById("li-email").value.trim();
  if (!email) {
    msg.textContent = "Enter your email first.";
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    msg.textContent = "Password reset email sent.";
  } catch (error) {
    msg.textContent = friendly(error);
  }
});

function friendly(error) {
  const messages = {
    "auth/invalid-credential": "Wrong email or password.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/too-many-requests": "Too many attempts. Try again later.",
    "auth/user-disabled": "This account has been disabled."
  };
  return messages[error.code] || `Could not log in: ${error.message || "please try again."}`;
}
