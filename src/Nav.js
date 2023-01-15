import React, {useState, useEffect} from 'react';
import "./Nav.css";
import image from "./images/Athithyen.png";
import { Link } from 'react-scroll';

function Nav() {
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 50){
          setShow(true);
        } else {
          setShow(false);
        }

      };

      useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
      }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="nav" spy={true} smooth={true}>
        <div className='nav__images'>
            <img className='nav__image' src={image}/>
        </div>
      </Link>

        <div className='nav__buttons'>
          <Link to="about" spy={true} smooth={true}>
            <div className='nav__button'>
                <h5 className='about'>About</h5>
            </div>
          </Link>
          <Link to='projects' spy={true} smooth={true}>
            <div className='nav__button'>
                <h5 className='projects'>Projects</h5>
            </div>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <div className='nav__button'>
                <h5  className='contact'>Contact</h5>
            </div>
          </Link>




        </div>
    </div>

  )
}

export default Nav
