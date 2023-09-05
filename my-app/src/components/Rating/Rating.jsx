import React from "react";
import starCouleur from "../../assets/StartCouleur.png";
import starBlanc from "../../assets/StartBlanc.png";
import style from "./Rating.module.css";

function Rating({ rating }) {
  const fullStarCouleur = Array(5).fill(
    <img src={starCouleur} alt="starCouleur" className={style.etoile} />
  );
  const fullStarBlanc = Array(5).fill(
    <img src={starBlanc} alt="starBlanc" className={style.etoile} />
  );

  return (
    <div className={style.rating}>
      {fullStarCouleur.slice(0, rating).map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      {fullStarBlanc.slice(0, 5 - rating).map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default Rating;
