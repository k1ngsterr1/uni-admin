import { StudentInfoForm } from "@features/StudentInfoForm";

export const StudentInfoScreen = () => {
  return (
    <div className="wrapper">
      <h1 className="text-center text-custom-black">Вы успешно вошли!</h1>
      <p className="paragraph w-[50%] text-center mt-3">
        Пожалуйста, чтобы начать пользоваться нашим сервисом заполните
        информацию о себе
      </p>
      <StudentInfoForm />
    </div>
  );
};
