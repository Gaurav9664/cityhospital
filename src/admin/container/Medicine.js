import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup'
import { Form, Formik, useFormik } from 'formik';


function Medicine(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    var d = new Date()
    let nd = new Date(d.setDate(d.getDate() - 1))

    let userSchema = yup.object().shape({
        medicineName: yup.string().required('Please Enter Madicine Name'),
        expiry: yup.date().min(nd, "Enter Valid Date").required("Please enter Date"),
        price: yup.string().required('Plase Enter Price'),
        description: yup.string().required('Plase Enter description')
    })

    const handleAdd = (data) => {
        handleClose()
        let localdata = JSON.parse(localStorage.getItem('medicine'))

        let rnd = Math.floor(Math.rendom() * 1000)

        let newData = {id: rnd, ...data};


        if (localdata === null) {
            localStorage.setItem("medicine", JSON.stringify([newData]))
        }else {
            localdata.push(newData)
            localStorage.setItem("medicine", JSON.stringify(localdata))
        }
    }

    const formik = useFormik({
        initialValues: {
            medicineName: '',
            expiry: '',
            price: '',
            description: ''
        },

        validationSchema: userSchema,
        onSubmit: (values, action) => {
            handleAdd(values)
            action.resetForm();
        },
    })


    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik
    console.log(errors);

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> Add Medicine</DialogTitle>
                <DialogContent>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <TextField
                                margin="dense"
                                id="medicineName"
                                label="Medicine Name"
                                type="text"
                                name='medicineName'
                                fullWidth
                                variant="filled"
                                value={values.medicineName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <span className='error'>{errors.medicineName && touched.medicineName ? errors.medicineName : ''}</span>


                            <TextField
                                margin="dense"
                                id="expiry"
                                label="Medicine Expiry Date"
                                type="date"
                                name='expiry'
                                fullWidth
                                variant="filled"
                                value={values.expiry}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='error'>{errors.expiry && touched.expiry ? errors.expiry : ''}</span>


                            <TextField
                                margin="dense"
                                id="price"
                                label="price"
                                type="number"
                                name='price'
                                fullWidth
                                variant="filled"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='error'>{errors.price && touched.price ? errors.price : ''}</span>


                            <TextField
                                margin="dense"
                                id="description"
                                label="description"
                                type="text"
                                name='description'
                                fullWidth
                                multiline
                                rows={4}
                                variant="filled"

                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='error'>{errors.description && touched.description ? errors.description : ''}</span>

                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">Add</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Medicine;