import { auth, isFirebaseConfigured } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { loadRoute, saveRoute } from "./user-data.js";

const syncStatus = document.getElementById("learning-sync-status");
const levelToggle = document.getElementById("level-toggle");
const languageInput = document.getElementById("learning-language-input");
let currentUser = null;
let restoringRoute = false;

function findExactLanguage(value) {
  const query = value.trim().toLowerCase();
  return window.languages.find(language =>
    language.name.toLowerCase() === query || language.id.toLowerCase() === query
  );
}

async function persistLearningRoute(route) {
  if (!currentUser) return;
  try {
    await saveRoute(route);
    syncStatus.textContent = "Your learning route is saved to your account.";
  } catch (error) {
    syncStatus.textContent = `Could not save your learning route: ${error.message}`;
  }
}

window.persistLearningRoute = persistLearningRoute;
window.markLanguageLearned = async (language, level) => {
  if (!currentUser) return;
  try {
    const { markLanguageLearned } = await import("./user-data.js");
    await markLanguageLearned(language, level);
  } catch (error) {
    console.warn("Could not record learned language:", error);
  }
};

function saveCurrentSelection() {
  if (restoringRoute || !currentUser || !levelToggle || !languageInput) return;
  const language = findExactLanguage(languageInput.value);
  const level = levelToggle.querySelector(".level-option.active")?.dataset.level;
  if (language && level) persistLearningRoute({ language: language.name, level });
}

levelToggle?.addEventListener("click", saveCurrentSelection);
languageInput?.addEventListener("input", saveCurrentSelection);

function restoreRoute(route) {
  if (!route || !levelToggle || !languageInput) return;
  const level = route.level.toLowerCase();
  const language = findExactLanguage(route.language);
  const levelOption = levelToggle.querySelector(`[data-level="${level}"]`);
  if (!language || !levelOption) return;

  restoringRoute = true;
  levelOption.click();
  languageInput.value = language.name;
  languageInput.dispatchEvent(new Event("input", { bubbles: true }));
  restoringRoute = false;
  syncStatus.textContent = "Your saved learning route is ready.";
}

if (isFirebaseConfigured) {
  onAuthStateChanged(auth, async user => {
    currentUser = user;
    if (!user) {
      syncStatus.innerHTML = 'Sign in to sync your learning route across devices. <a href="login.html?next=learning.html">Log in</a> or <a href="signup.html?next=learning.html">sign up</a>.';
      return;
    }

    syncStatus.textContent = "Loading your saved learning route...";
    try {
      await loadRoute(restoreRoute);
      if (!syncStatus.textContent.includes("saved learning route is ready")) {
        syncStatus.textContent = "Choose a language and level to save your learning route.";
      }
    } catch (error) {
      syncStatus.textContent = `Could not load your saved route: ${error.message}`;
    }
  });
} else if (syncStatus) {
  syncStatus.innerHTML = 'Configure Firebase to save routes to an account. <a href="login.html">Open account setup</a>.';
}
