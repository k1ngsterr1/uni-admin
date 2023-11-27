import { Input } from "@shared/ui/Input";
import { Button } from "antd";
import { usePasswordVisibility } from "@shared/lib/hooks/usePasswordVisibility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useLoginForm } from "@widgets/Form";
import { Link } from "react-router-dom";
import { ErrorTab } from "@shared/ui/ErrorTab";

import "../styles.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    onSubmit,
    error,
  } = useLoginForm();

  const {
    isVisible: isPasswordVisible,
    toggleVisibility: togglePasswordVisibility,
  } = usePasswordVisibility();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col items-center justify-center mt-4 max-[640px]:mt-8"
    >
      <div className="form__input mt-4">
        <Input
          {...register("email", {
            required: "Заполните электронную почту",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Пожалуйста введите электронную почту правильно",
            },
          })}
          type="email"
          placeholder="Email"
          isError={Boolean(errors.email)}
        />
        {errors.email && (
          <span className="form__input--error">{errors.email.message}</span>
        )}
      </div>
      <div className="form__input mt-4">
        <Input
          {...register("password", {
            required: "Заполните пароль",
          })}
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Пароль"
          isError={Boolean(errors.password)}
        />
        <FontAwesomeIcon
          icon={isPasswordVisible ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
          className="form__input--eye"
        />
        {errors.password && (
          <span className="form__input--error">{errors.password.message}</span>
        )}
      </div>
      {error && <ErrorTab text={error} />}
      <Button
        onClick={handleSubmit(onSubmit)}
        className={`registration-button mt-4 ${
          isValid && !isSubmitting ? "active" : "inactive"
        }`}
      >
        Войти
      </Button>
      <p className="form__paragraph mt-4">
        Или забыли {""}
        <Link className="blue underline cursor-pointer" to="/change-password">
          пароль
        </Link>
      </p>
      <figure className="separator mt-4" />
      <p className="form__paragraph mt-4">
        У вас еще нет учетной записи?
        <Link to="/registration" className="blue underline cursor-pointer">
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
};
