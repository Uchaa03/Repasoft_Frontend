import * as Yup from "yup";

//Email Regex
const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/

export const emailValidation = Yup.string()
    .trim()
    .matches(regexMail, "El correo no es válido")
    .required("El correo es necesario");

export const passwordValidation = Yup.string()
    .trim()
    .min(8, "Min 8")
    .max(20, "Máx 20")
    .matches(/[A-Z]/, "Una letra mayus")
    .matches(/[a-z]/, "Una leta minus")
    .matches(/[0-9]/, "Min 1 número")
    .matches(/[!@#$%^&*]/, "Min un (!@#$%^&*)")
    .matches(/^\S*$/, "Sin espacios")
    .required("Requerido");

export const usernameValidation = Yup.string()
    .trim()
    .min(5, "Min 5")
    .max(20, "Máx 20")
    .required("Requerido");

export const passwordVerificationValidation = Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), null], "No coincide")
    .required("Requerido");
