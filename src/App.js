import './App.css';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Homepage />}>
          <Route index element={<Intro />} />
          <Route path='/About' element={<About />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Contact' element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
