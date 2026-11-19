import { auth, isFirebaseConfigured } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { recordLanguageSectionViewed } from "./user-data.js";

const status = document.getElementById("language-progress-status");
let authError = null;
const authReady = new Promise(resolve => {
  if (!isFirebaseConfigured) {
    resolve(null);
    return;
  }
  onAuthStateChanged(auth, resolve, error => {
    authError = error;
    resolve(null);
  });
});
let progressQueue = Promise.resolve();

function showStatus(message, isError = false) {
  status.hidden = false;
  status.classList.toggle("error", isError);
  status.textContent = message;
}

function redirectToLevelLogin(level) {
  const returnUrl = new URL(window.location.href);
  returnUrl.searchParams.set("level", level);
  const loginUrl = new URL("../login.html", window.location.href);
  loginUrl.searchParams.set("next", returnUrl.href);
  window.location.assign(loginUrl.href);
}

export async function requestLevelAccess(level) {
  if (level === "beginner") return true;
  if (!["intermediate", "advanced"].includes(level)) {
    throw new Error("Choose a valid learning level.");
  }
  if (!isFirebaseConfigured) {
    redirectToLevelLogin(level);
    return false;
  }

  const user = await authReady;
  if (authError) {
    showStatus(`Could not check your sign-in status: ${authError.message}`, true);
    return false;
  }
  if (!user) {
    redirectToLevelLogin(level);
    return false;
  }
  return true;
}

export function recordLanguageSectionView(progress) {
  const operation = progressQueue.then(async () => {
    if (!isFirebaseConfigured) {
      showStatus("Configure Firebase to save learning progress.", true);
      return;
    }

    const user = await authReady;
    if (authError) throw authError;
    if (!user) {
      showStatus("Sign in to save progress toward learning this language.");
      return;
    }

    const result = await recordLanguageSectionViewed(progress);
    if (result.complete) {
      showStatus("All 18 required sections are complete across Beginner, Intermediate, and Advanced. This language is now recorded as learned in your profile.");
    } else {
      showStatus(`Progress saved: ${result.viewedCount} of ${result.totalSections} required section and level combinations viewed.`);
    }
  });

  progressQueue = operation.catch(error => {
    showStatus(`Could not save learning progress: ${error.message}`, true);
  });
  return progressQueue;
}
