import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

function Auth1(props) {


    const [authtype, setauthtype] = useState('login');
    const navicition = useNavigate()

    let authObj = {};
    let intiVal = {};

    if (authtype === 'login') {
        authObj = {
            email: yup.string().email('Plese Enter Valid Email').required('Plese Enter Email'),
            pass: yup.string().required('Plese Enter Password'),
        }

        intiVal = {
            email: '',
            pass: '',
        }

    } else if (authtype === 'signup') {
        authObj = {
            name: yup.string().required('Plese Enter Name'),
            email: yup.string().email('Plese Enter Valid Email').required('Plese Enter Email'),
            pass: yup.string().required('Plese Enter Password'),
        }

        intiVal = {
            name: '',
            email: '',
            pass: '',
        }
    } else {
        authObj = {
            email: yup.string().required('Plese Enter Password'),
        }

        intiVal = {
            email: ''
        }
    }
    let authSchema = yup.object(authObj)

    const hendalLogin = () => {
        localStorage.setItem("loginStatus", 'true');
        navicition('/');
    }
    const hendalSignup = () => {
        
    }
    const hendalForgot = () => {
        
    }

    const formik = useFormik({
        initialValues: intiVal,
        enableReinitialize: true,
        validationSchema: authSchema,
        onSubmit: values => {
            if (authtype === 'login') {
                hendalLogin()
            } else if (authtype === 'signup') {
                hendalSignup()
            }else if (authtype === 'forgot') {
                hendalForgot()
            }
        },
    });

    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik

    return (

        <div className="container">
            <div className="section-title">
                {
                    authtype === 'login' ? <h2>Login</h2> :
                        authtype === 'signup' ? <h2>sign up</h2> : <h2>reset password</h2>


                }

                <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                    blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                    Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
            </div>



            <form onSubmit={handleSubmit} className="row justify-content-center" >
                {
                    authtype === 'login' || authtype === 'forgot' ?

                        null :
                        <>
                            <div className="col-md-7 form-group">
                                <input type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <div className="validate" />
                            </div>
                            <span className='errors'>{errors.name && touched.name ? errors.name : ''}</span>
                        </>


                }

                <>
                    <div className="col-md-7 form-group mt-3 mt-md-0">
                        <input type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <div className="validate" />
                    </div>
                    <span className='errors'>{errors.email && touched.email ? errors.email : ''}</span>
                </>

                {
                    authtype === 'forgot' ? null :
                        <>
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="pass"
                                    id="pass"
                                    placeholder="Your Password"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.pass}
                                />
                                <div className="validate" />

                            </div>
                            <span className='errors'>{errors.pass && touched.pass ? errors.pass : ''}</span>
                        </>

                }



                {
                    authtype === 'login' ? <div id='login' className="text-center"><button type="submit">Login</button></div>
                        :
                        authtype === 'signup' ?
                            <div id='login' className="text-center"><button type="submit">Sign up</button></div>
                            :
                            <div id='login' className="text-center"><button type="submit">submit</button></div>

                }

            </form>

            {
                authtype === 'login' ?
                    <>
                        <span className="login2"><a href='#' onClick={() => setauthtype('forgot')}>forgot password ?</a></span><br />
                        <span className="login1">you have alredy account <a href="#" onClick={() => setauthtype('signup')}>signup</a></span><br />
                    </>


                    :
                    <span className="login1">creat new account <a href="#" onClick={() => setauthtype('login')}>login</a></span>
            }
        </div>
    );
}

export default Auth1;