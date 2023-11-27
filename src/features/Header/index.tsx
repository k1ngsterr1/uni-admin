import { Logo } from "@shared/ui/Logo";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import Hamburger from "hamburger-react";

export const Header = () => {
  const navigate = useNavigate();

  function navigateUrl(url: string) {
    navigate(`/${url}`);
  }

  return (
    <>
      <header className="header">
        <Logo />
        <div className="header__buttons">
          <Button
            type="primary"
            size="large"
            className="big-button mr-4"
            onClick={() => navigateUrl("login")}
          >
            Войти
          </Button>
          <Button
            size="large"
            className="big-button-outline"
            onClick={() => navigateUrl("registration")}
          >
            Регистрация
          </Button>
        </div>
      </header>
      <header className="header-mob  flex items-center justify-between">
        <Logo />
        <Hamburger color="#004371" />
      </header>
    </>
  );
};
