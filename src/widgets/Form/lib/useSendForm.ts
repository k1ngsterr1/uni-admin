import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export interface FormData {
  number: string;
  course: string;
  group: string;
  isGrant: boolean;
  isScholarship: boolean;
}

export function useSendForm() {
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
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.post(
        `https://pixel2protocolv1-production-c8ac.up.railway.app/user-info`,
        data,
        {
          headers: {
            // Include the token in the authorization header
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Редирект с токеном в URL

      console.log("Registration successful:", response.data);

      window.location.href = `https://uni-panel-rouge.vercel.app/?token=${encodeURIComponent(
        token
      )}`;
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
