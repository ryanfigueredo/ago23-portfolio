import React from "react";
import "./MainSection.css";

const MainSection: React.FC = () => {
  return (
    <div>
      <div className="movie">
        <video
          className="max-w-4xl rounded-3xl shadow-2xl"
          muted
          autoPlay
          loop
          style={{ transition: "transform 0.3s ease" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <source src="/movie.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>

      <div className="welcome-container">
        <b className="welcome-title">Seja Bem Vindo!</b>
        <div className="welcome-text">
          Obrigado pela visita, espero que tenha uma ótima experiência.
        </div>
      </div>
    </div>
  );
};

export default MainSection;
