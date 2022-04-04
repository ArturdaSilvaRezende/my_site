import React, { useContext } from "react";

//styled components
import { AsideBtnTablet } from "./SidebarStyle";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

//store
import { StoreContext } from "../store/store";

const SideBarBtnTablet = (props) => {
  const { AsideMenuTablet, menuAside, btnMenuAsideTabletRef } =
    useContext(StoreContext);

  return (
    <AsideBtnTablet onClick={AsideMenuTablet} ref={btnMenuAsideTabletRef}>
      <FontAwesomeIcon icon={menuAside ? faAngleLeft : faAngleRight} />
    </AsideBtnTablet>
  );
};

export default SideBarBtnTablet;
