import React from 'react';
import "./PortfolioPage.css";
import Nav from './Nav';
import Body from './Body';
import Projects from './Projects';
import Contact from './Contact';



function PortfolioPage() {
  return (
    <div>

        <Nav />
      <div id="top" className='profile'>

        <Body />

        <Projects />

        <Contact />

      </div>

    </div>
  )
}

export default PortfolioPage
