import styled from "styled-components";

export const FooterComponent = styled.footer`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin: 30px 0 20px 0;
  padding: 20px 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 5px 0 20px 0;
  }

  @media screen and (max-width: 767px) {
    margin-top: 0;
    padding: 10px 35px;
  }

  @media screen and (max-width: 599px) {
    width: 90%;
    margin: 15px auto;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterFigure = styled.figure`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 30px 30px 0;
  width: 29%;

  figcaption {
    margin-left: 10px;

    a,
    p {
      color: var(--white);
      border-bottom: 1px solid var(--white);
      font-weight: bold;
      font-size: 0.9rem;
    }

    a {
      &:hover {
        color: var(--secondary);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 40%;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 33%;

    img {
      width: 50px;
    }
  }

  @media screen and (max-width: 599px) {
    width: 90%;
    margin: 30px auto;
  }
`;

export const FooterCurriculo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--white);
  }
`;
