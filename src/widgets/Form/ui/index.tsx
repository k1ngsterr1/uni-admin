import React from "react";
import { usePasswordVisibility } from "@shared/lib/hooks/usePasswordVisibility";
import { Input } from "@shared/ui/Input";
import { useSignUpForm } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ErrorTab } from "@shared/ui/ErrorTab";
import { Button } from "antd";

import "./styles.scss";

export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    watchedPassword,
    onSubmit,
    error,
  } = useSignUpForm();

  const {
    isVisible: isPasswordVisible,
    toggleVisibility: togglePasswordVisibility,
  } = usePasswordVisibility();
  const {
    isVisible: isConfirmPasswordVisible,
    toggleVisibility: toggleConfirmPasswordVisibility,
  } = usePasswordVisibility();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col items-center justify-center mt-16 max-[640px]:mt-8"
    >
      <div className="form__input">
        <Input
          {...register("username", { required: "Заполните ваше имя" })}
          type="text"
          placeholder="Полное имя"
          isError={Boolean(errors.username)}
        />
        {errors.username && (
          <span className="form__input--error">{errors.username.message}</span>
        )}
      </div>
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
            minLength: {
              value: 6,
              message: "Пароль должен содержать не менее 6-ти символов",
            },
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
      <div className="form__input mt-4">
        <Input
          {...register("password_conf", {
            validate: (value) =>
              value === watchedPassword || "Пароли не совпадают",
          })}
          type={isConfirmPasswordVisible ? "text" : "password"}
          placeholder="Повторите пароль"
          isError={Boolean(errors.password_conf)}
        />
        <FontAwesomeIcon
          icon={isConfirmPasswordVisible ? faEyeSlash : faEye}
          onClick={toggleConfirmPasswordVisibility}
          className="form__input--eye"
        />
        {errors.password_conf && (
          <span className="form__input--error">
            {errors.password_conf.message}
          </span>
        )}
      </div>
      {error && <ErrorTab text={error} />}
      <Button
        onClick={handleSubmit(onSubmit)}
        className={`registration-button mt-4 ${
          isValid && !isSubmitting ? "active" : "inactive"
        }`}
      >
        Зарегистрироваться
      </Button>
      <p className="form__paragraph mt-4">
        Выполняя вход, вы соглашаетесь с нашими{" "}
        <Link to="/user-conditions" className="blue underline cursor-pointer">
          Условиями использования{""}
        </Link>
        {""}
        {""} и {""}
        {""}
        <Link to="/policy" className="blue underline cursor-pointer">
          Политикой конфиденциальности.
        </Link>
      </p>
      <figure className="separator mt-4" />
      <p className="form__paragraph mt-4">
        Уже есть учетная запись?{" "}
        <Link className="blue underline cursor-pointer" to="/login">
          Вход
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
