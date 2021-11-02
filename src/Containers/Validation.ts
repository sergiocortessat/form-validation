const isValidEmail = (email:string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

interface IValidation {
    username: string;
    email: string;
    password: string;
    password2: string;
}

interface IErrorValidation {
    username?: string;
    email?: string;
    password?: string;
    password2?: string;
}

export default function validateInfo(values:IValidation) {
    let errors:IErrorValidation = {};
    if (!values.username.trim()) {
        errors.username = 'Username required';
    }
    if (!isValidEmail(values.email) || values.email === "") {
        errors.email = 'Correct email required';
    }
    if (!values.password) {
        errors.password = 'Password required';
    }else if(values.password.length < 6){
        errors.password = 'Password must be at least 6 characters';
    }
    if (!values.password2) {
        errors.password2 = 'Password confirmation required';
    }else if(values.password !== values.password2){
        errors.password2 = 'Passwords must match';
    }
    return errors;
}