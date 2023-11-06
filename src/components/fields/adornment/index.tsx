import InputAdornment from "@mui/material/InputAdornment";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import { TFieldAdornmentType, TFieldAdornmentPosition } from "./types";

interface IFieldAdornmentProps {
    type: TFieldAdornmentType | undefined;
    position: TFieldAdornmentPosition;
};

const defaultProps = {
    position: "start",
};

type TFieldAdornmentProps = IFieldAdornmentProps & typeof defaultProps;

const FieldAdornment = (props: TFieldAdornmentProps) => {
    const { type, position } = props;

    const adornmentSwitcher: Record<TFieldAdornmentType, OverridableComponent<SvgIconTypeMap<{}, "svg">>> = { 
        "name": SupervisorAccountIcon,
        "email": EmailIcon,
        "password": LockIcon,
    }

    if (type === undefined) return;

    const Adornment = adornmentSwitcher[type];

    return (
        <InputAdornment position={position}>
            <Adornment />
        </InputAdornment>
    )
};

export default FieldAdornment;
