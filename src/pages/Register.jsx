import React, { useState } from "react";
import FormCard from "../components/FormCard.jsx";
import {Link, useNavigate} from "react-router-dom";
import { Field, Form, Formik } from "formik";
import {
    emailValidation,
    passwordValidation,
    usernameValidation,
    passwordVerificationValidation,
} from "../hooks/validationSchemaHook.js";
import * as Yup from "yup";
import { register } from "../hooks/apiCalls.js";
import MessageToast from "../components/MessageToast.jsx";
import VerificationCodeForm from "../components/VerificationCodeForm.jsx";

export const registerSchema = Yup.object({
    username: usernameValidation,
    email: emailValidation,
    password: passwordValidation,
    confirmPassword: passwordVerificationValidation,
});

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState(null);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (values, { resetForm }) => {
        setIsLoading(true);
        setToast(null);

        try {
            const result = await register(
                values.username,
                values.email,
                values.password,
                values.confirmPassword
            );
            setToast({
                message: result.message || "¡Registro exitoso!",
                type: "success",
            });
            setUserId(result.user_id)
            resetForm();
        } catch (error) {
            const errorMessage = error.response?.data?.error || error.message;
            setToast({
                message: errorMessage,
                type: "error",
            });

        } finally {
            setIsLoading(false);
        }
    };
    const handleVerificationFailed = () => {
        navigate("/login");
    };

    if (userId) {
        return <VerificationCodeForm userId={userId} onVerificationFailed={handleVerificationFailed}/>;
    }

    return (
        <main>
            <FormCard>
                <h1 className="form__title">Regístrate</h1>
                <Link to="/login" className="form__button">
                    <p className="form__selected">Regístrate</p>
                    <p>Accede</p>
                </Link>
                <Formik
                    initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
                    validationSchema={registerSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isValid }) => (
                        <Form className="form--register">
                            <fieldset className="form__field--register">
                                <label htmlFor="username" className="field__label">
                                    Nombre de usuario
                                </label>
                                <Field
                                    className={`field__input ${touched.username && errors.username ? "error" : ""}`}
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Introduce tu Nombre de usuario"
                                />
                                {touched.username && errors.username && (
                                    <span className="field__error">{errors.username}</span>
                                )}
                            </fieldset>
                            <fieldset className="form__field--register">
                                <label htmlFor="email" className="field__label">
                                    Correo Electrónico
                                </label>
                                <Field
                                    className={`field__input ${touched.email && errors.email ? "error" : ""}`}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Introduce tu Correo Electrónico"
                                />
                                {touched.email && errors.email && (
                                    <span className="field__error">{errors.email}</span>
                                )}
                            </fieldset>
                            <fieldset className="form__field--register">
                                <label htmlFor="password" className="field__label">
                                    Contraseña
                                </label>
                                <Field
                                    className={`field__input ${touched.password && errors.password ? "error" : ""}`}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Introduce tu Contraseña"
                                />
                                {touched.password && errors.password && (
                                    <span className="field__error">{errors.password}</span>
                                )}
                            </fieldset>
                            <fieldset className="form__field--register">
                                <label htmlFor="confirmPassword" className="field__label">
                                    Confirmar Contraseña
                                </label>
                                <Field
                                    className={`field__input ${touched.confirmPassword && errors.confirmPassword ? "error" : ""}`}
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirma tu Contraseña"
                                />
                                {touched.confirmPassword && errors.confirmPassword && (
                                    <span className="field__error">{errors.confirmPassword}</span>
                                )}
                            </fieldset>
                            <button
                                className="form__submit--register"
                                type="submit"
                                disabled={!isValid || isLoading}
                            >
                                {isLoading ? "Cargando..." : "Regístrate"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </FormCard>
            {toast && (
                <MessageToast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </main>
    );
};

export default Register;
