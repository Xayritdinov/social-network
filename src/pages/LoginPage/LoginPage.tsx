import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/Typography";
import { Button } from "../../components/UI";
import { Input } from "../../components/UI";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading text="Авторизация"/>
      {/* <h1>Авторизация</h1> */}
      <form action="#">
        <Input type="tel" placeholder="Номер телефона"/>
        <Input type="password" placeholder="Пароль"/>
        <Button text="Войти"/>
      </form>
      <AppLink text="Забыли пароль?" href="#"/>
      <AuthWith/>      
    </div>
  );
};
