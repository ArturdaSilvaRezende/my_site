import React from "react";

//styled components
import {
  FooterComponent,
  FooterContainer,
  FooterCurriculo,
  FooterFigure,
} from "./StyleFooter";
import { MainTitle } from "../GlobalStyle";

//images
import WhatsApp from "./img/whatsapp.png";
import Gmail from "./img/gmail.png";
import Linkedin from "./img/linkedin.png";
import Github from "./img/github.png";
import CurrículoFísico from "./img/currículo-físico.png";

const Footer = (prosp) => {
  return (
    <FooterComponent className="footer" id="contact">
      <MainTitle>Contato</MainTitle>
      <FooterContainer>
        {/* whatsapp */}
        <FooterFigure>
          <img src={WhatsApp} alt="WhatsApp" />
          <figcaption>
            <a
              href="https://web.whatsapp.com/send?phone=5562994818374"
              target="_blank"
              rel="noreferrer"
            >
              5562994818374
            </a>
          </figcaption>
        </FooterFigure>

        {/* gmail */}
        <FooterFigure>
          <img src={Gmail} alt="Gmail" />
          <figcaption>
            <p>arturrezende4@gmail.com</p>
            <p>artursrezende@gmail.com</p>
          </figcaption>
        </FooterFigure>

        {/* linkedin */}
        <FooterFigure>
          <img src={Linkedin} alt="Linkedin" />
          <figcaption>
            <a
              href="https://www.linkedin.com/in/artur-da-silva-rezende/"
              target="_blank"
              rel="noreferrer"
            >
              Ir para o Linkedin
            </a>
          </figcaption>
        </FooterFigure>

        {/* github */}
        <FooterFigure>
          <img src={Github} alt="Github" />
          <figcaption>
            <a
              href="https://github.com/ArturdaSilvaRezende/"
              target="_blank"
              rel="noreferrer"
            >
              Ir para o Github
            </a>
          </figcaption>
        </FooterFigure>

        {/* Currículo Físico */}
        <FooterFigure>
          <img src={CurrículoFísico} alt="CurrículoFísico " />
          <figcaption>
            <FooterCurriculo>
              <h2>Currículo Físico</h2>

              <a
                href="https://drive.google.com/file/d/1QntbxH53IquolvP3FwJVaU8OYOVel7tb/view?usp=drive_link/"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </FooterCurriculo>
          </figcaption>
        </FooterFigure>
      </FooterContainer>
    </FooterComponent>
  );
};

export default Footer;
