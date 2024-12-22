import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo_sonatrach.svg";

function Logo() {
  const navigate = useNavigate();

  useEffect(() => {
    // Rediriger vers "/login" après 2 secondes
    const redirectTimeout = setTimeout(() => {
      navigate("/login");
    }, 2000);

    // Nettoyer le timeout lors du démontage du composant
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="w-full h-[100vh] flex justify-center">
      <img src={logo} alt="" className="w-[250px]" />
    </div>
  );
}

export default Logo;
