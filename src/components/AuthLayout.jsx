import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoaderComp from "./Loader";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();

  const [loader, setloader] = useState(true);
  const authStatus = useSelector((state) => state.status);

  useEffect(() => {
    // TODO : make it more easy to understand
    // if(authStatus==true)
    //   navigate("/")
    // else if(authStatus==false)
    //   navigate("/login")

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setloader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <LoaderComp/> : <>{children}</>;
}
