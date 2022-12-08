import styled from "styled-components";

export const SectionAbout = styled.section`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin-top: 30px;
  padding: 20px 20px;

  .about__br {
    &:after {
      content: " ";
      border-bottom: 1px solid var(--white);
      display: block;
      width: 90%;
      margin: 15px auto;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 20px 20px 20px 100px;
  }
`;

export const AboutFigure = styled.figure`
  display: flex;

  & + figure {
    margin-top: 20px;
  }

  figcaption {
    line-height: 1.7;
    text-align: justify;
    margin: 0 10px 0 30px;
    color: var(--white);
    text-shadow: 0 0 25px var(--dark-text);
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    figcaption {
      font-size: 1.1rem;
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 767px) {
    figcaption {
      font-size: 0.9rem;
      margin: 10px 0;
    }
  }
`;
