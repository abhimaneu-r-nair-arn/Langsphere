import { auth, db, isFirebaseConfigured } from "./firebase.js";
import { doc, setDoc, getDoc, deleteDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

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

export async function markLanguageLearned(language, level) {
  const user = requireUser();
  const snap = await getDoc(doc(db, "users", user.uid));
  const existing = snap.exists() && Array.isArray(snap.data().learnedLanguages)
    ? snap.data().learnedLanguages
    : [];
  const record = {
    language: String(language).trim().slice(0, 60),
    level: String(level).toLowerCase(),
    learnedAt: new Date().toISOString()
  };
  if (!record.language || !["beginner", "intermediate", "advanced"].includes(record.level)) return;

  const matchingIndex = existing.findIndex(item =>
    item && typeof item.language === "string" &&
    item.language.toLowerCase() === record.language.toLowerCase()
  );
  if (matchingIndex >= 0) existing[matchingIndex] = record;
  else existing.push(record);

  await setDoc(doc(db, "users", user.uid), {
    learnedLanguages: existing,
    updatedAt: serverTimestamp()
  }, { merge: true });
}

export async function deleteUserData() {
  const user = requireUser();
  await deleteDoc(doc(db, "users", user.uid));
  Object.keys(localStorage)
    .filter(key => key.startsWith("route:") || key.startsWith("favs:"))
    .forEach(key => localStorage.removeItem(key));
}