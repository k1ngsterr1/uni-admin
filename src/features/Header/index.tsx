import "./styles.scss";
import { Logo } from "@shared/ui/Logo";
import { Button } from "antd";

export const Header = () => {
  return (
    <>
      <header className="header bg-red-600 flex border-2 items-center justify-between">
        <Logo />
        <Button>Войти</Button>
      </header>
    </>
  );
};
