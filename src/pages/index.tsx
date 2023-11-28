import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../shared/config/routes";

// Pages
import { RegistrationPage } from "./RegistrationPage";
import { LoginPage } from "./LoginPage";
import { ChangePasswordPage } from "./ChangePasswordPage";
import { StudentInfoPage } from "./StudentInfoPage";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<RegistrationPage />} />

        <Route path={ROUTE_CONSTANTS.LOGIN} element={<LoginPage />} />

        <Route
          path={ROUTE_CONSTANTS.CHANGE_PASSWORD}
          element={<ChangePasswordPage />}
        />
        <Route path={ROUTE_CONSTANTS.USER_INFO} element={<StudentInfoPage />} />
      </Routes>
    </Router>
  );
};
