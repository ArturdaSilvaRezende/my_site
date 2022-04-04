import styled from "styled-components";

export const SectionPortfolio = styled.section`
  background-color: var(--white);
  margin-top: 30px;
  padding: 20px 20px 50px 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 0 20px 0 100px;
  }
`;

export const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PortfolioFigure = styled.figure`
  margin-bottom: 30px;
  width: 50%;
  padding: 10px;

  figcaption {
    margin-top: 20px;
    line-height: 1.8;
    text-align: center;

    h2 {
      color: var(--gray);
    }

    p {
      width: 80%;
      margin: 10px auto;
    }
    ul {
      li {
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
`;

export const PortfolioFrontendMentor = styled.figure`
  padding-top: 40px;
  display: flex;
  border-top: 1px solid var(--gray);

  img {
    width: 50%;
    margin: 0 auto;
    display: block;
  }

  figcaption {
    margin-top: 20px;
    line-height: 1.8;
    text-align: center;
    padding: 0 10px;
    font-size: 0.9rem;
    width: 45%;

    h2 {
      color: var(--gray);
    }

    p {
      margin: 15px 0;
    }
    a {
      color: var(--dark);
      border-bottom: 1px solid var(--gray);
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

  @media screen and (min-width: 376px) and (max-width: 767px) {
    figcaption {
      p {
        font-size: 1rem !important;
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 300px;
      object-fit: contain;
    }

    figcaption {
      padding: 0;
      width: 100%;

      p {
        font-size: 0.9rem;
        text-align: left;
      }
    }
  }
`;
