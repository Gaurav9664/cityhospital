import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function Fromvalidetion(props) {
    

    let fromSchema = yup.object().shape({
        name: yup.string().required('Plese Enter Name').test('name', 'Plese Valid Name', function (val) {
            let arr = val.split(" ")

            if (arr.length > 3 || arr.length < 3) {
                return false;
            } else {
                return true;
            }
        }),
        email: yup.string().email('Invalid email').required("Please enter Email"),
        password: yup.string().required('Plese Enter password').test('name', 'Plese Valid Password', function (pass) {
            const mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

            if (mediumRegex.test(pass)) {
                return true;
            } else {
                return false;
            }
        }),
        conformPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        mobile: yup.number().required("please enter your number").test('PhoneNumber', 'Must be exactly 10 number.', (value) => { if (value) { return value.toString().length === 10 } }),
        age: yup.number().required("Please supply your age").min(0, "You must be at least 0 years").max(150, "You must be at most 150 years"),
        gender: yup.string().required(),
        country: yup.string().required(),
        hobbies: yup.array().min(2).of(yup.string().required()).required(),
        address: yup.string().required('Please enter your massage').test('Address', 'maxmium 5 word allowed.', function (val) {
            let arr = val.split(" ");

            if (arr.length > 5) {
                return false
            } else {
                return true
            }
        }),

        tc: yup.bool().oneOf([true], 'Accept Terms is required')
    })


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            conformPassword: '',
            mobile: '',
            age: '',
            gender: '',
            country: '',
            hobbies: '',
            address: '',
            tc: ''
        },
        validationSchema: fromSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik


    return (

        <div>

            <form onSubmit={handleSubmit}>
                <input type='text'
                    name="name"
                    id='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder='Enter Full Name'
                /><span className='errors'>{errors.name && touched.name ? errors.name : ''}</span><br /><br />
                <input type='email'
                    name="email"
                    id='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Enter Email'
                /><span className='errors'>{errors.email && touched.email ? errors.email : ''}</span><br /><br />
                <input type='password'
                    name="password"
                    id='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder='Enter Password'
                /><span className='errors'>{errors.password && touched.password ? errors.password : ''}</span><br /><br />
                <input type='password'
                    name="conformPassword"
                    id='conformPassword'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.conformPassword}
                    placeholder='Enter Conform Password'
                /><span className='errors'>{errors.conformPassword && touched.conformPassword ? errors.conformPassword : ''}</span><br /><br />
                <input type='text'
                    name="mobile"
                    id='mobile'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    placeholder='Enter Mobile Number'
                /><span className='errors'>{errors.mobile && touched.mobile ? errors.mobile : ''}</span><br /><br />
                <input type='number'
                    name="age"
                    id='age'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    placeholder='Enter Age'
                /><span className='errors'>{errors.age && touched.age ? errors.age : ''}</span><br /><br />
                <h3>Gender</h3>
                <span className='errors'>{errors.gender && touched.gender ? errors.gender : ''}</span>
                <div className="form-inline">
                    <p><input
                        type="radio"
                        name="gender"
                        defaultValue="male"
                    /> Male</p>
                    <p><input
                        type="radio"
                        name="gender"
                        defaultValue="female"
                    /> Female</p>
                </div>
                <h3>Country</h3>
                <span className='error'>{errors.country && touched.country ? errors.country : ''}</span>
                <select
                    id='Country'
                    name='Country'
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="0">Select</option>
                    <option value="au">Australia</option>
                    <option value="in">India</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                </select><br /><br />
                <h3>Hobbies</h3>
                <span className='error'>{errors.hobbies && touched.hobbies ? errors.hobbies : ''}</span>
                <div>
                    <span className="error" id="hobbyErr" />
                    <div className="form-inline">
                        <p><input type="checkbox" name="hobbies" defaultValue="sports" /> Sports</p>
                        <p><input type="checkbox" name="hobbies" defaultValue="movies" /> Movies</p>
                        <p><input type="checkbox" name="hobbies" defaultValue="music" /> Music</p>
                    </div>
                </div>

                <textarea
                    name="address"
                    rows={5}
                    placeholder="Your Address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
               0 <span className='error'>{errors.address && touched.address ? errors.address : ''}</span>



                <p><input
                    type="checkbox"
                    name="tc"
                    id="tc"
                    defaultValue="tc"
                    value={values.tc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /><a href="#">Terms & Condition</a></p>
                 <span className='error'>{errors.tc && touched.tc ? errors.tc : ''}</span>

                <input type='submit' />

            </form>
        </div >
    );
}

export default Fromvalidetion;