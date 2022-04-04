import React from "react";

//components
import MainHome from "./MainHome";
import MainAbout from "./MainAbout";
import MainSkills from "./MainSkills";
import MainPortfolio from "./MainPortfolio";

const Main = (props) => {
  return (
    <main className="main">
      <MainHome />
      <MainAbout />
      <MainSkills />
      <MainPortfolio />
    </main>
  );
};

export default Main;
