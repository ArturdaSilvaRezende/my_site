import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  justify-content: center;
  grid-template-areas:
    "aside main main"
    "aside footer footer";
  max-width: 1200px;
  margin: 0 auto;
  gap: 15px;
  position: relative;

  .aside {
    grid-area: aside;
    background-color: var(--bg-black);
    height: 100vh;
    position: fixed;
    z-index: 999;
  }

  .main {
    grid-area: main;
    margin-left: 50px;
  }

  .footer {
    grid-area: footer;
    margin-left: 50px;
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    grid-template-columns: 300px 1fr 1fr;

    .main,
    .footer {
      margin-right: 40px;
      margin-left: 10px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "aside"
      "main"
      "footer";

    .main {
      margin-left: 10px;
    }

    .footer {
      margin-right: 20px;
      margin-left: 110px;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    grid-template-columns: 90% !important;

    .main {
      margin-left: 15px;
    }

    .footer {
      margin: 0 0 0 0;
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 90%;
    justify-content: center;
    grid-template-areas:
      "aside"
      "main"
      "footer";

    .aside {
      position: fixed;
      height: auto;
      width: 100%;
      z-index: 999;
    }

    .main {
      width: 100%;
      margin: 40px 0 20px 0;
    }

    .footer {
      width: 100%;
      margin: 0 0 20px 0;
    }
  }
`;
