import styled from "styled-components";

export const AsideFigure = styled.figure`
  img {
    display: block;
    object-fit: fill;
    width: 100%;
    height: 300px;
  }

  ul {
    margin: 20px 0;

    li {
      display: block;
      margin-bottom: 5px;
      border-bottom: 1px solid var(--gray);

      &:last-child {
        border-bottom: none;
      }

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 25px;
        color: var(--white);
        transition: 0.4s;

        &:hover {
          color: var(--gray);
        }
      }
    }
  }

  @media screen and (min-width: 993px) and (max-width: 2000px) {
    img {
      display: block !important;
    }

    ul {
      li {
        a {
          span {
            display: inline !important;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    img {
      display: none;
      width: 330px;
      object-fit: center;
    }

    ul {
      margin-top: 130px;
      li {
        margin-bottom: 30px;

        a {
          font-size: 1.8rem;

          span {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    img {
      display: none;
    }

    ul {
      background-color: var(--bg-black);
      position: absolute;
      top: 33px;
      width: 100%;
      padding: 25px 0;
      display: none;
      z-index: 999;

      li {
        a {
          span {
            display: inline !important;
          }
        }
      }
    }
  }
`;

export const AsideContents = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-left: 20px;
  }
`;

export const AsideContact = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  padding: 5px;

  li + li {
    margin-left: 20px;
  }

  @media screen and (min-width: 993px) and (max-width: 3000px) {
    display: flex !important;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: flex !important;
    margin-top: 0;

    img {
      display: block;
      width: 25px;
    }
  }
`;

export const AsideBtnMobile = styled.button`
  border: 1px solid var(--white);
  color: var(--white);
  font-size: 20px;
  width: 50px;
  height: 32px;
  border-radius: 6px;
  display: none;

  &:hover {
    border: 1px solid var(--warning);
    color: var(--warning);
  }

  @media screen and (max-width: 767px) {
    display: block;
    font-size: 15px;
    width: 40px;
    height: 30px;
    margin-right: 20px;
  }
`;

export const AsideBtnTablet = styled.button`
  @keyframes arrow {
    from {
      position: absolute;
      right: 15px;
    }

    to {
      position: absolute;
      right: 5px;
    }
  }

  position: relative;
  color: var(--white);
  font-size: 1.1rem;
  display: none;
  background-color: var(--bg-black);
  border: 1px solid var(--white);
  width: 35px;
  border-radius: 7px;
  height: 30px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 40px;

    right: 30px;
    z-index: 1000;
    display: block;

    .fa-angle-right {
      top: 5px;
      animation: arrow 0.5s ease-in 2s infinite alternate;
    }

    .fa-angle-left {
      top: 5px;
      animation: arrow 0.5s ease-in 2s infinite alternate;
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
