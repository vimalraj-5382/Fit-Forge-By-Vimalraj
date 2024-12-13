import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo_ff.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';


const Header = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>

        <img src={logo} className='logo-name'/>
      
      {menuOpened === false && mobile === true ? (
        <div style={{backgroundColor: 'var(--appColor)', padding: '0.3rem', borderRadius: '5px',top: '2rem', right: '1rem'}}>
          <img src={Bars} 
            style={{width: '1.3rem', height: '1.2rem'}}
            onClick={()=>setMenuOpened(true)}
            />
        </div>
      ):(
        <ul className='header-menu'>
          <li>
            <Link 
            activeClass="active"
              to='home'
              onClick={()=>setMenuOpened(false)}
              spy='true'
              smooth='true'
            >Home</Link>
          </li>
          <li>
            <Link 
              to='programs'
              onClick={()=>setMenuOpened(false)}
              spy='true'
              smooth='true'  
            >Programs</Link>
          </li>
          <li onClick={()=>setMenuOpened(false)}>
            <Link 
              to='reasons'
              onClick={()=>setMenuOpened(false)}
              spy='true'
              smooth='true'
            >Why Us</Link>
          </li>
          <li onClick={()=>setMenuOpened(false)}>
            <Link 
              to='plans'
              onClick={()=>setMenuOpened(false)}
              spy='true'
              smooth='true'
            >Plans</Link>
          </li>
          <li onClick={()=>setMenuOpened(false)}>
            <Link 
              to='testimonials'
              onClick={()=>setMenuOpened(false)}
              spy='true'
              smooth='true'
            >Testimonials</Link>
          </li>
        </ul>
      )}
        
    </div>
  )
}

export default Header