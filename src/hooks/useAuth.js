import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children} </AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const router = useRouter();

  const [auth, setAuth] = useState(true);

  const [user, setUser] = useState({
    user: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    petits: [],
  });

  const signIn = (email, password) => {
    if (email === user.user.email && password === user.user.password) {
      setAuth(true);
      router.push("/petit");
    }
  };

  const logout = () => {
    setAuth(false);
    router.push("/");
  };

  return {
    user,
    setUser,
    auth,
    setAuth,
    signIn,
    logout,
  };
}
