import React from "react";

//styled components
import { SectionAbout, AboutFigure } from "./style/SectionAbout";
import { MainTitle } from "../GlobalStyle";

const MainAbout = () => {
  return (
    <SectionAbout id="about">
      <MainTitle>Sobre Mim</MainTitle>
      <AboutFigure>
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

      <span className="about__br"></span>

      <AboutFigure>
        <figcaption>
          Com o término do curso, eu decidi, me aprofundar nos estudos
          relacionados ao Front-end, o que conseqüentemente me possibilitou
          aprender novas tecnologias e ver o mercado de trabalho de outra forma.
          Com o conhecimento que eu adquiri até aqui, eu construi esse site e
          todos os projetos contidos na seção portfólio, o que me possibilitou
          obter experiência em diversos aspectos, como por exemplo, criação de
          aplicações responsivas, consumo de API, criação de SPA, animações etc.
          eu acredito que, com o conhecimento que possuo hoje, apesar de não ter
          experiência de mercado, eu possa estar contribuindo e ajudando com o
          crescimento das empresas.
        </figcaption>
      </AboutFigure>
    </SectionAbout>
  );
};

export default MainAbout;
