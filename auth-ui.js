import { auth, isFirebaseConfigured } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const panel = document.createElement("aside");
panel.className = "auth-panel";
panel.setAttribute("aria-label", "Account");
document.body.appendChild(panel);
const appRoot = location.pathname.includes("/languages/") ? "../" : "";

function showSignedOut() {
  panel.replaceChildren();
  const login = document.createElement("a");
  login.className = "auth-panel-link auth-panel-login";
  login.href = `${appRoot}login.html?next=${encodeURIComponent(location.href)}`;
  login.textContent = "Log in";
  const signup = document.createElement("a");
  signup.className = "auth-panel-link auth-panel-signup";
  signup.href = `${appRoot}signup.html?next=${encodeURIComponent(location.href)}`;
  signup.textContent = "Sign up";
  panel.append(login, signup);

  if (!isFirebaseConfigured) {
    const notice = document.createElement("span");
    notice.className = "auth-panel-notice";
    notice.textContent = "Firebase setup required";
    panel.append(notice);
  }
}

function showSignedIn(user) {
  panel.replaceChildren();
  const profile = document.createElement("a");
  profile.className = "auth-profile-button";
  profile.href = `${appRoot}profile.html`;
  profile.setAttribute("aria-label", `Open profile for ${user.displayName || user.email || "user"}`);
  profile.title = user.displayName || user.email || "Profile";

  const initials = (user.displayName || user.email || "U")
    .split(/[\s@]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join("");
  profile.textContent = initials;
  panel.append(profile);
}

if (isFirebaseConfigured) {
  onAuthStateChanged(auth, user => user ? showSignedIn(user) : showSignedOut());
} else {
  showSignedOut();
}