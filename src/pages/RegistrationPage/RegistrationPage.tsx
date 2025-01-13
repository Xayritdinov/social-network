import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AuthWith } from "../../components";
import { Heading } from "../../components/Typography";
import { Button } from "../../components/UI";
import { Input } from "../../components/UI";
import "./RegistrationPage.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IloginForm {
  username: string;
  usersurname: string;
  usercity: string;
  useremail: string;
  userphone: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().email("Веедите почту в правильном формате").required("Обязательное поле"),
  userpassword: yup.string().required("Обязательное поле").min(8, "Минимум 8 символов"),
  username: yup.string().required("Обязательное поле").min(1, "Минимум 8 символов"),
  usersurname: yup.string().required("Обязательное поле").min(1, "Минимум 8 символов"),
  usercity: yup.string().required("Обязательное поле").min(1, "Минимум 8 символов"),
  userphone: yup.string().required("Обязательное поле").min(9, "Минимум 9 символов")
});

export const RegistrationPage = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginFormSchema), defaultValues: { username: "", usersurname: "", usercity: "", userphone: "", useremail: "", userpassword: "" }
  });

  const onSubmit: SubmitHandler<IloginForm> = (data) => {
    console.log(data);
  }

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
          name="usersurname"
          control={control}
          render={({ field }) => (
            <Input
              errorMessage={errors.usersurname?.message}
              isError={!!errors.usersurname}
              type="text"
              placeholder="Фамилия пользователя"
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
        <Button type="submit" text="Войти" />
      </form>
      {/* <AppLink text="Забыли пароль?" href="#" /> */}
      <AuthWith />
    </div>
  );
};
