import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { ErrorTab } from "@shared/ui/ErrorTab";
import { Button } from "antd";
import { useVerifyEmail } from "@widgets/Form/lib/useVerifyEmail";

import illustration from "@assets/secure.svg";

export const VerificationScreen = () => {
  const email = useSelector((state: RootState) => state.emailReducer.email);
  const { verifyEmail, error } = useVerifyEmail(email);

  return (
    <div className="wrapper">
      <img
        src={illustration}
        alt="illustration"
        className="w-[25%] h-auto max-[1024px]:w-[50%]"
      />
      <h1 className="email w-[45%] text-center mt-8 max-[448px]:w-[100%] max-[448px]:text-2xl">
        На вашу почту <span className="blue">{email}</span> пришло письмо с
        подтверждением
      </h1>
      {error && <ErrorTab text={error} />}
      <Button onClick={verifyEmail} className="registration-button active mt-4">
        Зарегистрироваться
      </Button>
      <p className="paragraph text-center mt-4">
        Не пришло письмо?{" "}
        <span
          className="link blue underline cursor-pointer"
          onClick={verifyEmail}
        >
          Отправить снова
        </span>
      </p>
    </div>
  );
};
