import React, { useContext } from "react";

//react-scroll
import { Link } from "react-scroll";

//store
import { StoreContext } from "../store/store";

//components
import SidebarBtnMobile from "./SidebarBtnMobile";
import SideBarBtnTablet from "./SideBarBtnTablet";

//style components
import { AsideContents, AsideFigure, AsideContact } from "./SidebarStyle";

//images
import ArturImg from "./img/artur-da-silva-rezende.png";
import WhatsApp from "./img/whatsapp.png";
import Linkedin from "./img/linkedin.png";
import Github from "./img/github.png";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  const { menuAsideRef, menuAsideImgRef, menuAsideContactRef } =
    useContext(StoreContext);

  return (
    <aside className="aside">
      <AsideFigure>
        <img
          src={ArturImg}
          alt="artur-da-silva-rezende"
          ref={menuAsideImgRef}
        />
        <ul ref={menuAsideRef}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="aside__span">Home</span>{" "}
              <FontAwesomeIcon icon={faHouseUser} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
            >
              <span className="aside__span">Sobre</span>{" "}
              <FontAwesomeIcon icon={faAddressCard} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
            >
              <span className="aside__span">Habilidades</span>{" "}
              <FontAwesomeIcon icon={faUserGear} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
            >
              <span className="aside__span">Portfólio</span>{" "}
              <FontAwesomeIcon icon={faFolder} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
            >
              <span className="aside__span">Contato</span>{" "}
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
        </ul>
      </AsideFigure>

      <AsideContents>
        <AsideContact ref={menuAsideContactRef}>
          <li>
            <a
              href="https://web.whatsapp.com/send?phone=5562994818374"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WhatsApp} alt="whatsapp" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/artur-da-silva-rezende/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/ArturdaSilvaRezende/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="github" />
            </a>
          </li>
        </AsideContact>
        <SidebarBtnMobile />
      </AsideContents>

      <SideBarBtnTablet />
    </aside>
  );
};

export default Sidebar;
