import React, { useState } from "react";
import style from "./Carrousel.module.css";
import Droite from "../../assets/next.png";
import Gauche from "../../assets/prev.png";

function Carrousel({ logementPictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Fonction pour afficher l'image suivante
  const nextImg = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex >= logementPictures.length - 1 ? 0 : currentIndex + 1
    );
  };
    
  // Fonction pour afficher l'image précédente
  const prevImg = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? logementPictures.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className={style.imgContainerMulti}>
      <section
        className={style.section}
        style={{ backgroundImage: `url(${logementPictures[currentIndex]})` }}>
        {logementPictures.length > 1 ? (
          <>
            <div className={style.carrousel}>
              <div className={style.fleche}>
                <img
                  className={style.precedenteGauche}
                  src={Gauche}
                  alt="Précédente"
                  onClick={prevImg}
                />
                <img
                  className={style.suivanteDroite}
                  src={Droite}
                  alt="Suivante"
                  onClick={nextImg}
                />
              </div>
              <div className={style.number}>
                <p>
                  {currentIndex + 1} / {logementPictures.length}
                </p>
              </div>
            </div>
          </>
        ) : (
          // Pas de code ici car il s'agit de la div qui sera utilisée au cas où le carrousel ne contiendrait qu'une seule image.
          <div className={style.imgContainerSingle}>

          </div>
        )}
      </section>
    </div>
  );
}

export default Carrousel;
