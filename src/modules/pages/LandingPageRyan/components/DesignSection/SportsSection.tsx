import React, { useState } from "react";
import "../DevSection/DevSection.css";
import Header from "../../../../../components/Header/Header"
import Footer from "../../../../../components/Footer/Footer"

const SportsSection: React.FC = () => {
 
  return (
    <section id="designer">
       <Header />
      
        
        <div className="sectiondev">
          <b className="title">Projetos Pessoais</b>
          <div>

            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="/street" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/street.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li></li>
                      <li><span>StreetWeat</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/sportive"  rel="noreferrer">
                  <img className="img-container" src="capaprojetos/sports.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li></li>
                      <li><span>Marketing Esportivo</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/games " rel="noreferrer">
                  <img className="img-container" src="capaprojetos/esports.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li></li>
                      <li><span>E-sports</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

            </div>
            
            
           
          </div>
          
        </div>
        <Footer />
      </section>
  );
};

export default SportsSection;


