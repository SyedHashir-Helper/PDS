import React from 'react';
import { Row, Col } from 'antd';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../styles/Components/Footer.css" // Import your CSS file for additional styles
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <Row gutter={[0, 16]} justify="space-between">
                {/* Provider Data Solution Column */}
                <Col span={8} className="footer-column">
                    <h2>Provider Data Solution</h2>
                    <p>Your trusted partner in medical credentialing</p>
                </Col>
                
                {/* Our Clients Column */}
                <Col span={8} className="footer-column">
                    <ul>
                        <li><Link  style={{color: "white"}} to={"/"}>Why Hire PDS?</Link></li>
                        <li><Link  style={{color: "white"}}  to={"/whoweare"}>Who we are?</Link></li>
                        <li><Link  style={{color: "white"}}  to={"/clients"}>Clients we served</Link></li>
                        <li><Link  style={{color: "white"}}  to={"/contactus"}>Contact Us</Link></li>
                    </ul>
                </Col>
                
                {/* Socials Column */}
                <Col span={8} className="footer-column">
                    <h2>Follow Us</h2>
                    <ul className="socials">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin /> LinkedIn
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
