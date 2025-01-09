// import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/Typography";
import { Button } from "../../components/UI";
import { Input } from "../../components/UI";
import "./LoginPage.scss";

export const LoginPage = () => {
  // const params = useParams();
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <div className="LoginPage">
      <Heading type="h1" text="Авторизация"/>
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
