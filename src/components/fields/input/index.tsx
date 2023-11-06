import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import TextField from "@mui/material/TextField";

import { TFieldAdornments } from "../adornment/types"

interface IBaseTextFieldProps {
    type?: HTMLInputTypeAttribute;
    id?: string;
    name?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    showError?: boolean;
    errorMessage?: string;
    adornments?: TFieldAdornments;
    onChange?: (e: ChangeEvent) => void;
};

const defaultProps = {
    type: "text",
    name: "text-input",
    id: "text-input",
    label: "Text Input",
    placeholder: ""
};

type TBaseTextFieldProps = IBaseTextFieldProps & typeof defaultProps;

const BaseTextField = (props: TBaseTextFieldProps) => {
    const {
        type,
        label,
        name,
        id,
        value,
        placeholder,
        onChange,
        showError,
        errorMessage,
        adornments,
    } = props;

    return (
        <TextField
            name={name}
            id={id}
            helperText={errorMessage}
            error={showError}
            label={label}
            fullWidth
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            InputProps={{
                ...( adornments && { startAdornment: adornments.components.start }),
                ...( adornments && { endAdornment: adornments.components.end }),                
            }}
      />
    );    
};

BaseTextField.defaultProps = defaultProps;

export default BaseTextField;
export { IBaseTextFieldProps };
