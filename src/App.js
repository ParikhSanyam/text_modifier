import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Otherprojects from './components/Otherprojects/Otherprojects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header title="Textik"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/otherprojects" element={<Otherprojects />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
