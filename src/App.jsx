import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Tutorprofile from './components/Tutorprofile';
import Gurdianprofile from './components/Gurdianprofile';
import Tutorfiltering from './components/Tutorfiltering';
import Postfiltering from './components/Postfiltering';
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/gurdianprofile" element={<Gurdianprofile/>}/>
        <Route path="/tutorprofile" element={<Tutorprofile/>}/>
        <Route path="/tutorfiltering" element={<Tutorfiltering/>}/>
        <Route path="/postfiltering" element={<Postfiltering/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;