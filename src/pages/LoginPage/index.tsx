import { Header } from "@features/Header";
import { LoginScreen } from "@widgets/LoginPage";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@features/Menu";

export const LoginPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <div className="page">
      <Header />
      {isMenuOpen && <Menu />}
      <LoginScreen />
    </div>
  );
};
