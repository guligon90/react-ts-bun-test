import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { DefaultComponentProps, OverridableTypeMap } from "@mui/material/OverridableComponent";
import Typography from "@mui/material/Typography";

import { mapPasswordToLabelAndProgress, TProgressColor } from "./score";

interface IPasswordStrengthMeterProps extends DefaultComponentProps<OverridableTypeMap> {
    password?: string;
}

const defaultProps: IPasswordStrengthMeterProps = {
    password: "",
};

type TPasswordStrengthMeterProps = IPasswordStrengthMeterProps & typeof defaultProps;

const PasswordStrengthMeter = (props: TPasswordStrengthMeterProps) => {
    const { password } = props;

    const [label, setLabel] = useState<string>("");
    const [color, setColor] = useState<TProgressColor>("error");
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const { label: newLabel, color: newColor, progress: newProgress } = mapPasswordToLabelAndProgress(password);

        setColor(newColor);
        setProgress(newProgress);
        setLabel(newLabel);
    }, [password]);

    return (
        <Box sx={{ width: "100%" }}>
            <LinearProgress color={color} variant="determinate" value={progress} />
            <Typography variant="body2">{`Força: ${label}`}</Typography>
        </Box>
    );
};

export default PasswordStrengthMeter;
