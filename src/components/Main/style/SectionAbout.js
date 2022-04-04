import styled from "styled-components";

export const SectionAbout = styled.section`
  background-color: var(--white);
  margin-top: 30px;
  padding: 20px 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 20px 20px 20px 100px;
  }
`;

export const AboutFigure = styled.figure`
  display: flex;

  img {
    display: block;
    border-radius: 10px;
    object-fit: cover;
    height: 350px;
    margin: 0 auto 30px auto;
  }

  figcaption {
    line-height: 1.7;
    text-align: justify;
    margin: 0 10px 0 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    figcaption {
      font-size: 1.1rem;
      margin: 40px 0;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    img {
      object-fit: cover;
      height: 300px;
      margin: 0 auto;
      max-width: 100%;
    }

    figcaption {
      font-size: 0.9rem;
      margin: 40px 0;
    }
  }
`;
