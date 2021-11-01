import React from 'react';
import useForm from './useForm'
import validate from './Validation'

const FormSignUp = () => {
    const {values,handleChange, handleSubmit,errors} = useForm(validate)
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        name='username'
                        className="form-input"
                        placeholder="Enter your Username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name='email'
                        className="form-input"
                        placeholder="Enter your Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                       {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name='password'
                        className="form-input"
                        placeholder="Enter your Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                       {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        id="password2"
                        type="password"
                        name='password2'
                        className="form-input"
                        placeholder="Confirm your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                       {errors.password2 && <p className="error">{errors.password2}</p>}
                </div>
                <button type='submit' className='form-input-btn'>
                    Sign-up
                </button>
                <span className="form-input-login">
                    Already ha=ve an account? <a href='/login'>Login</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignUp;