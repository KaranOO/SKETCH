import React from"react";
import "./Footer.scss";

const Footer = ( ) => {
    return(
        <div className="footer">
            {/* parent top container starts from here */}
            <div className="top">
                {/* first row of top footer */}
                <div className="item">
                    <h1>Categories</h1>
                    <span>Painting</span>
                    <span>Sketch</span>
                    <span>Comics</span>
                    <span>Animation</span>
                    <span>New Arrivals</span>
                </div>
                {/* 2nd row of top footer */}
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                {/* third row starts from here of top footer */}
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Hello, I am Karan Negi. I am CSE student in KIIT Colege of Engineering. Currently I am learning more and more about technology and skills and along with that I am on the mission to introduce The Bhartiye Kalakaar at International Level. You could be a part of it. Just join the club, show your art and talent. Let the Bharat and you be acknowledge by the world. 
                    </span>
                </div>
                {/* forth row of top footer starts from here */}
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Email: <a href="mailto:knegi4143@gmail.com" className="link">knegi4143@gmail.com</a>
                        <br />
                        Instagram: <a target="_blank" href="http://instagram.com/karan.negi22?" className="link">Click Here</a>
                        <br />
                        LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/knegi4143" className="link">Click Here</a>
                        <br />
                        GitHub: <a target="_blank" href="www.github.com/KaranOO" className="link">Click Here</a>
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">SKETCH</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="./img/india-flag-icon.png" alt="" width="50px" height="20px"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;