import React, { useState } from "react";

import BaseTextField, { IBaseTextFieldProps } from "../input";
import FieldAdornment from "../adornment";
import PasswordToggleAdornment from "../adornment/password";

import "./styles.scss";
import PasswordStrengthMeter from "./strength";

type TPasswordTogglePosition = "start" | "end";

interface IPasswordFieldProps extends IBaseTextFieldProps {
    measureStrength?: boolean;
    toggleLocation?: TPasswordTogglePosition;
}

const defaultProps = {
    measureStrength: false,
    toggleLocation: "end" as TPasswordTogglePosition,
};

type TPasswordFieldProps = IPasswordFieldProps & typeof defaultProps;

const PasswordField = (props: TPasswordFieldProps) => {
    const { toggleLocation, measureStrength, value, ...other } = props;
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const adornments = {
        components: {
            start: <FieldAdornment type="password" position="start" />,
            end:   <PasswordToggleAdornment
                showPassword={showPassword}
                setShowPassword={setShowPassword}
            />,
        }
    };

    return (
        <div>
            <BaseTextField
                type={showPassword ? "text" : "password"}
                adornments={adornments}
                {...other}
            />
            {measureStrength && <PasswordStrengthMeter password={value} />}
        </div>
    );
};

PasswordField.defaultProps = defaultProps;

export default PasswordField;
export { TPasswordFieldProps, IPasswordFieldProps };

