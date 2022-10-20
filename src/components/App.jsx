import React from "react";

//custom style
import { GlobalStyle } from "./GlobalStyle";
import { Wrapper } from "./wrapper";

//components
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

//store
import Store from "./store/store";

const App = (props) => {
  return (
    <>
      <Store>
        <GlobalStyle />
        <div className="bg-rgba"></div>
        <Wrapper>
          <Sidebar />
          <Main />
          <Footer />
        </Wrapper>
      </Store>
    </>
  );
};

export default App;
