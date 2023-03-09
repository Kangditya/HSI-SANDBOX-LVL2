import { useState } from "react";

export const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        setTouched({ ...touched, [name]: true });
        
        const fieldErrors = validate({ [name]: value });
        setErrors({ ...errors, [name]: fieldErrors[name] });
    }


    
    const onBlur = (e) => {
        const { name } = e.target;
        if (!touched[name]) {
            setTouched({ ...touched, [name]: true });
            setErrors(validate(values));
        }
    }
    
    // const onBlur = (e) => {
    //     const { name } = e.target;
    //     setTouched({ ...touched, [name]: true });
    //     setErrors(validate(values));
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        setTouched(Object.keys(values).reduce((acc, key) => {
            return { ...acc, [key]: true };
        }, {}));

        const validationErrors = validate(values);

        if (Object.keys(validationErrors).length === 0) {
            callback();
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    }

    return {
        onChange,
        onBlur,
        onSubmit,
        errors,
        values,
        touched
    }
}
