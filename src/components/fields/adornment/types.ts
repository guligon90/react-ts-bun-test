export type TFieldAdornmentType = "name" | "email" | "password";

export type TFieldAdornmentPosition = "start" | "end";

export type TFieldAdornments = {
    components: {
        start?: React.JSX.Element;
        end?: React.JSX.Element;
    }
};
