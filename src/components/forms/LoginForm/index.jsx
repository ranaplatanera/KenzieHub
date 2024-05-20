import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./LoginForm.schema";
import { InputPassword } from "../InputPassword";
import { api } from "../../../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./style.module.scss";

export const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });
  
  const navigate = useNavigate();

  const onSubmit = (payload) => {
    userLogin(payload);
  };

  const userLogin = async (payload) => {
    try {
      const { data } = await api.post("/login", payload);
      setUser(data.user);
      navigate("/user");
    } catch (error) {
      console.log(error);
      if (error.response.data === "Cannot find user") {
        toast.error("Credenciais invalidas");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.maincontainer}>     
      <Input
      label="E-mail"
      type="text"
      error={errors.email}
      {...register("email")}
      />

      <InputPassword
      label="Senha"
      error={errors.password}
      {...register("password")}
      />       
      <button className="btn" type="submit">Entrar</button>
    </form>
  );
};
