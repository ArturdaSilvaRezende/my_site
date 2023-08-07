import React from "react";

//styled components
import {
  SectionSkills,
  SkillContents,
  SkillFigure,
} from "./style/SectionSkills";
import { MainTitle } from "../GlobalStyle";

//images
import html5 from "./img/html5.png";
import css3 from "./img/css3.png";
import javascript from "./img/javascript.png";
import bootstrap from "./img/bootstrap.png";
import jquery from "./img/jquery.png";
import sass from "./img/sass.png";
import webpack from "./img/webpack.png";
import git from "./img/git.png";
import react from "./img/react.png";
import typescript from "./img/typescript.png";
import npm from "./img/npm.png";
import yarn from "./img/yarn.png";

const MainSkills = (props) => {
  return (
    <SectionSkills id="skills">
      <MainTitle>Habilidades</MainTitle>
      <SkillContents>
        {/* html5 */}
        <SkillFigure>
          <figcaption>
            <h2>HTML 5</h2>
            <ul>
              <li>Configuração de meta tags</li>
              <li>Marcação semântica</li>
              <li>Validações de formulário</li>
              <li>Inserção de bibliotecas e frameworks</li>
            </ul>
          </figcaption>
          <img src={html5} alt="html5" />
        </SkillFigure>

        {/* css3 */}
        <SkillFigure>
          <figcaption>
            <h2>CSS 3</h2>
            <ul>
              <li>Box model</li>
              <li>Positions</li>
              <li>Displays</li>
              <li>Reset</li>
              <li>Flexbox</li>
              <li>Grid Layout</li>
              <li>Design responsivo</li>
              <li>Cross Browser Compatibility</li>
            </ul>
          </figcaption>
          <img src={css3} alt="css3" />
        </SkillFigure>

        {/* javascript */}
        <SkillFigure>
          <figcaption>
            <h2>JAVASCRIPT</h2>
            <ul>
              <li>
                Introdução e base:
                <ul className="skill__description">
                  <li>
                    <span>Variáveis</span>
                  </li>
                  <li>
                    <span>Tipos primitivos</span>
                  </li>
                  <li>
                    <span>Estruturas de repetição</span>
                  </li>
                  <li>
                    <span>Condicionais</span>
                  </li>
                  <li>
                    <span>Arrays</span>
                  </li>
                  <li>
                    <span>operadores</span>
                  </li>
                  <li>
                    <span>Escopo</span>
                  </li>
                  <li>
                    <span>Funções</span>
                  </li>
                  <li>
                    <span>Eventos</span>
                  </li>
                  <li>
                    <span>IIFE</span>
                  </li>
                  <li>
                    <span>Use Strict</span>
                  </li>
                  <li>
                    <span>Hoisting</span>
                  </li>
                </ul>
              </li>
              <li>
                Programação Assíncrona:
                <ul className="skill__description">
                  <li>
                    <span>setTimeout</span>
                  </li>
                  <li>
                    <span>setInterval</span>
                  </li>
                  <li>
                    <span>callback</span>
                  </li>
                  <li>
                    <span>promises</span>
                  </li>
                  <li>
                    <span>async-await</span>
                  </li>
                </ul>
              </li>
              <li>Manipulação da DOM</li>
              <li>Manipulação de animações</li>
              <li>Conhecimento em ES5 / ES6</li>
              <li>
                Consumo de API:
                <ul className="skill__description">
                  <li>
                    <span>fetch</span>
                  </li>
                  <li>
                    <span>axios</span>
                  </li>
                </ul>
              </li>
            </ul>
          </figcaption>
          <img src={javascript} alt="javascript" />
        </SkillFigure>

        {/* bootstrap */}
        <SkillFigure>
          <figcaption>
            <h2>BOOTSTRAP 4/5</h2>
            <ul>
              <li>Instalação e configuração</li>
              <li>Sistema grid</li>
              <li>Utilização e estruturação das classes</li>
              <li>Utilização dos componentes</li>
            </ul>
          </figcaption>
          <img src={bootstrap} alt="bootstrap" />
        </SkillFigure>

        {/* jquery */}
        <SkillFigure>
          <figcaption>
            <h2>JQUERY</h2>
            <ul>
              <li>Instalação e configuração</li>
              <li>Manipulação da DOM</li>
              <li>Callbacks</li>
              <li>Animações</li>
            </ul>
          </figcaption>
          <img src={jquery} alt="jquery" />
        </SkillFigure>

        {/* sass */}
        <SkillFigure>
          <figcaption>
            <h2>SASS</h2>
            <ul>
              <li>Criação de variáveis</li>
              <li>Nesting</li>
              <li>Partials</li>
              <li>Mixins</li>
              <li>Extend / Inheritance</li>
              <li>Interpolation</li>
            </ul>
          </figcaption>
          <img src={sass} alt="sass" />
        </SkillFigure>

        {/* webpack */}
        <SkillFigure>
          <figcaption>
            <h2>WEBPACK</h2>
            <ul>
              <li>
                Criação de ambiente:
                <ul className="skill__description">
                  <li>
                    <span>ambiente de desenvolvimento </span>
                  </li>
                  <li>
                    <span>ambiente de produção </span>
                  </li>
                </ul>
              </li>
              <li>Configuração do entry point / output</li>
              <li>Configuração dos loaders / babel</li>
              <li>Criação dos scripts no arquivo json</li>
              <li>Execução de comandos através do terminal - CLI</li>
            </ul>
          </figcaption>
          <img src={webpack} alt="webpack" />
        </SkillFigure>

        {/* react */}
        <SkillFigure>
          <figcaption>
            <h2>REACT</h2>
            <ul>
              <li>
                Introdução e base:
                <ul className="skill__description">
                  <li>
                    <span>jsx</span>
                  </li>
                  <li>
                    <span>props</span>
                  </li>
                  <li>
                    <span>state</span>
                  </li>
                  <li>
                    <span>componentização (funcional)</span>
                  </li>
                  <li>
                    <span>Renderização condicional</span>
                  </li>
                  <li>
                    <span>Composição</span>
                  </li>
                  <li>
                    <span>Context API</span>
                  </li>
                </ul>
              </li>
              <li>
                Rendering:
                <ul className="skill__description">
                  <li>
                    <span>Component Life Cycle</span>
                  </li>
                  <li>
                    <span>Lists / Keys</span>
                  </li>
                  <li>
                    <span>Render Props</span>
                  </li>
                  <li>
                    <span>Refs</span>
                  </li>
                  <li>
                    <span>Events</span>
                  </li>
                </ul>
              </li>
              <li>
                Hooks:
                <ul className="skill__description">
                  <li>
                    <span>useState</span>
                  </li>
                  <li>
                    <span>useEffect</span>
                  </li>
                  <li>
                    <span>useCallback</span>
                  </li>
                  <li>
                    <span>useRef</span>
                  </li>
                  <li>
                    <span>useMemo</span>
                  </li>
                  <li>
                    <span>useReducer</span>
                  </li>
                  <li>
                    <span>useContext</span>
                  </li>
                  <li>
                    <span>custom hooks</span>
                  </li>
                </ul>
              </li>
              <li>
                Tópicos avançados:
                <ul className="skill__description">
                  <li>
                    <span>Portal</span>
                  </li>
                  <li>
                    <span>High Order Components</span>
                  </li>
                </ul>
              </li>
              <li>
                CLI Tools:
                <ul className="skill__description">
                  <li>
                    <span>Create React App</span>
                  </li>
                  <li>
                    <span>Vite</span>
                  </li>
                </ul>
              </li>
              <li>
                Outros Conhecimentos:
                <ul className="skill__description">
                  <li>
                    <span>react router dom</span>
                  </li>
                  <li>
                    <span>react hook form</span>
                  </li>
                  <li>
                    <span>styled components</span>
                  </li>
                </ul>
              </li>
            </ul>
          </figcaption>
          <img src={react} alt="react" />
        </SkillFigure>

        {/* typescript */}
        <SkillFigure>
          <figcaption>
            <h2>TypeScript</h2>
            <ul>
              <li>
                Tipos de Dados:
                <ul className="skill__description">
                  <li>
                    <span>string</span>
                  </li>
                  <li>
                    <span>number</span>
                  </li>
                  <li>
                    <span>boolean</span>
                  </li>
                  <li>
                    <span>array</span>
                  </li>
                  <li>
                    <span>tuple</span>
                  </li>
                  <li>
                    <span>object</span>
                  </li>
                  <li>
                    <span>enum</span>
                  </li>
                  <li>
                    <span>null</span>
                  </li>
                  <li>
                    <span>undefined</span>
                  </li>
                  <li>
                    <span>any</span>
                  </li>
                  <li>
                    <span>unknown</span>
                  </li>
                  <li>
                    <span>void</span>
                  </li>
                  <li>
                    <span>never</span>
                  </li>
                </ul>
              </li>
              <li>
                Tipos de atribuição:
                <ul className="skill__description">
                  <li>
                    <span>Explícito</span>
                  </li>
                  <li>
                    <span>Implícito</span>
                  </li>
                </ul>
              </li>
              <li>Interface</li>
              <li>Type aliases</li>
              <li>Type union</li>
              <li>
                Funções:
                <ul className="skill__description">
                  <li>
                    <span>Tipagem de funções</span>
                  </li>
                  <li>
                    <span>Retorno de tipos</span>
                  </li>
                  <li>
                    <span>Tipagem de parâmetro</span>
                  </li>
                </ul>
              </li>
              <li>Casting</li>
              <li>Generics</li>
              <li>Tipos de utilitários</li>
            </ul>
          </figcaption>
          <img src={typescript} alt="typescript" />
        </SkillFigure>

        {/* git */}
        <SkillFigure>
          <figcaption>
            <h2>GIT</h2>
            <ul>
              <li>git init, git config, git clone</li>
              <li>git status, git log, gif diff</li>
              <li>git branch, git checkout</li>
              <li>git pull, git fetch, git merge</li>
              <li>git add, git push, git commit, git reset</li>
            </ul>
          </figcaption>
          <img src={git} alt="git" />
        </SkillFigure>

        {/* npm */}
        <SkillFigure>
          <figcaption>
            <h2>NPM</h2>
            <ul>
              <li>Executor NPX</li>
              <li>npm init</li>
              <li>npm install</li>
              <li>npm update</li>
              <li>npm remove</li>
              <li>npm uninstall</li>
            </ul>
          </figcaption>
          <img src={npm} alt="npm" />
        </SkillFigure>

        {/* yarn */}
        <SkillFigure>
          <figcaption>
            <h2>YARN</h2>
            <ul>
              <li>yarn init</li>
              <li>yarn install / yarn</li>
              <li>yarn update</li>
              <li>yarn remove</li>
              <li>yarn uninstall</li>
            </ul>
          </figcaption>
          <img src={yarn} alt="yarn" />
        </SkillFigure>
      </SkillContents>
    </SectionSkills>
  );
};

export default MainSkills;
