import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";

export const useValidateRegister = () => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const router = useRouter();

  const { user, setUser, auth, setAuth } = useAuth();

  const [dataRegister, setDataRegister] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setDataRegister({ ...dataRegister, [name]: value });
  };

  const handleChangeConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSave = e => {
    e.preventDefault();
    const { name, lastName, email, phone, password } = dataRegister;
    if (
      name.length >= 2 &&
      lastName.length >= 2 &&
      validEmail.test(email) &&
      phone.length >= 8 &&
      password === confirmPassword
    ) {
      setUser({ ...user, user: dataRegister });
      setAuth(true);
      router.push("/petit");
    }
  };

  useEffect(() => {
    if (auth) {
      router.push("/petit");
    }
  }, [auth, router]);

  return {
    dataRegister,
    setDataRegister,
    handleChange,
    confirmPassword,
    handleChangeConfirmPassword,
    handleSave,
    validEmail,
    user,
  };
};
