
import {useRef } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
function App() { 
  const homeRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();
  const ref = useRef();

  return (
    <>  
       <Navbar refe ={{aboutRef,homeRef,projectRef,contactRef}}/>
       <div ref={homeRef}>
          <Hero />
       </div>
       <div ref={aboutRef}>
          <About />
       </div>
       <div ref={projectRef}>
           <Projects />
       </div>
       <div ref={contactRef}>
           <Contact />
       </div>
       <Footer />
      
       </>
       
  )
}

export default App;
