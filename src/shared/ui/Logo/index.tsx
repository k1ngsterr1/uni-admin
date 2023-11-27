import { useNavigate } from "react-router-dom";

import "./styles.scss";
import logo from "@assets/uniadmin.svg";

export const Logo = () => {
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

  return (
    <div className="logo-container" onClick={navigateToMain}>
      <img src={logo} alt="logo" className="logo-container__logo" />
      <span className="logo-container__text">UNI ADMIN</span>
    </div>
  );
};
