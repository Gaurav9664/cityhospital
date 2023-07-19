import React from 'react';
import Header from '../user/component/Header';
import Footer from '../user/component/Footer';
import Home from '../user/container/Home';
import Departments from '../user/container/Departments';
import Doctors from '../user/container/Doctors';
import About from '../user/container/About';
import Contact from '../user/container/Contact';
import Doctor from '../user/container/Doctor';
import VisitingDoctor from '../user/container/VisitingDoctor';
import Appointment from '../user/container/Appointment';
import NotFound from '../user/container/NotFound'
import Auth from '../user/container/Auth'
import Fromvalidetion from '../test/Fromvalidetion';
import Auth1 from '../user/container/Auth1';
import { Route, Routes } from 'react-router-dom';
import MedicineUser from '../user/container/medicinen/MedicineUser';
import PrivetRouter from './PrivetRouter';
import { Provider } from 'react-redux';

function User(props) {
    return (
        <div>
            {/* <Provider> */}
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/departments' element={<Departments />} />
                    <Route path='/doctors' element={<Doctors />} />
                    <Route path='/doctors/:id' element={<Doctor />} />
                    <Route path='/doctors/Visiting_Doctor' element={<VisitingDoctor />} />

                    <Route path='/doctors'>
                        <Route path='/doctors/:id' element={<Doctor />} />
                        <Route path='/doctors/Visiting_Doctor' element={<VisitingDoctor />} />
                    </Route>


                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/appointment' element={<Appointment />} />
                    <Route path='*' element={<NotFound />} />
                    {/* <Route path='/auth' element={<Auth />} /> */}
                    <Route path='/auth' element={<Auth1 />} />
                    <Route path='/Fromvalidetion' element={<Fromvalidetion />} />

                    <Route element={<PrivetRouter />}>
                        <Route path='/MedicineUser' element={<MedicineUser />} />
                    </Route>
                </Routes>
                <Footer />
            {/* </Provider> */}
        </div>
    );
}

export default User;