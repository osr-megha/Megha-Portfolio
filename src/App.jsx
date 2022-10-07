import React, { useState } from 'react';
import './App.scss';
import Appbar from './components/appbar/Appbar';
import Intro from './components/intro/Intro'
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Menu from './components/menu/Menu';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <React.Fragment>
    <div className="App">
     {/**1st part - top bar which will be appearing always
        2nd part - sections - containing - Intro - portfolio - works - testimonials - contact
    */}
     <Appbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className='sections'>
    <Intro />
    
    <Projects/>
    <Contact />
    
    </div>

    

    </div>
    </React.Fragment>
  );
}

export default App;
