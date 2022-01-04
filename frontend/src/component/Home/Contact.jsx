import React, { Fragment } from 'react';
import logo from '../../images/logo.png';
import './About.css';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TagIcon from '@mui/icons-material/Tag';

const About = () => {
    return (
        <Fragment>
            <div className='LogoContainer'>
                <img src={logo} alt='logo' />
            </div>

            <div className='BodyContainer'>
                <p><PhoneIphoneIcon />  Reach Out via Phone <strong><em>+91-7909013413</em></strong></p>
                <p><LaptopIcon />  Write to me at  <strong><em><a href="mailto:aadarsh0404@gmail.com">aadarsh0404@gmail.com</a></em></strong></p>
                <p><TagIcon/>  Other Social Media Links</p>
                <p><GitHubIcon /> <a href='https://github.com/aadarsh0404'>Github Profile</a></p>
                <p><LinkedInIcon /> <a href='https://www.linkedin.com/in/aadarsh-shekhar-534a99185/'>LinkedIn Profile</a></p>
            </div>
        </Fragment>
    )
}

export default About
