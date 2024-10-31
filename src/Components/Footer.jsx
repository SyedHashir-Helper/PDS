import React from 'react';
import { Row, Col, Divider,Button } from 'antd';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../styles/Components/Footer.css" // Import your CSS file for additional styles
import {Link} from 'react-router-dom'
import logo from "../assets/Final logo 6.png"
import { BiCalendarCheck } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer style={{marginTop: "4rem", background: "var(--main-bg-3)"}}>
        <Divider/>
            <Row gutter={
                [0,10]
            } justify="space-between" align={'middle'} className="footer">
                {/* Provider Data Solution Column */}
                <Col md={2} sm={4} xs={4} className='footer-logo'>
                    <img src={logo} style={{
                        height: "calc(110%)",
                        objectFit: "contain"
                    }} />
                </Col>
                <Col md={6} sm={18} xs={18} className="footer-column">
                    <p style={{fontSize: "2.5rem", margin: "0"}}>Provider Data Solution</p>
                    <p>Your trusted partner in medical credentialing</p>
                </Col>
                
                {/* Our Clients Column */}
                <Col style={{fontSize: "1.7rem"}} md={3} sm={24} xs={24}>
                    <Link className='hover-text'  style={{color: "white"}} to={"/"}>Why Hire PDS?</Link>
                </Col>
                <Col style={{fontSize: "1.7rem"}} md={3} sm={24} xs={24}><Link className='hover-text'  style={{color: "white"}}  to={"/whoweare"}>Who we are?</Link></Col>
                <Col style={{fontSize: "1.7rem"}} md={3} sm={24} xs={24}><Link className='hover-text'  style={{color: "white"}}  to={"/clients"}>Clients we served</Link></Col>
                <Col style={{fontSize: "1.7rem"}} md={3} sm={24} xs={24}><Link className='hover-text'  style={{color: "white"}}  to={"/contactus"}>Contact Us</Link></Col>
                <Col className='nav-button' md={3} sm={24} xs={24}>
                    <Link to={'/bookdemo'}>
                        <Button>
                                <BiCalendarCheck size={20} />
                                Book a demo
                        </Button>
                    </Link>
                </Col>
                
            </Row>
        <Divider style={{backgroundColor: "gray"}}/>
            <Row className="footer">
                <div className='footer-row' >
                    <p>@PDS.All rights reserved</p>
                    <p><Link href="/" target="_blank" style={{color: "white"}}>Privacy policy</Link></p>
                    <p ><Link href="/" target="_blank" style={{color: "white"}}>Terms & conditions</Link></p>
                </div>
            </Row>
        </footer>
    );
};

export default Footer;
