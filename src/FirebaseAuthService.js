import firebase from "./FirebaseConfig";

const auth = firebase.auth();

const registerUser = (email,password) => {
    return auth.createUserWithEmailAndPassword(email,password);
}

const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email,password);
}

const logoutUser = () => {
    return auth.signOut();
}

const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider;
    return auth.signInWithPopup(provider);
}

const suscribeToAuthChanges = (handleAuthChange) => {
    auth.onAuthStateChanged((user) => {
        handleAuthChange(user);
    })
}

const sendResetPasswordEmail = (email) => {
    return auth.sendPasswordResetEmail(email);
}

const FirebaseAuthService = {
    registerUser,
    loginUser,
    logoutUser,
    sendResetPasswordEmail,
    loginWithGoogle,
    suscribeToAuthChanges
}

export default FirebaseAuthService;