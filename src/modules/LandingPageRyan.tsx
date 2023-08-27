import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "./LandingPageRyan.css"

const LandingPageRyan: React.FC = () => {
  return ( 
    <div className="divmain">      
      <Header />
      <div>
      <div className="movie">
        <video
          className="max-w-5xl rounded-2xl "
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
    </div>
    <Footer />
    </div>

  )
}

export default LandingPageRyan;