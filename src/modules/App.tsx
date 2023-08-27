import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useNavigationType } from "react-router-dom"
import LandingPageRyan from "./LandingPageRyan"
import CafePalmaresGallery from "./pages/Gallery/CafePalmaresGallery"
import FerreiraGallery from "./pages/Gallery/FerreiraGallery"
import ColonialGallery from "./pages/Gallery/ColonialGallery"
import ObornGallery from "./pages/Gallery/ObornGallery"
import VistaSoberbaGallery from "./pages/Gallery/VistaSoberbaGallery"
import BringportGallery from "./pages/Gallery/BringportGallery"
import OdontoEasyGallery from "./pages/Gallery/OdontoEasyGallery"
import GeminGallery from "./pages/Gallery/GeminGallery"
import EtnaGallery from "./pages/Gallery/EtnaGallery"
import SublimeGallery from "./pages/Gallery/SublimeGallery"
import StreetGallery from "./pages/Gallery/StreetGallery"
import SportiveGallery from "./pages/Gallery/SportiveGallery"
import GamesGallery from "./pages/Gallery/GamesGallery"
import SportsSection from "./pages/SportsSection"
import DeveloperSection from "./pages/DevSection"
import DesignerSection from "./pages/DesignSection"
import AboutSection from "./pages/AboutSection/AboutSection"
import Error404 from '../Error404'

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cafepalmares":
        title = "Café Palmares";
        metaDescription = "Posts para mídias sociais da empresa Café Palmares";
        break;
        case "/ferreira":
        title = "Ferreira Telecom";
        metaDescription = "Posts para mídias sociais da empresa Ferreira Telecom";
        break;
        case "/colonial":
        title = "Colonial Gourmet";
        metaDescription = "Posts para mídias sociais do restaurante Colonial Gourmet";
        break;
        case "/oborn":
        title = "O'Born";
        metaDescription = "Posts para mídias sociais da marca de roupas O'born";
        break;
        case "/vistasoberba":
        title = "Vista Soberba";
        metaDescription = "Posts para mídias sociais do condomínio Vista Soberba";
        break;
        case "/bring":
        title = "Bringport";
        metaDescription = "Posts para mídias sociais da loja virtual bringport";
        break;
        case "/etna":
        title = "Etna";
        metaDescription = "Posts para mídias sociais da Etna Imóveis";
        break;
        case "/gemini":
        title = "Gemini Engenharia";
        metaDescription = "Posts para mídias sociais construtora Gemini";
        break;
        case "/sublime":
        title = "Sublime Odontologia & Saúde integrada";
        metaDescription = "Posts para mídias sociais para Cuidado Sublime";
        break;
        case "/games":
        title = "Autoral para E-sports";
        metaDescription = "Autoral para E-sports";
        break;
        case "/sportive":
        title = "Autoral para Mídia Esportiva";
        metaDescription = "Autoral para Mídia Esportiva";
        break;
        case "/street":
        title = "Street";
        metaDescription = "Street";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPageRyan />} />
      <Route path="/cafepalmares" element={<CafePalmaresGallery />} />
      <Route path="/ferreira" element={<FerreiraGallery />} />
      <Route path="/colonial" element={<ColonialGallery />} />
      <Route path="/oborn" element={<ObornGallery />} />
      <Route path="/vistasoberba" element={<VistaSoberbaGallery />} />
      <Route path="/bring" element={<BringportGallery />} />
      <Route path="/odontoeasy" element={<OdontoEasyGallery />} />
      <Route path="/etna" element={<EtnaGallery />} />
      <Route path="/gemini" element={<GeminGallery />} />
      <Route path="/sublime" element={<SublimeGallery />} />
      <Route path="/street" element={<StreetGallery />} />
      <Route path="/sportive" element={<SportiveGallery />} />
      <Route path="/games" element={<GamesGallery />} />
      <Route path="*" element={<Error404 />} />

      <Route path="/developer" element={<DeveloperSection />} />
      <Route path="/designer" element={<DesignerSection />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/sports" element={<SportsSection />} />
    </Routes>
  );
}

export default App;
