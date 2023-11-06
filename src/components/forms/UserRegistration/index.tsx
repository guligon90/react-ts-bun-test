import React, { ChangeEvent, useEffect } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import BaseTextField from "../../fields/input";
import PasswordField from "../../fields/password";

import validationSchema from "./validation";
import useUserRegistrationHook from "./hooks";

const UserRegistrationForm = () => {
    const {
        handleFieldChange,
        resetFields,
        formik: {
            touched,
            values: {
                full_name,
                email,
                password,
                confirm_password,
            },
            errors,
            handleSubmit,
            isValid,
        }
    } = useUserRegistrationHook(validationSchema);

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
                    onChange={e => handleFieldChange(e, "full_name")}
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
                    onChange={e => handleFieldChange(e, "email")}
                    errorMessage={touched.email ? errors.email : ""}
                    showError={Boolean(errors.email) && touched.email}
                />
                <PasswordField
                    name="password"
                    id="password"
                    label="Senha"
                    value={password}
                    onChange={e => handleFieldChange(e, "password")}
                    errorMessage={touched.password ? errors.password : ""}
                    showError={Boolean(errors.password) && touched.password}                    
                    measureStrength={true}
                />
                <PasswordField
                    name="confirm_password"
                    id="confirm-password"
                    label="Repita a senha"
                    value={confirm_password}
                    onChange={e => handleFieldChange(e, "confirm_password")}
                    errorMessage={touched.confirm_password ? errors.confirm_password : ""}
                    showError={Boolean(errors.confirm_password) && touched.confirm_password}                    
                />
                <Stack spacing={2} direction="row">
                    <Button
                        type="submit"
                        fullWidth
                        color="primary"
                        disabled={!isValid}
                    >
                    Enviar
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        color="secondary"
                        onClick={() => resetFields()}
                    >
                    Limpar
                    </Button>
                </Stack>
            </form>
        </div>
    );
}

export default UserRegistrationForm;
