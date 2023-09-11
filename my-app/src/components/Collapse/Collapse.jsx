import style from "./Collapse.module.css";
import flecheBas from "../../assets/Bas.png";
import flecheHaut from "../../assets/Haut.png";
import React, { useState } from "react";

function Collapse(props) {
  // Initialise l'état aboutState avec la valeur booléenne "true"
  const [aboutState, setAboutState] = useState(true);
  // Initialise l'état animationActive avec la valeur booléenne "false"
  const [animationActive, setAnimationActive] = useState(false);

  // Fonction pour gérer le basculement de l'état aboutState
  const toggleState = () => {
    setAnimationActive(true);
    // Après 400 millisecondes, change l'état aboutState et désactive l'animation
    setTimeout(() => {
      setAboutState(!aboutState);
      setAnimationActive(false);
    }, 400);
  };

  return (
    <div className={style.Container}>
      <div className={style.Titre} onClick={toggleState}>
        <p>{props.collapseTitle}</p>
        <div
          className={`${style.flecheContainer} ${animationActive ? style.rotate : ""
            }`}
        >
          <img
            src={aboutState ? flecheHaut : flecheBas}
            alt={aboutState ? "fleche Haut" : "fleche Bas"}
            className={style.fleche}
          />
        </div>
      </div>
      {!aboutState && (
        <div className={style.content}>{props.collapseContent}</div>
      )}
    </div>
  );
}

export default Collapse;
