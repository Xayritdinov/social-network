import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AuthWith } from "../../components";
import { Heading } from "../../components/Typography";
import { Button } from "../../components/UI";
import { Input } from "../../components/UI";
import "./RegistrationPage.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation } from "../../store/api/auth.api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface IRegistrationForm {
  username: string;
  useremail: string;
  userphone: string;
  userpassword: string;
  usercity: string;
}

const registrationFormSchema = yup.object({
  useremail: yup.string().email("Веедите почту в правильном формате").required("Обязательное поле"),
  userpassword: yup.string().required("Обязательное поле").min(8, "Минимум 8 символов"),
  username: yup.string().required("Обязательное поле").min(1, "Минимум 8 символов"),
  usercity: yup.string().required("Обязательное поле").min(1, "Минимум 8 символов"),
  userphone: yup.string().required("Обязательное поле").min(9, "Минимум 9 символов")
});

export const RegistrationPage = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registrationFormSchema), defaultValues: { username: "", usercity: "", userphone: "", useremail: "", userpassword: "" }
  });


  const navigate = useNavigate()
  const [registerUser, { data: userData }] = useRegisterUserMutation();

  useEffect(() =>{
    if(userData?.user_id) {
      navigate("/main")
      localStorage.setItem("userId", JSON.stringify(userData.user_id));
    }
  }, [userData])

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    registerUser({
      email: data.useremail,
      name: data.username,
      phone_number: data.userphone,
      password: data.userpassword,
      user_city: data.usercity
    });
  };

  return (
    <div className="RegistrationPage">
      <Heading type="h1" text="Регистрация" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              errorMessage={errors.username?.message}
              isError={!!errors.username}
              type="text"
              placeholder="Имя пользователя"
              {...field}
            />
          )}
        />
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <Input
              errorMessage={errors.useremail?.message}
              isError={!!errors.useremail}
              type="tel"
              placeholder="Почта"
              {...field}
            />
          )}
        />
        <Controller
          name="userphone"
          control={control}
          render={({ field }) => (
            <Input
              errorMessage={errors.userphone?.message}
              isError={!!errors.userphone}
              type="tel"
              placeholder="Номер телефона"
              {...field}
            />
          )}
        />
        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => (
            <Input
              errorMessage={errors.userpassword?.message}
              isError={!!errors.userpassword}
              type="password"
              placeholder="Пароль"
              {...field}
            />
          )}
        />
        <Controller
          name="usercity"
          control={control}
          render={({ field }) => (
            <Input
              errorMessage={errors.usercity?.message}
              isError={!!errors.usercity}
              type="text"
              placeholder="Город"
              {...field}
            />
          )}
        />
        <Button type="submit" text="Зарегистрироваться" />
      </form>
      {/* <AppLink text="Забыли пароль?" href="#" /> */}
      <AuthWith href="/" text="Авторизоваться" />
    </div>
  );
};
