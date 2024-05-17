import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function register(
    email: string,
    firstName: string,
    lastName: string,
    password: string
) {
    const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    await updateProfile(credentials.user, { displayName: firstName });
    await auth.signOut();
}

export async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
}

export async function googleLogin() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
}

export async function logout() {
    await auth.signOut();
}
