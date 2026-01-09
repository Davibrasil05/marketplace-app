import * as yup from "yup"

export const registerScheme = yup.object({
    name: yup
        .string()
        .required("Nome é obrigatório")
        .min(2, "Nome deve ter no mínimo 2 caracteres"),
    email: yup
        .string()
        .required("Email é obrigatório")
        .email("Email inválido"),
    phone: yup
        .string()
        .required("Telefone é obrigatório").matches(/^\d{11}$/, "Telefone deve conter 11 dígitos"),
    password: yup
        .string()
        .required("Senha é obrigatória")
        .min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: yup
        .string()
        .required("Senha é obrigatória")
        .oneOf([yup.ref("password")], "As senhas não coincidem"),
})  

export type RegisterFormData = yup.InferType<typeof registerScheme>