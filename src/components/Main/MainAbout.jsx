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
          Aparecida, o término do curso foi agora no final de 2019 e colamos
          grau em Maio de 2020 por causa do "covid-19". Eu tive contato com as
          tecnologias de desenvolvimento web a partir do terceiro período, no
          meu primeiro contato eu acabei tomando gosto, principalmente com as
          tecnologias voltadas ao front end. A partir disso, eu procurei
          aprender um pouco mais sobre essas tecnologias, infelizmente muitas
          delas como o Bootstrap e JQuery por exemplo, não faziam parte da grade
          da faculdade, e para poder aprender o básico tive que estudar em
          paralelo.
        </figcaption>
      </AboutFigure>
      <AboutFigure>
        <img src={ArturAbout02} alt="artur_da_silva_rezende_02" />
        <figcaption>
          Com o término do curso, eu decidi, me aprofundar nos estudos
          relacionados ao Front-end antes de me aventurar no mercado de
          trabalho, pois, Infelizmente decidimos fazer o nosso projeto final
          (TCC) utilizando Java, que era a linguagem de programação
          familiarizada por todos do grupo, e com isso eu acabei dando mais
          atenção ao Java do que ao Front-end. Não estava nos meus planos
          começar a trabalhar na área após o término, devido ao meu antigo
          trabalho e insegurança com minhas habilidades, por isso decidir
          aprofundar um pouco mais nos estudos.
        </figcaption>
      </AboutFigure>
    </SectionAbout>
  );
};

export default MainAbout;
