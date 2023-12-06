import React, { useState, useEffet } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {

    if(!name || !email || !message) {
      alert('Please enter the required fields.');
      return;
    }

    setLoading(true)
    
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <React.Fragment>
      <h2 className="head-text">Want to <span>Contact</span> with <span>me</span> ?</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:alamkaishg1511@gmail.com" className="p-text">
            alamkaishg1511@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 7061238198" className="p-text">
            +91 7061238198
          </a>
        </div>
      </div>

      {isFormSubmitted ? (
        <div className='app__footer-thanks'>
          <div className=''>
            <h3 className='head-text'>Kaish</h3>
          </div>
          <h3 className="head-text">Thank You for getting touch</h3>
        </div>
      ) : (
          <form className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </React.Fragment>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
)
