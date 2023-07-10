import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Heading from '../UI/HeadingTag/Heading';

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
                    authtype === 'login' ? <Heading type={'h2'}>Login</Heading> :
                        authtype === 'signup' ? <Heading type={'h2'}>sign up</Heading> : <Heading type={'h2'}>reset password</Heading>


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
                            <Input type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            errors={errors.name && touched.name ? errors.name : ''}
                                        />
                                <div className="validate" />
                            </div>
                        </>


                }

                <>
                    <div className="col-md-7 form-group mt-3 mt-md-0">
                    <Input type="email"
                                    className="form-control"
                                    name="email" id="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    errors={errors.email && touched.email ? errors.email : ''}
                                />
                        <div className="validate" />
                    </div>
                    
                </>

                {
                    authtype === 'forgot' ? null :
                        <>
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                            <Input type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    value={values.pass}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Your Password"
                                    errors={errors.pass && touched.pass ? errors.pass : ''}
                                />
                                <div className="validate" />

                            </div>

                        </>

                }



                {
                    authtype === 'login' ? <div id='login' className="text-center"><Button type="primary">Login</Button></div>
                        :
                        authtype === 'signup' ?
                            <div id='login' className="text-center"><Button type="secondary">Sign up</Button></div>
                            :
                            <div id='login' className="text-center"><Button type="outline">submit</Button></div>

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