import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema.js";
import { api } from "../../../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./style.module.scss";

export const RegisterForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (payload) => {
    userRegister(payload);
  };

  const userRegister = async (payload) => {
    try {
      const { data } = await api.post("/users", payload);
      navigate("/user");
      toast.success("Conta criada com sucesso!");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };
  
  return (
    <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <Input 
      label="Nome" 
      type="text"
      id="name" 
      placeholder="Digite aqui seu nome"
      error={errors.name} 
      {...register("name")} 
      />

      <Input 
      label="E-mail" 
      type="email"
      id="email" 
      placeholder="Digite aqui seu email"
      error={errors.email} 
      {...register("email")} 
      />

      <Input 
      label="Senha" 
      type="password"
      id="password" 
      placeholder="Digite aqui sua senha"
      error={errors.password} 
      {...register("password")} 
      />

      <Input 
      label="Confirmar senha" 
      type="password"
      id="confirmpassword" 
      placeholder="Digite novamente sua senha"
      error={errors.confirmPassword} 
      {...register("confirmPassword")} 
      />

      <Input 
      label="Bio" 
      type="text"
      id="bio" 
      placeholder="Fale sobre você"
      error={errors.bio} 
      {...register("bio")} 
      />

      <Input 
      label="Contato" 
      type="text"
      id="contact" 
      placeholder="Opção de contato"
      error={errors.contato} 
      {...register("contact")} 
      />
      
      <label  
      className={style.label}>
      Selecionar módulo
      </label>

      <select 
      name= "module" 
      id= "course_module" 
      className={style.select} 
      {...register("course_module")}>
        <option id= "module" value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
        <option id= "module" value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
        <option id= "module" value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
        <option id= "module" value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>
      <button 
      className="btn" 
      type="submit">Cadastrar
      </button>
    </form>
  );
};
