import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import Notificaciones from "./Notificaciones";

export const Home = () => {
  const navigate = useNavigate();

  const handleAgregarProducto = () => {
    navigate("/agregar-nuevo-producto");
  };

  const handleActualizarStock = () => {
    navigate("/actualizar-stock");
  };

  const handleVerProductos = () => {
    navigate("/mis-productos");
  };

  const handleVerHistorial = () => {
    navigate("/historial");
  };

  const handleVerNotificaciones = () => {
    navigate("/notificaciones");
  };

  return (
    <div className="container-home">
      <div className="container-sub">
        <h1>Heladeria</h1>
        <button className="boton-inicio" onClick={handleAgregarProducto}>
          Agregar nuevo producto
        </button>
        <button className="boton-inicio" onClick={handleActualizarStock}>
          Actualizar stock
        </button>
        <button className="boton-inicio" onClick={handleVerProductos}>
          Mis productos
        </button>
        <button className="boton-inicio" onClick={handleVerHistorial}>
          Historial
        </button>
        <button className="boton-inicio" onClick={handleVerNotificaciones}>
          Stock bajo
        </button>
      </div>
    </div>
  );
};
