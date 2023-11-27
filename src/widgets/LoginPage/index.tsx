import { LoginForm } from "@widgets/Form/ui/loginForm";

export const LoginScreen = () => {
  return (
    <div className="wrapper items-center">
      <h1 className="w-[30%] text-center">
        Чтобы продолжить войдите в свой {""}
        <span className="text-custom-blue">UNI ADMIN</span> аккаунт
      </h1>
      <LoginForm />
    </div>
  );
};
