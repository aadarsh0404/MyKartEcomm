import React from 'react'
import AppStore from '../../../images/appstore.png';
import PlayStore from '../../../images/playstore.png';
import "./Footer.css";

export default function Footer() {
    var date = new Date();
    return (
        <footer id="footer">
            <div id='download'>
                <p>Download our App for Andorid and IOS</p>
                <img src={PlayStore} alt="download"/>
                <img src={AppStore} alt="download"/>
            </div>
            <div id='copyright'>
                <h1>MyKart</h1>
                <p>Copyrights {date.getFullYear() }&copy; Aadarsh Shekhar </p>
            </div>
            <div id='followus'>
                <h4>Follow Us</h4>
                <a href='/'>Instagram</a>
                <a href='/'>Facebook</a>
                <a href='/'>Youtube</a>
            </div>
        </footer>
    )
}
