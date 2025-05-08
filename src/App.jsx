import React from 'react'
import Header from './components/Header'
import About from './components/About'
//import Projects from './components/Projects'   <Projects/>
import Services from './components/Services'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import ProjectGallery from './components/ProjectGallery';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <ProjectGallery />
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
