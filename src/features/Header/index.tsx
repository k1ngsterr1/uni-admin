import "./styles.scss";
import { Logo } from "@shared/ui/Logo";
import { Button } from "antd";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Logo />
        <div className="header__buttons">
          <Button type="primary" size="large" className="big-button mr-4">
            Войти
          </Button>
          <Button size="large" className="big-button-outline">
            Регистрация
          </Button>
        </div>
      </header>
    </>
  );
};
