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
    border-radius: 10px;
    line-height: 1.7;
    text-align: justify;
    margin: 0 10px 0 30px;
    color: #000;
    font-weight: 400;
    background-color: var(--white);
    padding: 10px;
    box-shadow: 1px 1px 15px #fff;
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
