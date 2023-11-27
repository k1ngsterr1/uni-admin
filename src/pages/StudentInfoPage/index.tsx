import { Header } from "@features/Header";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@features/Menu";
import { StudentInfoScreen } from "@widgets/StudentInfoPage";

export const StudentInfoPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <div className="page">
      <Header />
      {isMenuOpen && <Menu />}
      <StudentInfoScreen />
    </div>
  );
};
