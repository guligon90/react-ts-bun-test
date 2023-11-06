import { useFormik } from "formik";
import { ObjectSchema } from "yup";

import { sanitizeFullName } from "../../../sdk/parsing";
import { IUser } from "../../../models/user";

const useUserRegistrationHook = (validationSchema: ObjectSchema<IUser>) => {
    const initialValues = {
        full_name: "",
        email: "",
        password: "",
        confirm_password: ""
    };

	const handleSubmit = (values: IUser) => {
		values.full_name = sanitizeFullName(values.full_name);

		alert(JSON.stringify(values, null, 2));
	}

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    return {
        formik,
    };
}

export default useUserRegistrationHook;
