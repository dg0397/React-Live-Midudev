import React, { useState } from 'react'
import register from 'services/register';
import { Formik,Form,Field,ErrorMessage } from 'formik';

const validateFields = values => {
    const errors = {}

    if (!values.username) {
        errors.username = 'Required username'
    }
    if (!values.password) {
        errors.password = 'Required password'
    } else if (values.password.length < 3) {
        errors.password = 'Length must be greather than 3'
    }

    return errors
}

const initialValues = {
    username: '',
    password: '',
}

export default function Register() {
    const [registered , setRegistered] = useState(false);

    if(registered){
        return <h4>Congratulation <span role = 'img' aria-label = 'check icon'>✅</span>! You've been successfully registered!</h4>
    }
    return (
        <div className='Register' >
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={(values, { setFieldError }) => {
                    return register(values)
                        .then(()=>{
                            setRegistered(true)
                        })
                        .catch(() => {
                            setFieldError('username', 'This username is not valid')
                        })
                }}
            >
                {
                    ({  isSubmitting, errors }) =>
                        <Form className='Form'>
                            <Field
                                className={errors.username ? 'error' : ''}
                                name="username"
                                placeholder='Put here the username' />
                            <ErrorMessage name = "username" component = 'small' className = 'form-error'/>
                            <Field
                                className={errors.password ? 'error' : ''}
                                name="password"
                                placeholder='Put here the password' 
                                type = 'password'/>
                            <ErrorMessage name = "password" component = 'small' className = 'form-error' />
                            <button disabled={isSubmitting} >Register</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}
