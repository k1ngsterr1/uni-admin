import { Header } from "@features/Header";
import { RegistrationScreen } from "@widgets/RegistrationPage";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@features/Menu";

export const RegistrationPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <div className="page">
      <Header />
      {isMenuOpen && <Menu />}
      <RegistrationScreen />
    </div>
  );
};
