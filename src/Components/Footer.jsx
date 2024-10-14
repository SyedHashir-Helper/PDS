import React from 'react';
import { Row, Col } from 'antd';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../styles/Components/Footer.css" // Import your CSS file for additional styles

const Footer = () => {
    return (
        <footer className="footer">
            <Row gutter={[16, 16]} justify="space-between">
                {/* Provider Data Solution Column */}
                <Col span={8} className="footer-column">
                    <h2>Provider Data Solution</h2>
                    <p>Your trusted partner in healthcare data management.</p>
                </Col>
                
                {/* Our Clients Column */}
                <Col span={8} className="footer-column">
                    <h2>Our Clients</h2>
                    <ul>
                        <li>Client A</li>
                        <li>Client B</li>
                        <li>Client C</li>
                        <li>Client D</li>
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
