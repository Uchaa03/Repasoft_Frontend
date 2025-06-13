import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { verifyCode } from "../hooks/apiCalls.js";
import MessageToast from "./MessageToast";
import useAuthStore from "../store/authStore";
import FormCard from "./FormCard.jsx";
import {useRedirectAfterAuth} from "../hooks/useRedirectAfterAuth.js";

const codeValidation = Yup.string().required("El código es obligatorio");

const VerificationCodeForm = ({ userId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const handleSubmit = async (values, { resetForm }) => {
        setIsLoading(true);
        setToast(null);

        try {
            const { token, role, requires_password_change } = await verifyCode(userId, values.code);
            setToast({
                message: "¡Código verificado correctamente!",
                type: "success",
            });
            resetForm();
            useAuthStore().getState().setState({token, role, requires_password_change});
            useRedirectAfterAuth(role, requires_password_change);
        } catch (error) {
            setToast({
                message: error.response?.data?.error || error.message || "Error al verificar el código",
                type: "error",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="verification-page">
            <FormCard>
                <h1 className="form__title">Verificación</h1>
                <Formik
                    initialValues={{code: ""}}
                    validationSchema={Yup.object({code: codeValidation})}
                    onSubmit={handleSubmit}
                >
                    {({errors, touched, isValid}) => (
                        <Form className="form">
                            <fieldset className="form__field">
                                <label htmlFor="code" className="field__label">
                                    Código de verificación
                                </label>
                                <Field
                                    className={`field__input ${touched.code && errors.code ? "error" : ""}`}
                                    type="text"
                                    id="code"
                                    name="code"
                                    placeholder="Introduce el código enviado al correo"
                                    maxLength="6"
                                />
                                {touched.code && errors.code && (
                                    <span className="field__error">{errors.code}</span>
                                )}
                            </fieldset>
                            <button
                                className="form__submit"
                                type="submit"
                                disabled={!isValid || isLoading}
                            >
                                {isLoading ? "Verificando..." : "Verificar"}
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

export default VerificationCodeForm;
