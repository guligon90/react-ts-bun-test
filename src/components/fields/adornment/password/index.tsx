import { Dispatch, SetStateAction } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface IPasswordToggleAdornmentProps {
    showPassword?: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
};

const defaultProps = {
    showPassword: false,
}

type TPasswordToggleAdornmentProps = IPasswordToggleAdornmentProps & typeof defaultProps;

const PasswordToggleAdornment = (props: TPasswordToggleAdornmentProps) => {
    const { showPassword, setShowPassword } = props;

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <InputAdornment position="end">
            <IconButton
                aria-label="Alterna condição de visibilidade da senha"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    );    
}

PasswordToggleAdornment.defaultProps = defaultProps;

export default PasswordToggleAdornment;
