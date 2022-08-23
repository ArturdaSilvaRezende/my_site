import React from "react";

//styled components
import { SectionAbout, AboutFigure } from "./style/SectionAbout";
import { MainTitle } from "../GlobalStyle";

//images
import ArturAbout01 from "./img/artur_about_01.jpg";
import ArturAbout02 from "./img/artur_about_02.jpg";

const MainAbout = (props) => {
  return (
    <SectionAbout id="about">
      <MainTitle>Sobre Mim</MainTitle>
      <AboutFigure>
        <img src={ArturAbout01} alt="artur_da_silva_rezende_01" />
        <figcaption>
          Me chamo Artur da Silva Rezende, sou graduado em Análise e
          Desenvolvimento de Sistemas pela FANAP - Faculdade Nossa Senhora
          Aparecida, eu tive contato com as tecnologias de desenvolvimento web a
          partir do terceiro período, no meu primeiro contato eu acabei tomando
          gosto, principalmente com as tecnologias voltadas ao front-end, foi
          onde eu acabei decidindo que queria iniciar minha carreia como
          desenvolvedor front-end.
        </figcaption>
      </AboutFigure>
      <AboutFigure>
        <img src={ArturAbout02} alt="artur_da_silva_rezende_02" />
        <figcaption>
          Com o término do curso, eu decidi, me aprofundar nos estudos
          relacionados ao Front-end, o que conseqüentemente me possibilitou
          aprender novas tecnologias e ver o mercado de trabalho de outra forma,
          eu acredito que, com o conhecimento que possuo hoje, apesar de não ter
          experiência de mercado, eu possa estar contribuindo e ajudando com o
          crescimento das empresas.
        </figcaption>
      </AboutFigure>
    </SectionAbout>
  );
};

export default MainAbout;
