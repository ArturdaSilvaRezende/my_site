import styled from "styled-components";

export const SectionSkills = styled.section`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin-top: 30px;
  padding: 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 20px 20px 20px 100px;
  }

  @media screen and (max-width: 599px) {
    padding: 20px 0;
  }
`;

export const SkillContents = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 20px;

  @media screen and (max-width: 599px) {
    margin-left: 0;
  }
`;

export const SkillFigure = styled.figure`
  position: relative;
  background-color: var(--white);
  padding: 20px 12px;
  width: 48%;
  margin: 10px 10px 0 0;
  border-radius: 10px;

  img {
    display: block;
    position: absolute;
    top: 15px;
    right: 30px;
  }

  figcaption {
    h2 {
      color: var(--gray);
      margin-left: 15px;
    }

    ul {
      margin: 20px 0 10px 30px;

      li {
        list-style: decimal;
        margin-bottom: 20px;

        span {
          display: block;
          margin: 20px 0;
          color: var(--secondary);
          font-weight: 500;
        }

        .skill__description {
          li {
            list-style: circle;

            & + li {
              margin-top: -15px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    &:last-child {
      margin: 10px auto 0 20px;
    }

    img {
      right: 25px;
      width: 34px;
      top: 10px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 48%;

    &:last-child {
      margin: 10px auto 0 5px;
    }

    img {
      right: 25px;
    }

    figcaption {
      ul {
        margin: 60px 0 10px 30px;

        li {
          margin-bottom: 15px;
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    width: 100%;

    &:last-child {
      margin: 10px 12px 0 auto;
    }

    img {
      top: 15px;
      right: 13px;
    }
  }

  @media screen and (max-width: 599px) {
    width: 90%;
    padding: 20px 0;
    margin: 15px auto;

    &:last-child {
      margin: 10px 12px 0 auto;
    }

    img {
      top: 10px;
      right: 15px;
      width: 40px;
    }
  }
`;
