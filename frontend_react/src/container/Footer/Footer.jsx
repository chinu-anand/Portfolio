import React, { useState } from 'react'
import { images } from '../../constants'

import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

import { AppWrap, MotionWrap } from '../../Wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Contact Me @</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:chinuanand81@gmail.com" className='p-text'>chinuanand81@gmail.com</a>
        </div>
        {/* <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91" className='p-text'>+91</a>
        </div> */}
      </div>
      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} required />
          </div>
          <div className='app-flex'>
            <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} required />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch.</h3>
        </div>
      }

      <br />

      <h4>Don't forget to checkout my profiles @</h4>

      <div className='app__flex profile__links'>
        <a href="https://leetcode.com/chinuanand/" target="_blank" rel="noreferrer">
          <div className='leetcode'>
            <SiLeetcode />
            <p className='p-text'>LeetCode</p>
          </div>
        </a>

        <a href="https://twitter.com/anand_chinu" target="_blank" rel="noreferrer">
          <div className='twitter'>
            <BsTwitter />
            <p className='p-text'>Twitter</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/chinu-anand/" target="_blank" rel="noreferrer">
          <div className='linkedin'>
            <BsLinkedin />
            <p className='p-text'>LinkedIn</p>
          </div>
        </a>
      </div>
      <br />
      Made with ❤️ by Chinu Anand.
      <br />
      <p className='p-text copyright-txt'>CopyrightⒸ 2022</p>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'footer',
  'app__primarybg'
)
