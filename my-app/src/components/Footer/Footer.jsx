import logoFooter from "../../assets/footer_logo.png";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <img src={logoFooter} alt="Logo Kasa" className="logoFooter" />
      <p className={style.textFooter}>© 2020 Kasa. All rights reserved</p>;
    </div>
  );
}

export default Footer;
