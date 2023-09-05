import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import dataLogement from "../../datas/appartments.json";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import style from "./Fichelogement.module.css";
import { Navigate, useParams } from "react-router-dom";

function FicheLogement() {
  const { id } = useParams();

  const logement = dataLogement.find((logement) => logement.id === id);

  if (logement !== undefined) {
    return (
      <div className={style.page}>
        {logement && (
          <div key={logement.id}>
            <section className={style.infosLogement}>
              <Carrousel logementPictures={logement.pictures} />
              <div className={style.infos}>
                <div className={style.information}>
                  <h1 className={style.titre}>{logement.title}</h1>
                  <h2 className={style.location}>{logement.location}</h2>
                  <div>
                    {logement.tags.map((tag, index) => (
                      <span key={index} className={style.tag}>
                        {tag}{" "}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={style.divProprietaire}>
                  <aside className={style.proprietaire}>
                    <h2 className={style.noms}>{logement.host.name}</h2>
                    <img
                      src={logement.host.picture}
                      alt={logement.host.name}
                      className={style.picture}
                    />
                  </aside>

                  <aside>
                    <Rating rating={logement.rating} className={style.rating} />
                  </aside>
                </div>
              </div>
            </section>

            <section className={style.collapse}>
              <div className={style.divCollapse}>
                <Collapse
                  key={`description`}
                  collapseTitle={"Description"}
                  collapseContent={logement.description}
                />
              </div>
              <div className={style.divCollapse}>
                <Collapse
                  key={`equipments`}
                  collapseTitle={"Équipements"}
                  collapseContent={logement.equipments.map(
                    (equipment, index) => (
                      <li key={index} className={style.equipement}>
                        {equipment}
                      </li>
                    )
                  )}
                />
              </div>
            </section>
          </div>
        )}
      </div>
    );
  } else {
    return <Navigate to="/error" />;
  }
}

export default FicheLogement;
