import React from "react";
import "./AboutSection.css";
import "../../LandingPageRyan.css";
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"

const AboutSection: React.FC = () => {
  return (
    <section id="about">
       <Header />
      
    <div className="about-content">
      <div className="about-div">
        <div className="aboutcontentwhear">
          
            <ul className="content">
              <li>Olá! Sou Ryan Figueredo, um Desenvolvedor Front-End especializado em Design Gráfico e UI/UX. Atualmente, estou cursando Tecnologia em Sistemas de Computação na Universidade Federal Fluminense.</li>
              <li>Com vasta experiência em publicidade e marketing, sou um profissional apaixonado pela área tecnológica desde os meus 12 anos. Inicialmente, meu interesse se voltou para jogos online, especialmente os de FPS. A partir daí, meu talento para o design despertou, começando com o Corel Draw e criando camisas para lojas, embora naquela época ainda de forma amadora. Ao longo do tempo, tenho aprimorado minhas habilidades até alcançar conquistas significativas em minha trajetória profissional.</li>
              <li>Nascido em Feira de Santana, na Bahia, e atualmente residindo em Nova Friburgo, no estado do Rio de Janeiro, trago em meu portfólio um conjunto de competências valiosas que certamente serão de interesse para sua empresa. Minha dedicação à tecnologia, aliada à minha formação acadêmica e experiência prática, me torna um candidato ideal para contribuir com o crescimento e o sucesso de projetos inovadores.</li>
              <li>Agradeço pela visita ao meu site e estou ansioso para discutir como posso agregar valor à sua equipe e alcançar resultados excepcionais juntos.</li>
            </ul>
           
          
        </div>
        <div className="contentimage">
          <img className="imagemclass"
                src="/pictureryan.png"
                style={{ transition: "transform 0.3s ease" }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"} />
                
          <div className="titlename">
            Ryan Figueredo
          </div>
          <div className="descriptionabout">
            Fluminense Federal University
          </div>
        </div>
        </div>
      </div>

      <div className="feature-section-container">
      
    <div className="onesection">
      
      <div className="education">
          <h1 className="title">Formação</h1>
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
          <h1 className="title">Habilidades</h1>
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
          <h1 className="title">Experiência</h1>
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
                <p>Sócio Proprietário. Desenvolvedor, Ecommerce, Bot de compras, Marketing (Youtube e TikTok) - Set/2021</p>
              </li>
            </ul>
            <ul>
              <li>
                Agência Layout - Nova Friburgo, RJ
                <p>Desenvolvedor, WordPress, React, Designer Gráfico - Mar/2023 - Set/2023</p>
              </li>
            </ul>
      </div>

    <div>
      {/* <div className="projects">
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
      </div> */}

      <div className="languages">
          <h1 className="title">Idiomas</h1>
          <div>
            <ul>
              <li>Português Nativo</li>
              <li>Inglês Iniciante</li>
            </ul>
          </div>
      </div>
    </div>
  </div> 
  <br /><br /><br />
  <Footer />
    </section>

    
  );
};

export default AboutSection;
