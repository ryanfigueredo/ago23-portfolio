import React from "react";
import "./FeatureSection.css";

const FeatureSection: React.FC = () => {
  return (
    <div className="feature-section-container">
      
    <div className="onesection">
      
      <div className="education">
          <h1 className="title">Education</h1>
            <ul>
              <li>
                Universidade Federal Fluminense
                <p>Tecnologia em Sistemas de Computação - Cursando</p>
              </li>
            </ul>
            <ul>
              <li>
                Rocket Seat
                <p>Explorer, Full Stack - Mayk Brito e Rodrigo Gonçalves</p>
                <p>Ignite, Node.js / React.js - Diego Fernandes</p>
                <p>Figma for devs - Diego Fernandes</p>
              </li>
            </ul>
            
            
            <ul>
              <li>
                Udemy
                <p className="education-description">Banco de Dados e SQL</p>
                <p className="education-description">Excel do básico ao avançado - Caio Vinicius</p>
              </li>
            </ul>
           
            
            <ul>
              <li>
                Lucas Rosa
                <p>I.A para manipulação de Imagens - Passaporte para o Futuro</p>
              </li>
            </ul>
          
      </div>

      <div className="skills">
          <h1 className="title">Software Skills</h1>
          <div className="svgicons">
            <img src="/svg/ae.svg"/>
            <img src="/svg/ps.svg"/>
            <img src="/svg/pr.svg"/>
            <img src="/svg/ai.svg"/>
            <img src="/svg/figma.svg"/>
          </div>
          <div className="svgicons">          
            <img src="/svg/excel.svg"/>
            <img src="/svg/html.svg"/>
            <img src="/svg/css.svg"/>
            <img src="/svg/sql.svg"/>
            <img src="/svg/wp.svg"/>
          </div>
          
      </div>

    </div>

    <div className="work-experience">
          <h1 className="title">Work Experience</h1>
            <ul>
              <li>
                Girassol Mídias - Florianópolis-SC
                <p>Designer Gráfico - Jan/2018 a Dez/2018 - Home Office</p>
              </li>
            </ul>
            
            <ul>
              <li>
              Andréa Fontes - Rio Branco, AC
              <p>Designer Gráfico - Fev/2019 a Abr/2020 - Home Office</p>
              </li>
            </ul>
            
            <ul>
              <li>
                  Clínica Mãe e Lab Seabra - Seabra, BA
                  <p>Designer Gráfico - Out/2019 a Jan/2021 - Home Office</p>
              </li>
            </ul>

            <ul>
              <li>
                Vale Criativa - Seabra, BA
                <p>Designer Gráfico - Set/2020 a Jan/2021 - Presencial</p>
              </li>
            </ul>
            
            <ul>
              <li>
                Agência Oásis - Nova Friburgo, RJ 
                <p>Designer Gráfico - Fev/2021 a Jul/2021 - Presencial</p>
              </li>
            </ul>
            <ul >
              <li>
                Agência Fábrica de Ideias - Nova Friburgo, RJ
                <p>Designer Gráfico - Nov/2021 a Jan/2022 - Presencial</p>
              </li>

            </ul>

            <ul>
              <li>
                Rk Desenvolvimento e Sistemas - Rio de Janeiro, RJ
                <p>Desenvolvedor, Ecommerce, Bot de compras via Discord - Set/2021</p>
              </li>
            </ul>
            <ul>
              <li>
                Agência Layout - Nova Friburgo, RJ
                <p>Desenvolvedor, WordPress, React, Designer Gráfico - Mar/2023 - Presencial</p>
              </li>
            </ul>
      </div>

    <div>
      <div className="projects">
          <h1 className="title">Projects</h1>
          <div>

            <ul>
              <li>
                Profissional Player - CSGO
                <p>Stream Pack - Annaex MIBR Player</p>
              </li>
            </ul>

            <ul>
              <li>
                Vista Soberba
                <p>Desenvolvimento Wordpress e Social Mídia - Agência Layout</p>
              </li>
            </ul>
            
            <ul>
              <li>
                Pedracom
                <p>Desenvolvimento Wordpress - Agência Layout</p>
              </li>
            </ul>

            <ul>
              <li>
                Liberta Turismo
                <p>Desenvolvimento Wordpress e Social Mídia - Agência Layout</p>
              </li>
            </ul>

            <ul>
              <li>E-Commerce Rk Sistemas
              <p>Desenvolvimento React, Next, TypeScript e JavaScript</p>
              </li>
            </ul>
          </div>
      </div>

      <div className="languages">
          <h1 className="title">Languages</h1>
          <div>
            <ul>
              <li>Português Nativo</li>
              <li>Inglês Iniciante</li>
            </ul>
          </div>
      </div>
    </div>
    
  </div>    
  )
}

export default FeatureSection;
