import { auth, db, isFirebaseConfigured } from "./firebase.js";
import { doc, setDoc, getDoc, deleteDoc, serverTimestamp, arrayUnion }
  from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const LEARNING_LEVELS = ["beginner", "intermediate", "advanced"];
const LEARNING_SECTIONS = ["overview", "beginner", "learning", "syntax", "ecosystem", "proscons"];

function requireUser() {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase is not configured. Add your Firebase web app settings in firebase.js.");
  }
  if (!auth.currentUser) {
    throw new Error("Sign in to save your learning route.");
  }
  return auth.currentUser;
}

function isRoute(value) {
  return value && typeof value.language === "string" &&
    typeof value.level === "string" &&
    ["beginner", "intermediate", "advanced"].includes(value.level.toLowerCase());
}

export async function saveRoute(route) {
  const user = requireUser();
  if (!isRoute(route)) throw new Error("Choose a valid language and learning level.");

  const savedRoute = { language: route.language, level: route.level.toLowerCase() };
  localStorage.setItem(`route:${user.uid}`, JSON.stringify(savedRoute));
  await setDoc(doc(db, "users", user.uid), {
    route: savedRoute,
    updatedAt: serverTimestamp()
  }, { merge: true });
}

export async function loadRoute(onData) {
  const user = requireUser();
  const cached = localStorage.getItem(`route:${user.uid}`);
  if (cached) {
    try {
      const route = JSON.parse(cached);
      if (isRoute(route)) onData(route);
    } catch (error) {
      localStorage.removeItem(`route:${user.uid}`);
    }
  }

  const snap = await getDoc(doc(db, "users", user.uid));
  const route = snap.exists() ? snap.data().route : null;
  if (isRoute(route)) {
    localStorage.setItem(`route:${user.uid}`, JSON.stringify(route));
    onData(route);
  }
}

export async function saveProfile(profile) {
  const user = requireUser();
  const age = Number(profile.age);
  const name = String(profile.name || "").trim();
  if (!name) throw new Error("Enter your name.");
  if (!Number.isInteger(age) || age < 1 || age > 120) {
    throw new Error("Enter a valid age.");
  }
  const cleanProfile = {
    name: name.slice(0, 80),
    gender: String(profile.gender || "").trim().slice(0, 40),
    age,
    workEducation: String(profile.workEducation || "").trim().slice(0, 200)
  };
  await setDoc(doc(db, "users", user.uid), {
    profile: cleanProfile,
    updatedAt: serverTimestamp()
  }, { merge: true });
  return cleanProfile;
}

export async function loadProfile() {
  const user = requireUser();
  const snap = await getDoc(doc(db, "users", user.uid));
  return snap.exists() ? snap.data() : {};
}

export async function recordLanguageSectionViewed({ languageId, language, level, section }) {
  const user = requireUser();
  const id = String(languageId || "").trim().toLowerCase();
  const name = String(language || "").trim().slice(0, 60);
  const selectedLevel = String(level || "").toLowerCase();
  const selectedSection = String(section || "").toLowerCase();
  if (!id || id.includes("|") || !name ||
    !LEARNING_LEVELS.includes(selectedLevel) ||
    !LEARNING_SECTIONS.includes(selectedSection)) {
    throw new Error("Cannot record an invalid language section.");
  }

  const userRef = doc(db, "users", user.uid);
  const progressKey = `${id}|${selectedLevel}|${selectedSection}`;
  const requiredKeys = LEARNING_LEVELS.flatMap(requiredLevel =>
    LEARNING_SECTIONS.map(requiredSection => `${id}|${requiredLevel}|${requiredSection}`)
  );
  await setDoc(userRef, {
    viewedLanguageSections: arrayUnion(progressKey),
    updatedAt: serverTimestamp()
  }, { merge: true });

  const snap = await getDoc(userRef);
  const data = snap.exists() ? snap.data() : {};
  const viewedSections = new Set(
    Array.isArray(data.viewedLanguageSections) ? data.viewedLanguageSections : []
  );
  const viewedCount = requiredKeys.filter(key => viewedSections.has(key)).length;
  const complete = viewedCount === requiredKeys.length;
  const existingCompletion = data.languageCompletions && data.languageCompletions[id];

  if (complete && existingCompletion?.completed !== true) {
    await setDoc(userRef, {
      languageCompletions: {
        [id]: {
          language: name,
          languageId: id,
          completed: true,
          sectionsCompleted: requiredKeys.length,
          completedAt: new Date().toISOString()
        }
      },
      updatedAt: serverTimestamp()
    }, { merge: true });
  }

  return { complete, viewedCount, totalSections: requiredKeys.length };
}

export async function deleteUserData() {
  const user = requireUser();
  await deleteDoc(doc(db, "users", user.uid));
  Object.keys(localStorage)
    .filter(key => key.startsWith("route:") || key.startsWith("favs:"))
    .forEach(key => localStorage.removeItem(key));
}