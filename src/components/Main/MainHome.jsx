import React from "react";

//styled components
import { SectionFigure, SectionHome } from "./style/SectionHome";

//images
import ArturImage from "./img/artur_rezende.jpg";

import Typewriter from "typewriter-effect";

const MainHome = (props) => {
  return (
    <SectionHome id="home">
      <SectionFigure>
        <figcaption>
          <hgroup>
            <h2>Olá, meu nome é</h2>
            <h1>Artur da Silva Rezende</h1>
            <h3>
              <Typewriter
                options={{
                  strings: [
                    "Desenvolvedor Front-End Júnior",
                    "Seja bem vindo(a)!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(3500).deleteAll().start();
                }}
              />
            </h3>
          </hgroup>
        </figcaption>
        <img src={ArturImage} alt="artur-da-silva-rezende" />
      </SectionFigure>
    </SectionHome>
  );
};

export default MainHome;
