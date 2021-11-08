import { useEffect, useState } from "react";
import initializationAuthentication from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

initializationAuthentication();
const useFirebase = () => {
  const [user, setuser] = useState({});
  const [error, seterror] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  // create new user -----register
  const newRegisterUser = () => {
    createUserWithEmailAndPassword(auth, user?.email, user?.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        seterror("");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  // user login
  const logInSignIn = () => {
    signInWithEmailAndPassword(auth, user?.email, user?.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        seterror("");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  //sign in with google
  const SignInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setuser(user);
        seterror("");
        // ...
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  // login or signup using github
  const SignInUsingGit = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const user = result.user;
        setuser(user);
        console.log(user);
        seterror("");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  // sign out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setuser("");
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("instance the state change", user);
        setuser(user);
      }
    });
  }, []);

  return {
    user,
    seterror,
    setuser,
    error,
    newRegisterUser,
    logInSignIn,
    SignInUsingGoogle,
    SignInUsingGit,
    handleSignOut,
  };
};

export default useFirebase;
