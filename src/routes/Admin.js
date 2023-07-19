import React from 'react';
import Muidrawer from '../admin/component/Muidrawer';
import Medicine from '../admin/container/MedicineFlie/Medicine';
import Product from '../admin/container/Product';
import Adminppointment from '../admin/container/Adminppointment';
import { Route, Routes } from 'react-router-dom';
import AdminDoctorForm from '../admin/container/Doctor/AdminDoctorForm';
import { configureStore } from '../redux/store';
import { Provider } from 'react-redux';



function Admin(props) {
    let store = configureStore()
    return (
        <Provider store={store}>
            <Muidrawer>
                <Routes>
                    <Route path='/Medicine' element={<Medicine />} />
                    <Route path='/Product' element={<Product />} />
                    <Route path='/Doctor' element={<AdminDoctorForm />} />
                    <Route path='/Appointment' element={<Adminppointment />} />
                </Routes>
            </Muidrawer>
        </Provider>
    );
}

export default Admin;