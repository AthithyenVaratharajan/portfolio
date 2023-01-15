import React from 'react';
import "./Body.css";

const Body = () => {
  return (
    <div className='body' id="about" style={{height: 500}}>
        <h1>Athithyen Varatharajan</h1>
          I am currently an Engineering Student based in Toronto, ON. Starting out my career as a software developer and front-end web developer.
      <div className='languages'>
      <div className='language1'>
        <img alt='python' src='https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg'/>
      </div>
      <div className='language2'>
        <img alt="word" src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'/>
      </div>
      <div className='language3'>
        <img alt="word" src='https://upload.wikimedia.org/wikipedia/commons/c/c5/Html5_dise%C3%B1o_web.png'/>
      </div>
      <div className='language4'>
        <img alt="word" src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'/>
      </div>
      <div className='language5'>
        <img alt="word" src='https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png'/>
      </div>
      </div>

    </div>
  )
}

export default Body
