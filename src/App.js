import Header from './user/component/Header';
import Footer from './user/component/Footer';
import Home from './user/container/Home';
import Departments from './user/container/Departments';
import Doctors from './user/container/Doctors';
import About from './user/container/About';
import Contact from './user/container/Contact';
import Doctor from './user/container/Doctor';
import VisitingDoctor from './user/container/VisitingDoctor';
import Appointment from './user/container/Appointment';
import NotFound from './user/container/NotFound'
import Auth from './user/container/Auth'
import Fromvalidetion from './test/Fromvalidetion';
import Auth1 from './user/container/Auth1';
import Muidrawer from './admin/component/Muidrawer';
import Medicine from './admin/container/MedicineFlie/Medicine';
import Product from './admin/container/Product';
import AdminDoctor from './admin/container/AdminDoctor';
import Adminppointment from './admin/container/Adminppointment';
import User from './routes/User';
import Admin from './routes/Admin';
import { Routes, Route } from 'react-router-dom'
import PrivetRouter from './routes/PrivetRouter';

function App() {
  return (
    // <>
    //   <Muidrawer>
    //     <Routes>
    //       <Route path='/Medicine' element={<Medicine />} />
    //       <Route path='/Product' element={<Product />} />
    //       <Route path='/Doctor' element={<AdminDoctor />} />
    //       <Route path='/Appointment' element={<Adminppointment />} />
    //     </Routes>
    //   </Muidrawer>
    // </>
    // <>
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/departments' element={<Departments />} />
    //     <Route path='/doctors' element={<Doctors />} />
    //     <Route path='/doctors/:id' element={<Doctor />} />
    //     <Route path='/doctors/Visiting_Doctor' element={<VisitingDoctor />} />

    //     <Route path='/doctors'>
    //       <Route path='/doctors/:id' element={<Doctor />} />
    //       <Route path='/doctors/Visiting_Doctor' element={<VisitingDoctor />} />
    //     </Route>


    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/appointment' element={<Appointment />} />
    //     <Route path='*' element={<NotFound />} />
    //     {/* <Route path='/auth' element={<Auth />} /> */}
    //     <Route path='/auth' element={<Auth1 />} />
    //     <Route path='/Fromvalidetion' element={<Fromvalidetion />} />
    //   </Routes>
    //   <Footer />
    // </>

    <Routes>
      <Route path='/*' element={<User />} />
      {/* <Route element={<PrivetRouter />}> */}
      <Route path='/admin/*' element={<Admin />} />
      {/* </Route> */}
    </Routes>

  );
}

export default App;
