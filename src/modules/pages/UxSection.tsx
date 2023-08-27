import React from "react";
import "../DevSection/DevSection.css";

const UxSection: React.FC = () => {
  return (
    <section id="ux">
       <div className="sectiondev">
          <b className="title">UX / UI</b>
          <div>

            <div className="sectiontwo">

              <div className="box">
                <a className="sitedev" href="" target="_blank" rel="noreferrer">
                  <img className="img-container" src="capaprojetos/rk.png" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Projeto Fig Ecommerce</li>
                      <li><span>Rk Desenvolvimento e Sistemas</span></li>
                    </ul>                      
                  </div>
                </a>
              </div>

              {/* <div className="box">
                <a className="sitedev" href="" target="_blank" rel="noreferrer">
                  <img className="img-container" src="" style={{ borderRadius: '.7rem' }}/>
                  <div className="boxdescriptiondev">
                    <ul>
                      <li>Agência Layout</li>
                      <li><span>Projeto em andamento</span></li>
                    </ul>                      
                  </div>
                </a>
              </div> */}
            </div>

           
          </div>
          
        </div>
    </section>
);
};
    
export default UxSection;