import styled, { createGlobalStyle } from "styled-components";
import BgBody from "./bg-body.gif";

export const GlobalStyle = createGlobalStyle`
  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 100%;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        &:visited {
          color: var(--danger);
        }
    }

    li {
        list-style: none;
    }

    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }

    body {
        background: url(${BgBody});
        background-attachment: fixed;
        background-size: 100% 100%;
        font-family: 'Roboto', sans-serif;
    }
    
    #root {
      position: relative;

      .bg-rgba {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }

    ::selection {
      background-color: var(--gray);
      color: var(--white);
    }

    :root {
        --blue: #007bff;
        --indigo: #6610f2;
        --purple: #6f42c1;
        --pink: #e83e8c;
        --red: #dc3545;
        --orange: #fd7e14;
        --yellow: #ffc107;
        --green: #28a745;
        --teal: #20c997;
        --cyan: #17a2b8;
        --white: #fff;
        --gray: #6c757d;
        --gray-dark: #343a40;
        --primary: #007bff;
        --secondary: #6c757d;
        --success: #28a745;
        --info: #17a2b8;
        --warning: #ffc107;
        --danger: #dc3545;
        --light: #f8f9fa;
        --dark: #343a40;
        --dark-text: #000;
        --black: #000;
        --bg-black: #222222;
    }

    // ================ animations ================

    //show menu -aside
    .flipInX {
      backface-visibility: visible !important;
      animation-name: flipInX;
      animation-duration: 1s;
      animation-fill-mode: both;
    }


    @keyframes flipInX {
      0% {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transition-timing-function: ease-in;
        opacity: 0;
      }
      40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transition-timing-function: ease-in;
      }
      60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
      }
      80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      }
      100% {
        transform: perspective(400px);
      }
    } 

    //close menu - aside
    .flipOutX {
      animation-name: flipOutX;
      animation-duration: .75s;
      backface-visibility: visible !important;
      animation-duration: 1s;
      animation-fill-mode: both;
    }

    @keyframes flipOutX {
      0% {
        transform: perspective(400px);
      }
      30% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        opacity: 1;
      }
      100% {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        opacity: 0;
      }
    } 
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const MainTitle = styled.h1`
  color: var(--white);
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;

  &::after {
    content: "";
    display: block;
    height: 2px;
    background-color: var(--white);
    width: 80px;
    margin: 10px auto;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 1.8rem;
    margin-bottom: 35px;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;
