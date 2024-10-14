import React from 'react'
import { Row, Col, Button } from 'antd'
import "../styles/Components/Navbar.css"
import { BiCalendarCheck } from 'react-icons/bi';
import { FaTicketAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Row className='navbar' align={'middle'} justify={'space-around'}>
        <Col className='nav-logo' md={6} lg={6}>
            <h2>
                Provider Data Solutions
            </h2>
        </Col>
        <Col className='nav-items' md={11} lg={11}>
            <ul>
                <li><Link to={"/"}>Why Hire PDS?</Link></li>
                <li><Link to={"/whoweare"}>Who we are?</Link></li>
                <li><Link to={"/clients"}>Clients we served</Link></li>
                <li><Link to={"/contactus"}>Contact Us</Link></li>
            </ul>
        </Col>
        <Col className='nav-button' md={6} lg={6} >
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
