import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-areas:
    "aside main main"
    "aside footer footer";
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  gap: 15px;

  .aside {
    grid-area: aside;
    background-color: var(--bg-black);
    height: 100vh;
    position: fixed;
    z-index: 999;
  }

  .main {
    grid-area: main;
  }

  .footer {
    grid-area: footer;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "aside"
      "main"
      "footer";
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
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
  }
`;
