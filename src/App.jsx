import { Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import TestimonialPage from './pages/TestimonialPage'
import KelasPage from './pages/KelasPage';
import FaqPage from './pages/FaqPage';
import SyaratKetenPage from './pages/SyaratKetenPage';

function App() {

  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/testimonial' Component={TestimonialPage} />
        <Route path='/kelas' Component={KelasPage} />
        <Route path='/faq' Component={FaqPage} />
        <Route path='/syaratketen' Component={SyaratKetenPage} />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
