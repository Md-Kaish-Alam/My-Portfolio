import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://www.linkedin.com/in/md-kaish-alam-01399420b/'>
                    <FaLinkedin />
                </a>
            </div>
            <div>
                <a href='https://twitter.com/alamkaishg1511'>
                    <BsTwitter  />
                </a>
            </div>
            <div>
                <a href='https://github.com/Md-Kaish-Alam'>
                    <FaGithub  />
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/kaishalam_1511/'>
                    <BsInstagram  />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia