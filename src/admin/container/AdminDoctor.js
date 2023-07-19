import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik } from 'formik';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { getDoctors } from '../../redux/action/adminDoctors.action';


// export default function Doctordrower() {
//     const [open, setOpen] = React.useState(false);
//     const dipacht = useDispatch()

//     React.useEffect (() => {}, [])



//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };


//     let userSchema = object({
//         name: yup.string().required('please enter name'),
//         description: yup.string().required('plase enetr date'),
//         degree: yup.string().required('please enter nymber '),
//         address: yup.string().required('please enter address'),
//     });


//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             description: '',
//             email: '',
//             degree: '',
//             address: '',
//         },
//         validationSchema: userSchema,
//         onSubmit: values => {
//             // alert(JSON.stringify(values, null, 2));
//         },
//     });

//     const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik

//     console.log(errors);


//     return (
//         <div>
//             <Button variant="outlined" onClick={handleClickOpen}>
//                 Doctor Details
//             </Button>
//             <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>Doctor details</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         To subscribe to this website, please enter your email address here. We
//                         will send updates occasionally.
//                     </DialogContentText>
//                     <Formik values={formik}>
//                         <Form onSubmit={handleSubmit}>
//                             <TextField
//                                 margin="dense"
//                                 id="name"
//                                 name='name'
//                                 label="Doctor name"
//                                 type="text"
//                                 fullWidth
//                                 variant="standard"
//                                 onChange={handleChange}
//                                 value={values.name}
//                                 onBlur={handleBlur}
//                             />
//                             <span className='error'>{errors.name && touched.name ? errors.name : ''}</span>

//                             <TextField
//                                 margin="dense"
//                                 id="degree "
//                                 name='degree'
//                                 label="Degree"
//                                 type="text"
//                                 fullWidth
//                                 variant="standard"
//                                 onChange={handleChange}
//                                 value={values.degree}
//                                 onBlur={handleBlur}
//                             />
//                             <span className='error'>{errors.degree && touched.degree ? errors.degree : ''}</span>

//                             <TextField
//                                 margin="dense"
//                                 id="description "
//                                 name='description'
//                                 label="Description"
//                                 type="text"
//                                 fullWidth
//                                 variant="standard"
//                                 onChange={handleChange}
//                                 value={values.description}
//                                 onBlur={handleBlur}
//                             />
//                             <span className='error'>{errors.description && touched.description ? errors.description : ''}</span>

//                             <TextField
//                                 margin="dense"
//                                 id="address "
//                                 name='address'
//                                 label="Doctor address"
//                                 fullWidth
//                                 variant="standard"
//                                 onChange={handleChange}
//                                 value={values.address}
//                                 onBlur={handleBlur}
//                             />
//                             <span className='error'>{errors.address && touched.address ? errors.address : ''}</span>

//                             <DialogActions>
//                                 <Button onClick={handleClose}>Cancel</Button>
//                                 <Button type='submit'>confirm</Button>
//                             </DialogActions>
//                         </Form>
//                     </Formik>
//                 </DialogContent>

//             </Dialog>
//         </div>
//     );
// }


function AdminDoctor(props) {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getDoctors())
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default AdminDoctor;