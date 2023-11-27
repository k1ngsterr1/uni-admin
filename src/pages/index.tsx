import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../shared/config/routes";

// Pages
import { StartPage } from "./StartPage";
import { RegistrationPage } from "./RegistrationPage";
import { LoginPage } from "./LoginPage";
import { VerificationPage } from "./VerificationPage";
import { ChangePasswordPage } from "./ChangePasswordPage";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<StartPage />} />
        <Route
          path={ROUTE_CONSTANTS.REGISTRATION}
          element={<RegistrationPage />}
        />
        <Route path={ROUTE_CONSTANTS.LOGIN} element={<LoginPage />} />
        <Route
          path={ROUTE_CONSTANTS.VERIFICATION}
          element={<VerificationPage />}
        />
        <Route
          path={ROUTE_CONSTANTS.CHANGE_PASSWORD}
          element={<ChangePasswordPage />}
        />
      </Routes>
    </Router>
  );
};
