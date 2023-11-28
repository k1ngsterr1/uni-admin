import { StudentInfoForm } from "@features/StudentInfoForm";
import SignUpForm from "@widgets/Form/ui";

export const RegistrationScreen = () => {
  return (
    <div className="wrapper items-center">
      <h1 className="w-[60%] text-center max-[448px]:w-[90%]">
        Зарегистрируйтесь и начните следить за своей успеваемостью с{" "}
        <span className="text-custom-blue font-bold">UNI ADMIN</span>
      </h1>
      <SignUpForm />
    </div>
  );
};
