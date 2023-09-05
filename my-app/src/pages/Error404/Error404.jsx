import style from "./Error404.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className={style.pageError}>
      <p className={style.Err404}>404</p>
      <p className={style.textError}>
        Oups! La page que  vous demandez n'existe
        pas!
      </p>
      <Link to="/" className={style.lien}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
export default Error404;
