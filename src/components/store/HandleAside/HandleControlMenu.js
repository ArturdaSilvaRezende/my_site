export const HandleControlMenu = (menu, MenuRef, setMenu) => {
  if (menu === false) {
    MenuRef.current.style.display = "block";
    MenuRef.current.classList.remove("flipOutX");
    MenuRef.current.classList.add("flipInX");
    return setMenu(true);
  } else {
    MenuRef.current.classList.remove("flipInX");
    MenuRef.current.classList.add("flipOutX");
    setTimeout(() => {
      MenuRef.current.style.display = "none";
    }, 1000);
    return setMenu(false);
  }
};

export const HandleMenuDesktop = (MenuRef) => {
  window.onresize = () => {
    if (window.innerWidth > 767) {
      MenuRef.current.classList.remove("flipOutX");
      MenuRef.current.style.display = "block";
    } else {
      MenuRef.current.style.display = "none";
    }
  };
};

export const HandleItensAsideTablet = (
  menu,
  MenuTableRef,
  imgRef,
  btnTablet,
  setMenu
) => {
  const AsideSpan = document.querySelectorAll(".aside__span");

  if (menu === false) {
    MenuTableRef.current.style.display = "flex";
    imgRef.current.style.display = "block";

    AsideSpan.forEach((e) => {
      e.style.display = "inline";
    });

    btnTablet.current.style.top = "340px";

    return setMenu(true);
  } else {
    MenuTableRef.current.style.display = "none";
    imgRef.current.style.display = "none";

    AsideSpan.forEach((e) => {
      e.style.display = "none";
    });

    btnTablet.current.style.top = "40px";
    return setMenu(false);
  }
};
