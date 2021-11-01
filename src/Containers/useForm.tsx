import React, { useState } from 'react';

const useForm = (validate:any) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const [errors, setErrors] = useState<any>({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // const errors = validate(values);
        // setErrors(errors);
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    return { handleChange, values, errors, handleSubmit, isSubmitting };
}

export default useForm;