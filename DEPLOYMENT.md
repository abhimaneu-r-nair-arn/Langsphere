# Deploy LangSphere

LangSphere is a static Firebase Hosting application with Firebase Authentication and Cloud Firestore.

## First-time setup

1. Install Node.js LTS.
2. Open PowerShell in the project folder:

   ```powershell
   cd "C:\ARN_!\Works\Major\Langsphere"
   npm install -g firebase-tools
   firebase login
   ```

3. In Firebase Console, open `langsphere-bacf4`:
   - Enable **Authentication → Sign-in method → Email/Password**.
   - Create a **Cloud Firestore** database.
   - Add your Hosting domain to **Authentication → Settings → Authorized domains** after deployment.

## Deploy

From the project folder:

```powershell
firebase deploy --only hosting,firestore:rules
```

The Hosting site is available at:

```text
https://langsphere-bacf4.web.app
https://langsphere-bacf4.firebaseapp.com
```

Use the `.web.app` address when sharing the app.

## Update the deployed app

After changing HTML, CSS, or JavaScript:

```powershell
firebase deploy --only hosting
```

After changing `firestore.rules`:

```powershell
firebase deploy --only firestore:rules
```

To preview changes without changing the live site:

```powershell
firebase emulators:start --only hosting
```
