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
import PizzaDelicous from "./img/pizza-delicous.png";
import SpaceTourism from "./img/space.jpg";
import PokeApi from "./img/pokeapi.jpg";
import WeatherApp from "./img/weather-app.jpg";
import PlutonTheme from "./img/pluton-theme-react.png";
import DjozMaster from "./img/djoz-master-react-bg.png";
import ReactQuizApp from "./img/react-quiz-app.jpg";
import FrontendMentor from "./img/perfil_frontendmentor.PNG";
import Baker from "./img/baker.png";

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
                <span>Deploy: </span>
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
                <span>Deploy: </span>
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
                <span>Deploy: </span>
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
                <span>Deploy: </span>
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

        {/* PizzaDelicous */}
        <PortfolioFigure>
          <img src={PizzaDelicous} alt="PizzaDelicous" />
          <figcaption>
            <h2>Pizza Delicious</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Deploy: </span>
                <a
                  href="https://pizza-delicous-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pizza Delicious
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/pizza-delicous/"
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
                <span>Deploy: </span>
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
                <span>Deploy: </span>
                <a
                  href="https://pluton-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pluton Theme
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/pluton-react/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pluton Theme
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>

        {/* Pluton Theme */}
        <PortfolioFigure>
          <img src={DjozMaster} alt="djoz-master" />
          <figcaption>
            <h2>Pluton Theme</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Deploy: </span>
                <a
                  href="https://imagine-music-festival.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Djoz - Master
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/djoz-master-react/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Djoz - Master
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
                <span>Deploy: </span>
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
                <span>Deploy: </span>
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

        {/* baker*/}
        <PortfolioFigure>
          <img src={Baker} alt="Baker" />
          <figcaption>
            <h2>Baker Bakery</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Deploy: </span>
                <a
                  href="https://baker-bakery-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Baker Bakery
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/Baker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Baker Bakery
                </a>
              </li>
            </ul>
          </figcaption>
        </PortfolioFigure>
        {/* React Quiz */}
        <PortfolioFigure>
          <img src={ReactQuizApp} alt="React Quiz App" />
          <figcaption>
            <h2>React Quiz App</h2>
            <p>Visite o site ou Github do projeto através dos links abaixo.</p>
            <ul>
              <li>
                <span>Deploy: </span>
                <a
                  href="https://react-quiz-my-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Quiz App
                </a>
              </li>
              <li>
                <span>Github: </span>
                <a
                  href="https://github.com/ArturdaSilvaRezende/React-Quiz-App/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Quiz App
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
            te permite ter acesso a diversos desafios envolvendo HTML, CSS e JS
            (também pode ser usado bibliotecas e frameworks). Atualmente eu
            possuo 8 desafios concluídos, sendo 6 deles feitos em React, e a
            cada desafio concluído, você recebe uma pontuação, e minha pontuação
            atual e de 235.
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
