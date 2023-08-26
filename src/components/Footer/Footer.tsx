import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="sectionfooter">
        <div className="boxfooter">
            <img className="logofooter" alt="" src="/vector1.svg" />
            {/* <div className="descricaofooter">
                <p>Landing Page desenvolvida por Ryan Figueredo</p>
                <p>Uma maneira de mostrar meu trabalho ao mundo</p>
                <p>e meu compromisso em crescer e contribuir.</p>
            </div> */}
        </div>

        <div className="boxfooter">
            <div className="descricaofooter">
                <ul>
                    <li><a href="/" className="custom-link" rel="noreferrer">Início</a></li>
                    <li><a href="/developer" className="custom-link" rel="noreferrer">Desenvolvimento</a></li>
                    <li><a href="/designer" className="custom-link" rel="noreferrer">Design Gráfico</a></li>
                </ul>
                
                
                
            </div>
        </div>

        <div className="boxfooter">
            <div className="descricaofooter">
                <ul>
                    <li><a href="mailto:contato@ryanfigueredo.com?subject=Interesse%20em%20negociar%20uma%20proposta&body=Olá,%20vi%20o%20seu%20portfólio%20e%20tenho%20interesse%20em%20negociar%20uma%20proposta." target="_blank" className="custom-link" rel="noreferrer">Email</a></li>
                    <li><a href="https://github.com/ryanfigueredo" target="_blank" className="custom-link" rel="noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/ryanfig/" target="_blank" className="custom-link" rel="noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </div> 

        <div className="boxfooter">
            <div className="descricaofooter">
                <ul>
                    <li><a href="https://api.whatsapp.com/send?phone=+5522998025040&text=Olá%!" target="_blank" className="custom-link" rel="noreferrer">WhatsApp</a></li>
                    <li><a href="https://www.behance.net/ryanfigueredoo" target="_blank" className="custom-link" rel="noreferrer">Behance</a></li>
                    <li><a href="https://www.instagram.com/ryanfig_/" target="_blank" className="custom-link" rel="noreferrer">Instagram</a></li>
                </ul>
            </div>
        </div> 

             
        </footer>
  );
};

export default Footer;