import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ny5pmkm', 'template_9w2p76j', form.current, {
            publicKey: 'JUeUwURXypYJNee6V',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    }

  return (
    <div className="Join" id="Join-us">
        <div className="left-j">
            <hr />
            <div className='text-1'>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div className='text-2'>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US</span>
            </div>
        </div>
        <div className="right-j">
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name='from_name' placeholder='Enter your email address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
        </div>
    </div>
  )
}

export default Join;