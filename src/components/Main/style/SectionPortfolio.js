import styled from "styled-components";

export const SectionPortfolio = styled.section`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin-top: 30px;
  padding: 20px 20px 50px 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 0 20px 0 100px;
  }

  @media screen and (max-width: 599px) {
    padding: 20px 0 50px 0;
  }
`;

export const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 20px;

  @media screen and (max-width: 599px) {
    margin-left: 0;
  }
`;

export const PortfolioFigure = styled.figure`
  background-color: var(--white);
  margin: 10px 10px 30px 0;
  width: 45%;
  padding: 10px;
  border-radius: 10px;

  figcaption {
    margin-top: 20px;
    line-height: 1.8;
    text-align: center;

    h2 {
      color: var(--gray);
    }

    p {
      width: 80%;
      margin: 5px auto;
    }
    ul {
      li {
        margin-bottom: 10px;
        a {
          color: var(--dark);
          border-bottom: 1px solid var(--gray);
          font-weight: bold;

          &:hover {
            color: var(--secondary);
          }
        }
      }
    }
  }
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 48%;

    figcaption {
      p {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    figcaption {
      p {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 599px) {
    width: 90%;
    margin: 15px auto;
  }
`;

export const PortfolioFrontendMentor = styled.figure`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--gray);

  img {
    margin: 0 auto;
    display: block;
  }

  figcaption {
    margin-top: 20px;
    line-height: 1.8;
    text-align: center;
    padding: 0 10px;
    font-size: 0.9rem;

    h2 {
      color: var(--white);
    }

    p {
      margin: 15px 0;
      text-shadow: 0 0 25px var(--dark-text);
      color: var(--white);
    }

    a {
      color: var(--white);
      border-bottom: 1px solid var(--white);
      font-weight: bold;

      &:hover {
        color: var(--secondary);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;

    figcaption {
      width: 100%;
    }
    img {
      width: 70%;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 10px;

    img {
      width: 100%;
      object-fit: contain;
      margin: 20px 0;
    }

    figcaption {
      padding: 0;
      width: 100%;
      margin-top: 0;

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    figcaption {
      p {
        font-size: 1rem !important;
      }
    }
  }
`;
