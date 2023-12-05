import React, { useState } from "react";
import "./Popper.css";
import Filter from "@/icons/filter";

export default function Popper({
  className,
  classNameContent,
  content,
  title,
}) {
  const [solapaVisible, setSolapaVisible] = useState(false);

  const toggleSolapa = () => {
    setSolapaVisible(!solapaVisible);
  };

  const cerrarSolapa = () => {
    setSolapaVisible(false);
  };

  return (
    <div
      className={`popper ${className}`}
      content-tooltip="Filtros"
      onClick={toggleSolapa}
    >
      <h2 className="popper__title ">{title}</h2>
      {solapaVisible && (
        <div
          className={`popper__content ${classNameContent}`}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      )}
      {solapaVisible && <div className="overlay" onClick={cerrarSolapa}></div>}
    </div>
  );
}
