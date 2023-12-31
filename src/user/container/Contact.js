import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Heading from '../UI/HeadingTag/Heading';

function Contact(props) {

    let contactSchema = yup.object({
        name: yup.string().required('Plese Enter Name'),
        email: yup.string().email('Plese Enter Valid Email').required('Plese Enter Email'),
        subject: yup.string().required('Plese Enter Subject'),
        message: yup.string().required('Plese Enter Message').test('message', 'Maximum 5 words allowd', function (val) {
            let arr = val.split(" ")

            if (arr.length > 5) {
                return false;
            } else {
                return true;
            }
        })
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: contactSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik

    console.log(errors);


    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <Heading type={'h2'}>Contact</Heading>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location:</h4>
                                <p> F-505, Inovative Plazza New Delhi, India</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>cityhospital@example.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Call:</h4>
                                <p>+91 9988776655</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        placeholder="Your Name"
                                    /> <span className='errors'>{errors.name && touched.name ? errors.name : ''}</span>
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Your Email"
                                    /><span className='errors'>{errors.email && touched.email ? errors.email : ''}</span>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}
                                    placeholder="Subject"
                                /><span className='errors'>{errors.subject && touched.subject ? errors.subject : ''}</span>
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows={5}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                    placeholder="Message"
                                /><span className='errors'>{errors.message && touched.message ? errors.message : ''}</span>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;