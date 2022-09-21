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
import mysql from "./img/mysql.png";
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
              <li>Design responsivo</li>
              <li>Box model</li>
              <li>Positions</li>
              <li>Displays</li>
              <li>Flexbox</li>
              <li>Grid Layout</li>
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
                <span>
                  variáveis, tipagem, estruturas de repetição, condicionais,
                  operadores, escopo, funções, classes
                </span>
              </li>
              <li>
                Programação Assíncrona:
                <span>
                  setTimeout, setInterval, callback, promises, async-await,
                  event loop
                </span>
              </li>
              <li>Manipulação da DOM</li>
              <li>Conhecimento em ES5 / ES6</li>
              <li>Consumo de API</li>
              <li>Padrão IIFE</li>
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
                <span>
                  ambiente de desenvolvimento <br /> ambiente de produção
                </span>
              </li>
              <li>Configuração do entry point / output</li>
              <li>Configuração dos loaders / babel</li>
              <li>Criação dos scripts no arquivo json</li>
              <li>Execução de comandos através do terminal - CLI</li>
            </ul>
          </figcaption>
          <img src={webpack} alt="webpack" />
        </SkillFigure>

        {/* mysql */}
        <SkillFigure>
          <figcaption>
            <h2>MYSQL</h2>
            <ul>
              <li>Comandos DDL</li>
              <li>Comandos DML</li>
              <li>Conhecimento em PDO</li>
              <li>Import e Export de Dumps</li>
            </ul>
          </figcaption>
          <img src={mysql} alt="mysql" />
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

        {/* react */}
        <SkillFigure>
          <figcaption>
            <h2>REACT</h2>
            <ul>
              <li>
                Introdução e base:
                <span>
                  create react app, jsx, props, estado, componentes (funcional,
                  classe), renderização condicional, listas e chaves.
                </span>
              </li>
              <li>
                Hooks:
                <span>
                  useState, useEffect, useCallback, useRef useMemo, useReducer,
                  useContext.
                </span>
              </li>
              <li>
                Ecosistema:
                <span>
                  react router dom, react hook form, styled components.
                </span>
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
                <span>
                  String, Number, Boolean, Array, Tuple, Object, Enum, Null,
                  Undefined, Any, Unknown, Void, Never.
                </span>
              </li>
              <li>
                Tipos de atribuição
                <span>Explícito, Implícito.</span>
              </li>
              <li>Tipo "Alias"</li>
              <li>Interface</li>
              <li>Tipo "Union"</li>
              <li>
                Funções:
                <span>
                  Tipagem de funções, retorno de tipos, tipagem de parâmetro
                </span>
              </li>
              <li>Casting com "as" ou "&lt;&gt;"</li>
              <li>Generics</li>
              <li>Tipos de utilitários</li>
            </ul>
          </figcaption>
          <img src={typescript} alt="typescript" />
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
