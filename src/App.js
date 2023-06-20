import Header from './component/Header';
import Footer from './component/Footer';
import Home from './container/Home';
import Departments from './container/Departments';
import Doctors from './container/Doctors';
import About from './container/About';
import Contact from './container/Contact';
import {Routes, Route} from 'react-router-dom'
import Doctor from './container/Doctor';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/departments' element={<Departments />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<Doctor />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
