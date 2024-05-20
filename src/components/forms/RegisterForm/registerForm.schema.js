import { z } from "zod";

const registerFormSchema = z
  .object({
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .email("Forneça um e-mail válido")
      .min(1, "Campo obrigatório"),
    password: z
    .string()
    .min(8, "São necessários pelo menos oito (8) caracteres")
    .regex(/[a-z]+/, "Deve conter pelo menos uma letra minúscula")
    .regex(/[A-Z]+/, "Deve conter pelo menos uma letra maiúscula")
    .regex(/[0-9]+/, "Deve conter pelo menos um número.")
    .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/, "Deve conter pelo menos um caracter especial"),
    confirmPassword: z.string().min(1, "Confirme sua senha"),
    bio: z.string().min(1, "Campo obrigatório"),
    contact: z.string().min(1, "Campo obrigatório"),
    course_module: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  })
  .refine(({ name, password }) => !password.includes(name), {
    message: "A senha não pode conter seu nome",
    path: ["password"],
  });

export { registerFormSchema };