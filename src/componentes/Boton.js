import React from "react";
import "./hojasEstilo/Boton.css";

function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=") ;
  };

  const igual = valorIgual => {
    return (valorIgual === "=");
  }

if (esOperador(props.children)) {
  return (
    <div
    className="botonContenedor operador"
    onClick={() =>props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
} else if (igual(props.children)) {
  return (
    <div
    className="botonIgual"
    onClick={() =>props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
} else {
  return (
    <div
    className="botonContenedor"
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}
}

  //   return (
  //     <div
  //      className={`botonContenedor ${esOperador(props.children) ? "operador" : " "}`.trimEnd()}
  //       onClick={() => props.manejarClic(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // }
 

export default Boton;