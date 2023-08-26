import React, { useState } from "react";
import "../DevSection/DevSection.css";
import Header from "../../../../../components/Header/Header"
import Footer from "../../../../../components/Footer/Footer"

const DesignSection: React.FC = () => {
 
  return (
    <section id="designer">
       <Header />
      
        
        <div className="sectiondev">
          <b className="title">Design Gráfico</b>
          <div>

            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="/cafepalmares" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/cafe.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Layout</li>
                      <li><span>Café Palmares</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/odontoeasy" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/odontoeasy.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Layout</li>
                      <li><span>Clínica OdontoEasy</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/vistasoberba " rel="noreferrer">
                  <img className="img-container" src="capaprojetos/vistasoberbadesign.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Layout</li>
                      <li><span>Vista Soberba</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

            </div>

            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="/ferreira" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/ferreira.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Layout</li>
                      <li><span>Ferreira Telecom</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/etna"  rel="noreferrer">
                  <img className="img-container" src="capaprojetos/etna.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Layout</li>
                      <li><span>Etna Imóveis</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/gemini " rel="noreferrer">
                  <img className="img-container" src="capaprojetos/gemini.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Layout</li>
                      <li><span>Gemini Engenharia</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

            </div>
            
            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="/oborn" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/oborn.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Oásis</li>
                      <li><span>Vestuário Masculino O'Born</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/bring" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/bring.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Oásis</li>
                      <li><span>Vestuário Infantil e Feminino Bringport</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/colonial " rel="noreferrer">
                  <img className="img-container" src="capaprojetos/colonial.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Oásis</li>
                      <li><span>Restaurante Colonial Gourmet</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

            </div>

            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="/sublime" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/sublimepost.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Layout</li>
                      <li><span>Sublime Odontologia & Saúde Integrada</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              {/* <div className="box">
                <a className="sitedev" href="/bring" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/bring.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Oásis</li>
                      <li><span>Vestuário Infantil e Feminino Bringport</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="/colonial " rel="noreferrer">
                  <img className="img-container" src="capaprojetos/colonial.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Oásis</li>
                      <li><span>Restaurante Colonial Gourmet</span></li>
                    </ul>                      
                  </div>
                </a>
              </div> */}

            </div>
           
          </div>
          
        </div>
        <Footer />
      </section>
  );
};

export default DesignSection;


