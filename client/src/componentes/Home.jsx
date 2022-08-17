import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = (e) => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Home</h1>
      {user === null ? (
        console.log("nada")
      ) : (
        <button onClick={handleClick}>Cerrar Sesion</button>
      )}
    </div>
  );
}
