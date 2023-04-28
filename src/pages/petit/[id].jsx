import { useRouter } from "next/router";
import React from "react";
import Add from "./add";
import WithPrivateRoute from "@components/WithPrivateRoute";

const Edit = () => {

  const router = useRouter();

  const {id} = router.query
  
  return <Add id={id}/> ;
};

export default Edit;

Edit.Auth = WithPrivateRoute;
