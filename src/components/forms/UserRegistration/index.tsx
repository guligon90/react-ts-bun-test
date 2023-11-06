import React from "react";

import Button from "@mui/material/Button";

import BaseTextField from "../../fields/input";
import PasswordField from "../../fields/password";

import validationSchema from "./validation";
import useUserRegistrationHook from "./hooks";

const UserRegistrationForm = () => {
    const {
        formik: {
            touched,
            values: {
                full_name,
                email,
                password,
                confirm_password,
            },
            errors,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
        }
    } = useUserRegistrationHook(validationSchema);

    const change = (fieldName: string, e: { persist: () => void; }) => {
        e.persist();
        handleChange(e);
        setFieldTouched(fieldName, true, false);
    };

    return (
        <div className="App">
            <h1>Registro de Usuário</h1>

            <form onSubmit={handleSubmit}>
                <BaseTextField
                    type="text"
                    name="full_name"
                    id="full-name"
                    label="Nome completo"
                    value={full_name}
                    onChange={change.bind(null, "full_name")}
                    errorMessage={touched.full_name ? errors.full_name : ""}
                    showError={Boolean(errors.full_name) && touched.full_name}                                 
                />
                <BaseTextField
                    type="email"
                    name="email"
                    placeholder="e.g. foo@bar.com"
                    id="email"
                    label="E-mail"
                    value={email}
                    onChange={change.bind(null, "email")}
                    errorMessage={touched.email ? errors.email : ""}
                    showError={Boolean(errors.email) && touched.email}
                />
                <PasswordField
                    name="password"
                    id="password"
                    label="Senha"
                    value={password}
                    onChange={change.bind(null, "password")}
                    errorMessage={touched.password ? errors.password : ""}
                    showError={Boolean(errors.password) && touched.password}                    
                    measureStrength={true}
                />
                <PasswordField
                    name="confirm_password"
                    id="confirm-password"
                    label="Repita a senha"
                    value={confirm_password}
                    onChange={change.bind(null, "confirm_password")}
                    errorMessage={touched.confirm_password ? errors.confirm_password : ""}
                    showError={Boolean(errors.confirm_password) && touched.confirm_password}                    
                />
                <div>
                    <Button
                        type="submit"
                        fullWidth
                        color="primary"
                        disabled={!isValid}
                    >
                    Enviar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default UserRegistrationForm;
