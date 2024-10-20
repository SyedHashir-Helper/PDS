import React from 'react'
import { Row, Col, Button } from 'antd'
import "../styles/Components/Navbar.css"
import { BiCalendarCheck } from 'react-icons/bi';
import { FaTicketAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import logo from "../assets/Pds-logo.png"
// import logo from "../assets/header-logo.png"

const Navbar = () => {
  return (
    <Row className='navbar' align={'middle'} justify={'space-around'}>
        <Col className='nav-logo' md={20} lg={9} sm={18} xs={18}>
            <span style={{}}>
                <img src={logo} style={{
                    height: "100%",
                    objectFit: "contain"
                }} />
            </span>
            <h2 style={{display: "inline"}}>
                Provider Data Solutions
            </h2>
        </Col>
        <Col className='nav-items' md={0} lg={11} sm={0} xs={0}>
            <ul>
                <li><Link to={"/"}>Why Hire PDS?</Link></li>
                <li><Link to={"/whoweare"}>Who we are?</Link></li>
                <li><Link to={"/clients"}>Clients we served</Link></li>
                <li><Link to={"/contactus"}>Contact Us</Link></li>
            </ul>
        </Col>
        <Col className='nav-button' md={4} lg={4} sm={6} xs={6}>
            <Link to={'/bookdemo'}>
                <Button>
                        Book a demo
                        <BiCalendarCheck size={20} />
                </Button>
            </Link>
        </Col>
    </Row>
  )
}

export default Navbar
