import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import Login from "pages/session/login";
import { useEffect } from "react";

const WithPrivateRoute = ({ children }) => {
  const { auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/session/login");
    }
  }, [auth, router])
  

  return auth ? <>{children}</> : <Login />;
};

export default WithPrivateRoute;
