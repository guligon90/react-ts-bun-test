import zxcvbn from "zxcvbn";

export type TProgressColor = "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";

export interface IPasswordMapping {
    label: string;
    color: TProgressColor;
    progress: number;
}

const defaultMapping: IPasswordMapping = {
    label: "muito fraca",
    color: "error" as TProgressColor,
    progress: 0,
};

const scoreSwitcher: Record<number, IPasswordMapping> = {
    0: {
        label: "muito fraca",
        color: "error",
        progress: 0,
    },
    1: {
        label: "fraca",
        color: "warning",
        progress: 25,
    },
    2: {
        label: "regular",
        color: "secondary",
        progress: 50,
    },
    3: {
        label: "forte",
        color: "info",
        progress: 75,
    },
    4: {
        label: "muito forte",
        color: "success",
        progress: 100,
    },
};

const mapPasswordToLabelAndProgress = (password: string | undefined): IPasswordMapping => {
    if (!password) return defaultMapping;

    const testedResult = zxcvbn(password);
    const { score } = testedResult;
    const mapping = scoreSwitcher[score];

    return mapping || defaultMapping;
};

export { defaultMapping, mapPasswordToLabelAndProgress };
