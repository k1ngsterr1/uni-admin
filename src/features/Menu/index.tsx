import { Button } from "antd";
import { Slide } from "react-awesome-reveal";

import { Link, useNavigate } from "react-router-dom";

import "./styles.scss";

export const Menu = () => {
  const navigate = useNavigate();

  function navigateUrl(url: string) {
    navigate(`/${url}`);
  }

  return (
    <>
      <Slide direction="down" className="flex flex-col items-center">
        <aside className="menu flex flex-col items-center mt-20">
          <Link className="menu__link">Главная</Link>
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
        </aside>
      </Slide>
    </>
  );
};
