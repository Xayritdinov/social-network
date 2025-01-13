import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/Typography";
import { Button } from "../../components/UI";
import { Input } from "../../components/UI";
import "./LoginPage.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IloginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().email("Веедите почту в правильном формате").required("Обязательное поле"),
  userpassword: yup.string().required("Обязательное поле").min(8, "Минимум 8 символов")
});

export const LoginPage = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginFormSchema), defaultValues: { useremail: "", userpassword: "" }
  });

  const onSubmit: SubmitHandler<IloginForm> = (data) => {
    console.log(data);
  }

  return (
    <div className="LoginPage">
      <Heading type="h1" text="Авторизация" />
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <AppLink text="Забыли пароль?" href="#" />
      <AuthWith />
    </div>
  );
};
