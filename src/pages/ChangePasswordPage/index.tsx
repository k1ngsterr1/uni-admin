import { ChangePasswordScreen } from "@widgets/ChangePassword";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
import { Menu } from "@features/Menu";
import { Header } from "@features/Header";

export const ChangePasswordPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <div className="page">
      <Header />
      {isMenuOpen && <Menu />}
      <ChangePasswordScreen />
    </div>
  );
};
