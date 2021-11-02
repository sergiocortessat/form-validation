import { useEffect, useState } from 'react';

interface IForm {
    submitForm:  () => void;
    validate: (values: {username: string, password: string, email: string, password2: string}) => void;
}

const useForm = ({validate, submitForm}:IForm) => {
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
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [errors, isSubmitting, submitForm]);

    return { handleChange, values, errors, handleSubmit };
}

export default useForm;