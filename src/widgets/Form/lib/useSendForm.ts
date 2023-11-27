import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface FormData {
  phone_number: string;
  course: string;
  group: string;
  isGrant: boolean;
  isScholarship: boolean;
}

export function useSendForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}api/account/register/`,
        data
      );

      console.log("Registration successful:", response.data);

      navigate("/admin");
    } catch (error: any) {
      if (error.response) {
        setError(
          `Данные не отправились:
          ${error.response.status}`
        );

        console.error("Failed response data", error.response.data);
        setError(
          `Ошибка:
          ${error.response.data.email}`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        setError(
          `Не получен ответ:
          ${error.request}`
        );
      } else {
        setError(`Ошибка во время установки: ${error.message}`);
      }
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    control,
    isValid,
    isSubmitting,
    onSubmit,
    error,
  };
}
