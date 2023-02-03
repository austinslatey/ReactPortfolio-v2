import React from "react"
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import { BiMailSend } from 'react-icons/bi';

import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/austin-slater-1141b8225/" className="icon">
                <BsLinkedin icon={BsLinkedin}/>
            </a>
            <a href="https://github.com/austinslatey" className="icon">
                <GoMarkGithub icon={GoMarkGithub}/>
            </a>
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCDBvwNKKDwlqFXcsNvSVZRPjGfjvHSKhbHGBsgbzJBzJcQgWqngpBSZXZPDNBMtRGDTPg" className="icon">
                <BiMailSend icon={BiMailSend}/>
            </a>
        </div>
    )
}
