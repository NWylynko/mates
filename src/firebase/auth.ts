import { app } from "./index"
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User, signOut } from "firebase/auth";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signOutUser = () => signOut(auth);
export const onAuth = (callback: (user: User | null) => void) => onAuthStateChanged(auth, callback);