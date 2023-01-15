import React from 'react';
import { ReactDOM } from 'react';
import "./Contact.css";

const Contact = () => {
    const MailTo = ({email, ...props}) => {
        return (
            <a rel="noreferrer" href={`mailto:${email}`}>
                {props.children}
            </a>
        )

    };
  return (

    <div className='contacts' id="contact" style={{height: 500}}>
        <h1>Contact</h1>
    <div className='logos'>
        <a rel="noreferrer"
        target="_blank"
         href='https://www.linkedin.com/in/athithyen-varatharajan-a10231260/'>
            <img  className='linkedin__logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg' alt='linkedIn'/>
        </a>
        <a rel="noreferrer"
        target="_blank"
         href='https://github.com/AthithyenVaratharajan'>
            <img className='github__logo' src='https://cdn.iconscout.com/icon/free/png-256/github-163-761603.png' alt='github'/>
        </a>
        <MailTo email="athithyensv@gmail.com">
            <img  alt="image" src="https://upload.wikimedia.org/wikipedia/commons/3/39/Google_Mail.svg" ></img>
        </MailTo>

    </div>
    <div className='info' style={{color: "white"}}>

        <h3>Email: </h3>
        <MailTo id="mail" email="athithyensv@gmail.com">
            <h3 style={{color: "white"}}>athithyensv@gmail.com</h3>
        </MailTo>
    </div>

    </div>
  )
}

export default Contact
