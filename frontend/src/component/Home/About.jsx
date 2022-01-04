import React, { Fragment } from 'react';
import logo from '../../images/logo.png';
import './About.css';

const About = () => {
    return (
        <Fragment>
            <div className='LogoContainer'>
                <img src={logo} alt='logo' />
            </div>

            <div className='BodyContainer'>
                <p>MyKart is a demo online ECommerce Website where user can shop for multiple products that are available in the database.</p>
                <p>The website is built on MERN stack (MongoDB, Express.js, React, Node.js).</p>
            </div>
        </Fragment>
    )
}

export default About
