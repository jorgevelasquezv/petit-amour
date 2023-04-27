import { useRouter } from "next/router";
import React from "react";
import WithPrivateRoute from "@components/WithPrivateRoute";
import { ViewPetitDetails } from "@components/ViewPetitDetails";

const ViewPetitsDetails = () => {
  const router = useRouter();

  const { id } = router.query;

  return <ViewPetitDetails id={id} />;
};

export default ViewPetitsDetails;

ViewPetitsDetails.Auth = WithPrivateRoute;
