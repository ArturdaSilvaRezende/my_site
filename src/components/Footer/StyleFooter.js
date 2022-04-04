import styled from "styled-components";

export const FooterComponent = styled.footer`
  background-color: var(--white);
  margin-top: 30px;
  padding: 20px 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 0 20px 0 100px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 0;
    padding: 10px 35px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    justify-content: space-around;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    display: grid;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FooterFigure = styled.figure`
  display: flex;
  align-items: center;
  margin: 30px 30px 30px 0;

  figcaption {
    margin-left: 20px;

    a,
    p {
      color: var(--dark);
      border-bottom: 1px solid var(--gray);
      font-weight: bold;
      font-size: 0.9rem;
    }

    a {
      &:hover {
        color: var(--secondary);
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    img {
      width: 50px;
    }
  }

  @media screen and (max-width: 330px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const FooterCurriculo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--gray);
  }
`;
