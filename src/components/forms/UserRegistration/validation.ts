import * as Yup from "yup";

const validationSchema = Yup.object({
    full_name: Yup.string()
        .min(2, "O nome completo deve ter no mínimo 2 caracteres")
        .max(60, "O nome completo deve ter no máximo 60 caracteres")
        .required("Campo obrigatório"),
    email: Yup.string()
        .email("E-mail com formato inválido")
        .required("Campo obrigatório"),
    password: Yup.string()
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .required("Campo obrigatório"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Senhas não coincidem")
        .required("Campo obrigatório")
});

export default validationSchema;
