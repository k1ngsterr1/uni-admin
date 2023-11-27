import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface LoginFormData {
  username: string;
  password: string;
}

export function useLoginForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormData>({
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post(
        `https://pixel2protocolv1-production-c8ac.up.railway.app/token`,
        data
      );

      console.log("Login successful:", response.data);

      navigate("/");
    } catch (error: any) {
      if (error.response) {
        console.error("Login failed with status:", error.response.status);
        setError(`Ошибка логина: ${error.response.status}`);
      } else if (error.request) {
        setError(`Ошибка ответа: ${error.request}`);
      } else {
        setError(`Ошибка во время установки: ${error.message}`);
      }
    }
  };
  return {
    register,
    handleSubmit,
    isValid,
    errors,
    isSubmitting,
    onSubmit,
    error,
  };
}
