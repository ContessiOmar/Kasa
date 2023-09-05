import style from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import imgBanner from "../../assets/banner.png";
import Thumb from "../../components/Card/Card";
import Card from "../../datas/appartments.json";

function Home() {
  return (
    <div className={style.page}>
      <div className={style.divBanner}>
        <Banner
          imgBanner={imgBanner}
          alt="Foret"
          texteBanner={"Chez vous, partout et ailleurs"}
        />
      </div>
      <div className={style.blockThumb}>
        {Card.map((logement) => {
          return (
            <div className={style.blockCard} key={logement.id}>
              <Thumb
                cardId={logement.id}
                cardTitre={logement.title}
                cardImg={logement.cover}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
