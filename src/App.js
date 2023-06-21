import Header from './component/Header';
import Footer from './component/Footer';
import Home from './container/Home';
import Departments from './container/Departments';
import Doctors from './container/Doctors';
import About from './container/About';
import Contact from './container/Contact';
import { Routes, Route } from 'react-router-dom'
import Doctor from './container/Doctor';
import VisitingDoctor from './container/VisitingDoctor';
import Appointment from './container/Appointment';
import NotFound from './container/NotFound';
import Auth from './container/Auth';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/doctors' element={<Doctors />} />
        {/* <Route path='/doctors/:id' element={<Doctor />} />
      <Route path='/doctors/Visiting_Doctor' element={<VisitingDoctor />} /> */}

        <Route path='/doctors'>
          <Route path='/doctors/:id' element={<Doctor />} />
          <Route path='/doctors/Visiting_Doctor' element={<VisitingDoctor />} />  
        </Route>


        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/auth' element={<Auth />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
