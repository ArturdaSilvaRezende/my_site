import styled from "styled-components";

export const SectionHome = styled.section`
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin-top: 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 5px 20px 0 100px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
`;

export const SectionFigure = styled.figure`
  display: flex;
  justify-content: space-between;
  align-items: center;

  figcaption {
    padding: 0 20px;
    margin: 0 auto;

    hgroup {
      h2 {
        background-color: var(--gray);
        line-height: 24px;
        letter-spacing: 1px;
        font-weight: bold;
        padding: 10px 30px;
        border-radius: 20px 20px 20px 0px;
        color: var(--light);
        text-shadow: 0 0 1px var(--dark);
        width: 220px;
      }

      h1 {
        margin: 10px 0;
        color: var(--white);
        font-size: clamp(1.5rem, 3vw, 2.4rem);
      }

      h3 {
        color: var(--white);
        font-size: 1.4rem;
      }
    }
  }

  img {
    display: block;
    width: 35.4%;
    padding: 10px;
  }

  @media screen and (max-width: 767px) {
    padding: 10px;
    display: flex;
    flex-direction: column;

    img {
      display: block;
      height: 200px;
      width: 70%;
      object-fit: cover;
      border-radius: 7px;
      margin-bottom: 20px;
    }

    figcaption {
      width: 100%;
      padding: 0;
      margin: 30px 0;
      text-align: center;

      hgroup {
        h2 {
          font-size: 0.7rem;
          width: 140px;
          padding: 2px 10px;
          margin: 0 auto;
        }
        h1 {
          margin: 8px 0 5px 0;
        }
        h3 {
          font-size: 1rem;
        }
      }
    }
  }
`;
