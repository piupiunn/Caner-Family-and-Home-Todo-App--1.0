import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password, name, thumbnail) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password, name, thumbnail)
      .then((response) => {
        dispatch({ type: "LOGIN", payload: response.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, signup };
};
