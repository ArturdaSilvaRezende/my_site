import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

//import ASIDE
import { HandleControlMenu } from "./HandleAside/HandleControlMenu";
import { HandleMenuDesktop } from "./HandleAside/HandleControlMenu";
import { HandleItensAsideTablet } from "./HandleAside/HandleControlMenu";

export const StoreContext = createContext();

const Store = ({ children }) => {
  //aside
  const [menuAside, setMenu] = useState(false);
  const menuAsideRef = useRef(null);
  const menuAsideImgRef = useRef(null);
  const menuAsideContactRef = useRef(null);
  const btnMenuAsideTabletRef = useRef(null);

  // ====================== functions ASIDE ======================
  const HandleClickMenuAside = useCallback(() => {
    HandleControlMenu(menuAside, menuAsideRef, setMenu);
  }, [menuAside]);

  const AsideMenuTablet = useCallback(() => {
    HandleItensAsideTablet(
      menuAside,
      menuAsideContactRef,
      menuAsideImgRef,
      btnMenuAsideTabletRef,
      setMenu
    );
  }, [menuAside]);

  const OnRecizeAsideMenuDesktop = useCallback(() => {
    HandleMenuDesktop(menuAsideRef, menuAsideContactRef);
  }, []);

  useEffect(() => {
    OnRecizeAsideMenuDesktop();
  }, [OnRecizeAsideMenuDesktop]);

  return (
    <StoreContext.Provider
      value={{
        menuAside,
        menuAsideRef,
        menuAsideContactRef,
        menuAsideImgRef,
        btnMenuAsideTabletRef,
        HandleClickMenuAside: () => HandleClickMenuAside(),
        AsideMenuTablet: () => AsideMenuTablet(),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
