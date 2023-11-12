import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ btnText, link, text }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, je suis <span className="font-semibold">Kevin</span>👋
      <br />
      Développeur Web basé en France
    </h1>
  ),
  2: (
    <InfoBox
      text="Recherche une alternance pour développer mes compétences"
      link="/presentation"
      btnText="Mon Parcours"
    />
  ),
  3: (
    <InfoBox
      text="Création de nombreux projets personnels. Voyez plutôt"
      link="/projets"
      btnText="Visite de mon Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Besoin d'un alternant motivé et assoiffé de curiosité ?"
      link="/contact"
      btnText="Me Contacter"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
