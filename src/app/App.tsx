import React, { useEffect } from "react";
import { MyRoutes } from "@pages/index";
import { useSelector } from "react-redux";

export const App = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div>
      <MyRoutes />
    </div>
  );
};
