import styled from "styled-components";

export const SectionSkills = styled.section`
  background-color: var(--white);
  margin-top: 30px;
  padding: 20px 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 20px 20px 20px 100px;
  }
`;

export const SkillContents = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillFigure = styled.figure`
  position: relative;
  border-left: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  padding: 20px 12px;
  width: 50%;

  &:last-child {
    border-right: 1px solid var(--gray);
    right: -0.5px;
    border-bottom: none;
  }

  &::before {
    position: absolute;
    content: "";
    width: 11px;
    height: 11px;
    background: var(--gray-dark);
    top: 25px;
    left: -6px;
    border-radius: 5px;
  }

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
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 50%;

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

  @media screen and (max-width: 767px) {
    width: 100%;

    &:last-child {
      border-right: none;
      right: 0;
    }
    img {
      top: 15px;
      right: 0;
    }
  }
`;
