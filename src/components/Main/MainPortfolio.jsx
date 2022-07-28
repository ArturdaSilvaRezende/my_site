import React from "react";

//styled components
import {
  PortfolioFigure,
  SectionPortfolio,
  PortfolioContainer,
  PortfolioFrontendMentor,
} from "./style/SectionPortfolio";
import { MainTitle } from "../GlobalStyle";

//images
import VideoGraph from "./img/videograph-master.png";
import GradSchool from "./img/grad-school.jpg";
import Ustora from "./img/ustora.jpg";
import WebHost from "./img/webhost.jpg";
import PizzaDelicious from "./img/pizza-delicious.jpg";
import SpaceTourism from "./img/space.jpg";
import PokeApi from "./img/pokeapi.jpg";
import WeatherApp from "./img/weather-app.jpg";
import PlutonTheme from "./img/pluton-theme-react.png";
import FrontendMentor from "./img/perfil_frontendmentor.PNG";

const MainPortfolio = (props) => {
  return (
    <SectionPortfolio id="portfolio">
      <MainTitle>Portfólio</MainTitle>

      <PortfolioContainer>
        {/* VideoGraph  */}
        <PortfolioFigure>
          <img src={VideoGraph} alt="VideoGraph" />
          <figcaption>
            <h2>Videograph-Master</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://videograph-master.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Videograph-Master
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/Videograph-Master"
                  target="_blank"
                  rel="noreferrer"
                >
                  Videograph-Master
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* GradSchool */}
        <PortfolioFigure>
          <img src={GradSchool} alt="GradSchool" />
          <figcaption>
            <h2>Grad Schoolr</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://projeto-grad-school-3e43a.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Grad Schoolr
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/Grad-School-Project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Grad Schoolr
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* Ustora */}
        <PortfolioFigure>
          <img src={Ustora} alt="Ustora" />
          <figcaption>
            <h2>Ustora</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://projeto-clone-ustora-templates.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ustora
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/Projeto-Clone-Ustora-Templates/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ustora
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* WebHost */}
        <PortfolioFigure>
          <img src={WebHost} alt="WebHost" />
          <figcaption>
            <h2>Web Host</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://projeto-webhost.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web Host
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/Projeto-Webhost/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web Host
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* PizzaDelicious */}
        <PortfolioFigure>
          <img src={PizzaDelicious} alt="PizzaDelicious" />
          <figcaption>
            <h2>Pizza Delicious</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://pizza-delicious-project-started.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pizza Delicious
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/Pizza-Delicious-project-started/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pizza Delicious
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* SpaceTourism */}
        <PortfolioFigure>
          <img src={SpaceTourism} alt="SpaceTourism" />
          <figcaption>
            <h2>Space Tourism</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://space-landpage-frontendmentor.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Space Tourism
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/space-landpage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Space Tourism
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* Pluton Theme */}
        <PortfolioFigure>
          <img src={PlutonTheme} alt="PlutonTheme" />
          <figcaption>
            <h2>Pluton Theme</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://pluton-theme-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pluton Theme
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/Pluton-Theme-React/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pluton Theme
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* Pokeapi */}
        <PortfolioFigure>
          <img src={PokeApi} alt="PokeApi" />
          <figcaption>
            <h2>Pokeapi</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://pokeapi-artur.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pokeapi
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/PokeApi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pokeapi
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* weather app */}
        <PortfolioFigure>
          <img src={WeatherApp} alt=" WeatherApp" />
          <figcaption>
            <h2>React Weather App</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Site: </span>
                <a
                  href="https://react-weather-app-artur.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Weather App
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/WeatherApp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Weather App
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>
      </PortfolioContainer>

      <PortfolioFrontendMentor>
        <img src={FrontendMentor} alt="FrontendMentor" />
        <figcaption>
          <h2>Meu perfil no Frontend Mentor</h2>
          <p>
            Eu também possuo um perfil no "Frontend Mentor", que é um site que
            permite ter acesso a diversos desafios envolvendo HTML, CSS e JS
            (também pode ser usado bibliotecas e frameworks) com o objetivo de
            aprimorar as habilidades na área. Além disso, o próprio site
            autoriza o uso dos desafios concluídos como portfólio. Atualmente eu
            possuo 6 desafios concluídos, sendo 5 deles feitos em React, e a
            cada desafio concluído, você recebe uma pontuação, e minha pontuação
            atual e de 145.
          </p>
          <a
            href="https://www.frontendmentor.io/profile/ArturdaSilvaRezende"
            target="_blank"
            rel="noreferrer"
          >
            Meu perfil ➔ Frontend Mentor
          </a>
        </figcaption>
      </PortfolioFrontendMentor>
    </SectionPortfolio>
  );
};

export default MainPortfolio;
