import React, { useState } from 'react';
import './Form.css'
import FormSignUp from './FormSignUp'
import FormSucces from './FormSucces';
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
    <>
    <div className='form-container'>
      <span className='close-btn'>×</span>
      <div className='form-content-left'>
        <img className='form-img' src='img/img-2.svg' alt='spaceship' />
      </div>
      {!isSubmitted ? (
        <FormSignUp submitForm={submitForm} />
      ) : (
        <FormSucces />
      )}
    </div>
  </>
    )
}

export default Form;