import React, { useContext } from "react";

//styled component
import { AsideBtnMobile } from "./SidebarStyle";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//store
import { StoreContext } from "../store/store";

const SidebarBtnMobile = (props) => {
  const { HandleClickMenuAside, menuAside } = useContext(StoreContext);
  return (
    <AsideBtnMobile onClick={HandleClickMenuAside}>
      <FontAwesomeIcon icon={menuAside ? faXmark : faBars} />
    </AsideBtnMobile>
  );
};

export default SidebarBtnMobile;
