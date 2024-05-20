import  kenziehub from "../../assets/Logo.svg";
import { DefaultTemplate } from "../../components";
import style from "./style.module.scss";

export const UserPage = ({ user, userLogout }) => {
  return (
    <DefaultTemplate user={user} userLogout={userLogout}>
      <main className={style.maincontainer}>
        <div className={style.headerContainer}>
          <img src={ kenziehub } alt="Logo KenzieHub" />  
          <button className={style.btnBack} onClick={userLogout}>Sair</button>
        </div>
        <div className={style.headerContainer2}>
          <h1 className="Title1">Olá, Samuel Leão</h1>
          <p className={style.texto}>Primeiro módulo (Introdução ao  Frontend)</p>
        </div>
        <div className={style.headerContainer3}>
          <h1 className="Title1">Que pena! Estamos em desenvolvimento :(</h1>
          <p className="Paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
      </main>
    </DefaultTemplate>
  );
};