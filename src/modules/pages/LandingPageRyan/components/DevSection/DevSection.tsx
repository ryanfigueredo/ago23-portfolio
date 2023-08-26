import React from "react";
import "./DevSection.css";
import Header from "../../../../../components/Header/Header"
import Footer from "../../../../../components/Footer/Footer"

const DevSection: React.FC = () => {
  return (
    <section id="developer">
       <Header />
        <div className="sectiondev">
          <b className="title">Desenvolvimento Web</b>

          <div>

            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="https://rkseller.com.br" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/rk.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>E-Commerce (React + TS) </li>
                      <li><span>Rk Desenvolvimento e Sistemas</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="https://libertasturismo.com.br" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/libertas.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>E-Commerce (Wordpress + Agendamento) </li>
                      <li><span>Libertas Turismo</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="https://layoutwiki.com.br" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/wiki.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Dev - Calculadora ROI + ROAS (React + TS)</li>
                      <li><span>Layout Wiki</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

            </div>
            
            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="https://cuidadosublime.com.br" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/sublime.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Site instituicional</li>
                      <li><span>Sublime Odontologia & Saúde Integrada</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="https://pedracom.com.br" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/pedracom.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Site instituicional</li>
                      <li><span>Pedracom Pedreiras</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              <div className="box">
                <a className="sitedev" href="https://vistasoberba.com.br" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/vistasoberba.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Site instituicional</li>
                      <li><span>Condomínio Vista Soberba</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

            </div>

            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="https://layoutdev.net.br/irmaosmury/" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/irmaosmury.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Site Instituicional c/ Orçamento de pedidos</li>
                      <li><span>Irmãos Mury</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              {/* <div className="box">
                <a className="sitedev" href="#" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/rocketchallenge.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>RocketSeat - Desafio Final</li>
                      <li><span>Food Explorer</span></li>
                    </ul>                      
                  </div>
                </a>
              </div> */}

              {/* <div className="box">
                <a className="sitedev" href="#" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/moviesrocket.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>RocketSeat - Desafio</li>
                      <li><span>Rocket Movies</span></li>
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

export default DevSection;
