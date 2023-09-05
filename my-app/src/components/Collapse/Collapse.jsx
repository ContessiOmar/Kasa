import style from "./Collapse.module.css";
import flecheBas from "../../assets/Bas.png";
import flecheHaut from "../../assets/Haut.png";
import React, { useState } from "react";

function Collapse(props) {
  const [aboutState, setAboutState] = useState(true);
  const toggleState = () => {
    setAboutState(!aboutState);
  };

  return (
    <div className={style.Container}>
      <div className={style.Titre} onClick={toggleState}>
        <p>{props.collapseTitle}</p>
        {aboutState && (
          <img src={flecheBas} alt="fleche Bas" className={style.fleche} />
        )}
        {!aboutState && (
          <img src={flecheHaut} alt="fleche Haut" className={style.fleche} />
        )}
      </div>
      {!aboutState && (
        <div className={style.content}>{props.collapseContent}</div>
      )}
    </div>
  );
}

export default Collapse;
