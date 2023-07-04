import React from 'react';
import Muidrawer from '../admin/component/Muidrawer';
import Medicine from '../admin/container/Medicine/Medicine';
import Product from '../admin/container/Product';
import AdminDoctor from '../admin/container/AdminDoctor';
import Adminppointment from '../admin/container/Adminppointment';
import { Route, Routes } from 'react-router-dom';



function Admin(props) {
    return (
            <Muidrawer>
                <Routes>
                    <Route path='/Medicine' element={<Medicine />} />
                    <Route path='/Product' element={<Product />} />
                    <Route path='/Doctor' element={<AdminDoctor />} />
                    <Route path='/Appointment' element={<Adminppointment />} />
                </Routes>
            </Muidrawer>
    );
}

export default Admin;