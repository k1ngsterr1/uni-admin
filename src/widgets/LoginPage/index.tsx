import { LoginForm } from "@widgets/Form/ui/loginForm";

export const LoginScreen = () => {
  return (
    <div className="wrapper items-center">
      <h1 className="w-[30%] text-center max-[448px]:w-[100%]">
        Чтобы продолжить войдите в свой {""}
        <span className="text-custom-blue">UNI ADMIN</span> аккаунт
      </h1>
      <LoginForm />
    </div>
  );
};
