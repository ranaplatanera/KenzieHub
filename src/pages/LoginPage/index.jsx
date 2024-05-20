import  kenziehub from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms";
import style from "./style.module.scss";

export const LoginPage = ({ setUser }) => {
  return (
    <main className={style.maincontainer}>
      <img src={kenziehub} alt="KenzieHub logo" />
      <div className={style.container}>
        <h1 className="Title1">Login</h1>
        <LoginForm />
        <p className={style.texto}>Ainda não possui conta?</p>
        <Link to="/register" className={style.btnRegister}>Cadastre-se</Link>
      </div>
    </main>
  );
};