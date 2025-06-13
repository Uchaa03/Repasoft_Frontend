import React, { useState } from 'react';
import FormCard from "../components/FormCard.jsx";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { emailValidation, passwordValidation } from "../hooks/validationSchemaHook.js";
import * as Yup from 'yup';
import { login } from "../hooks/apiCalls.js";
import MessageToast from "../components/MessageToast.jsx";
import VerificationCodeForm from "../components/VerificationCodeForm.jsx";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState(null);
    const [userId, setUserId] = useState(null);
    const [verificationFailed, setVerificationFailed] = useState(false);

    const handleSubmit = async (values, { resetForm }) => {
        setIsLoading(true);
        setToast(null);
        setVerificationFailed(false);

        try {
            const result = await login(values.email, values.password);
            setToast({
                message: result.message || "¡Acceso exitoso!",
                type: "success"
            });
            setUserId(result.user_id);
            resetForm();
        } catch (error) {
            const errorMessage = error.response?.data?.error || error.message;
            setToast({
                message: errorMessage,
                type: "error"
            });
        } finally {
            setIsLoading(false);
        }
    };

    if (userId && !verificationFailed) {
        return (
            <VerificationCodeForm
                userId={userId}
                onVerificationFailed={() => setVerificationFailed(true)}
            />
        );
    }

    return (
        <main>
            <FormCard>
                <h1 className="form__title">Inicia Sesión</h1>
                <Link to="/register" className="form__button">
                    <p>Regístrate</p>
                    <p className="form__selected">Accede</p>
                </Link>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object({
                        email: emailValidation,
                        password: passwordValidation,
                    })}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isValid }) => (
                        <Form className="form">
                            <fieldset className="form__field">
                                <label htmlFor="email" className="field__label">Correo Electrónico</label>
                                <Field
                                    className={`field__input ${touched.email && errors.email ? 'error' : ''}`}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Introduce tu Correo Electrónico"
                                />
                                {touched.email && errors.email && (
                                    <span className="field__error">{errors.email}</span>
                                )}
                            </fieldset>
                            <fieldset className="form__field">
                                <label htmlFor="password" className="field__label">Contraseña</label>
                                <Field
                                    className={`field__input ${touched.password && errors.password ? 'error' : ''}`}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Introduce tu Contraseña"
                                />
                                {touched.password && errors.password && (
                                    <span className="field__error">{errors.password}</span>
                                )}
                            </fieldset>
                            <button
                                className="form__submit"
                                type="submit"
                                disabled={!isValid || isLoading}
                            >
                                {isLoading ? 'Cargando...' : 'Accede'}
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

export default Login;
