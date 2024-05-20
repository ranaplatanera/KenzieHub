import { RegisterForm } from "../../components/forms/RegisterForm";
import  kenziehub from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <main className={style.maincontainer}>
      <div className={style.logoContainer}>
        <img src={ kenziehub } alt="Logo KenzieHub" />
        <Link className={style.btnBack}to="/">Voltar</Link>
      </div>
      <div className={style.container}>
        <h1 className="Title1">Crie sua conta</h1>
        <p className={style.texto2}>Rápido e grátis, vamos nessa</p>
        <RegisterForm />
      </div>
    </main>
  );
};