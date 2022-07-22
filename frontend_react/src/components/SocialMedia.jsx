import React from 'react'

import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

import './SocialMedia.scss'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://leetcode.com/chinuanand/" target="_blank" rel="noreferrer">
                <div className='leetcode'>
                    <SiLeetcode />
                </div>
            </a>

            <a href="https://twitter.com/anand_chinu" target="_blank" rel="noreferrer">
                <div className='twitter'>
                    <BsTwitter />
                </div>
            </a>

            <a href="https://www.linkedin.com/in/chinu-anand/" target="_blank" rel="noreferrer">
                <div className='linkedin'>
                    <BsLinkedin />
                </div>
            </a>

        </div>
    )
}

export default SocialMedia