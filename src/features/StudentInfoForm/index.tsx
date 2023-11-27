import { Input } from "@shared/ui/Input";
import { useSendForm } from "@widgets/Form/lib/useSendForm";
import { Select } from "antd";
import { Controller } from "react-hook-form";
import { Button } from "antd";

import "./styles.scss";

const { Option } = Select;

export const StudentInfoForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    control,
    isSubmitting,
    isValid,
    onSubmit,
    error,
  } = useSendForm();
  return (
    <div className="form-container flex flex-col items-center mt-10">
      <form className="w-[80%]">
        <div className="form-input mt-16">
          <Input
            placeholder="Введите ваш номер телефона"
            {...register("phone_number", {
              required: "Заполните ваш телефон",
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "Пожалуйста введите номер телефона правильно",
              },
            })}
            type="phone"
            isError={Boolean(errors.phone_number)}
          />
          {errors.phone_number && (
            <span className="form__input--error">
              {errors.phone_number.message}
            </span>
          )}
        </div>
        <Controller
          name="course"
          control={control}
          render={({ field }) => (
            <Select
              placeholder="Ваш курс"
              className="form-selector"
              onChange={(value: string) => field.onChange(value)}
            >
              <Option value="1">1-й курс</Option>
              <Option value="2">2-й курс</Option>{" "}
              <Option value="3">3-й курс</Option>{" "}
              <Option value="4">4-й курс</Option>
            </Select>
          )}
        ></Controller>
        <Controller
          name="group"
          control={control}
          render={({ field }) => (
            <Select
              placeholder="Ваша группа "
              className="form-selector"
              onChange={(value: string) => field.onChange(value)}
            >
              <Option value="Computer Science">Computer Science</Option>
              <Option value="Cyber Security">Cyber Security</Option>{" "}
              <Option value="Artificial Intelligence">
                Artificial Intelligence
              </Option>{" "}
              <Option value="Program Engineering">Program Engineering</Option>
            </Select>
          )}
        ></Controller>
        <Controller
          name="isGrant"
          control={control}
          render={({ field }) => (
            <Select
              placeholder="Вы на гранте?"
              className="form-selector"
              onChange={(value: string) => field.onChange(value)}
            >
              <Option value="True">Да</Option>
              <Option value="False">Нет</Option>{" "}
            </Select>
          )}
        ></Controller>
        <Controller
          name="isGrant"
          control={control}
          render={({ field }) => (
            <Select
              placeholder="Имеется стипендия?"
              className="form-selector mb-16"
              onChange={(value: string) => field.onChange(value)}
            >
              <Option value="True">Да</Option>
              <Option value="False">Нет</Option>{" "}
            </Select>
          )}
        ></Controller>
        <Button
          onClick={handleSubmit(onSubmit)}
          className={`registration-button mt-4 ${
            isValid && !isSubmitting ? "active" : "inactive"
          }`}
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};
