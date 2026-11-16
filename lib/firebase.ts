// import { initializeApp, getApps, getApp } from "firebase/app"
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"

// // Your Firebase configuration object
// // Replace this with your actual Firebase config
// const firebaseConfig = {
//     apiKey: "AIzaSyDh-NV_6B1tt2mgw41duLNxKCnh5yHoa2I",
//     authDomain: "soundbase-876d8.firebaseapp.com",
//     projectId: "soundbase-876d8",
//     storageBucket: "soundbase-876d8.firebasestorage.app",
//     messagingSenderId: "867085386403",
//     appId: "1:867085386403:web:6936302479d963ff7af516",
// }

// // Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const auth = getAuth(app)
// const db = getFirestore(app)

// export { app, auth, db }




import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { initializeFirestore, enableIndexedDbPersistence } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDh-NV_6B1tt2mgw41duLNxKCnh5yHoa2I",
    authDomain: "soundbase-876d8.firebaseapp.com",
    projectId: "soundbase-876d8",
    storageBucket: "soundbase-876d8.firebasestorage.app",
    messagingSenderId: "867085386403",
    appId: "1:867085386403:web:6936302479d963ff7af516",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

// Initialize Firestore with persistence
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  console.error("Firestore persistence error:", err.code, err.message)
})

export { app, auth, db }




