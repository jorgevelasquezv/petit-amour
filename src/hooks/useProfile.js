import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";

export const useProfile = () => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const router = useRouter();

  const { user, setUser, auth, setAuth } = useAuth();

  const [dataRegister, setDataRegister] = useState({
    name: user.user.name,
    lastName: user.user.lastName,
    email: user.user.email,
    phone: user.user.phone,
    password: user.user.password,
  });

  const [confirmPassword, setConfirmPassword] = useState(user.user.password);

  const [activateSave, setActivateSave] = useState(false);

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

  const handleActivateSave = () => {
    const { name, lastName, email, phone, password } = user.user;
    if (
      dataRegister.name !== name ||
      dataRegister.lastName !== lastName ||
      dataRegister.email !== email ||
      dataRegister.phone !== phone ||
      dataRegister.password !== password ||
      confirmPassword !== password
    ) {
      setActivateSave(true);
    } else {
      setActivateSave(false);
    }
    };
    
    useEffect(() => {   
            handleActivateSave();
    }, [dataRegister])
    

  return {
    dataRegister,
    setDataRegister,
    handleChange,
    confirmPassword,
    handleChangeConfirmPassword,
    handleSave,
    validEmail,
    user,
    activateSave,
  };
};
