// import { Menu } from "@widgets/Menu";
// import { useSelector } from "react-redux";
// import { RootState } from "@shared/lib/redux/store";
import { VerificationScreen } from "@widgets/VerificationPage";
import { Header } from "@features/Header";

export const VerificationPage = () => {
  return (
    <div className="page">
      <Header />
      <VerificationScreen />
    </div>
  );
};
