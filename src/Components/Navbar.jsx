import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Drawer, Grid } from 'antd'
import "../styles/Components/Navbar.css"
import { BiCalendarCheck, BiMenu } from 'react-icons/bi'
import { FaTicketAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from "../assets/Pds-logo.png"
import logo2 from "../assets/Final logo 6.png"

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { md } = Grid.useBreakpoint(); // Check screen size

  // Toggle drawer visibility based on screen size
  useEffect(() => {
    if (md) {
      setVisible(false); // Hide drawer on large devices
    }
  }, [md]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Row className='navbar' align={'middle'} justify={'space-around'}>
      <Col className='nav-logo' md={20} lg={9} sm={18} xs={18}>
        <span>
          <img src={logo2} style={{ height: "calc(110%)", objectFit: "contain" }} alt="PDS Logo" />
        </span>
        <h2 style={{ display: "inline" }}>Provider Data Solutions</h2>
      </Col>

      {/* Nav Links - Visible on large devices */}
      <Col className='nav-items' md={2} lg={11} sm={0} xs={0}>
        <ul>
          <li><Link to={"/"}>Why Hire PDS?</Link></li>
          <li><Link to={"/whoweare"}>Who we are?</Link></li>
          <li><Link to={"/clients"}>Clients we served</Link></li>
          <li><Link to={"/contactus"}>Contact Us</Link></li>
        </ul>
      </Col>

      {/* Book a Demo Button - Visible on large devices */}
      <Col className='nav-button' md={0} lg={4} sm={0} xs={0}>
        <Link to={'/bookdemo'}>
          <Button>
            Book a demo
            <BiCalendarCheck size={20} />
          </Button>
        </Link>
      </Col>

      {/* Drawer Toggle Button - Visible on small devices */}
      <Col md={4} lg={0} xs={4} sm={4}>
        <Button type="text" onClick={showDrawer} icon={<BiMenu size={24} color='white' />} />
      </Col>

      {/* Drawer for small devices */}
      <Drawer
        title="Provider Data Solutions"
        placement="right"
        onClose={onClose}
        open={visible}
        width={300}
        className="drawer-custom"
      >
        <ul className="drawer-links">
          <li><Link to={"/"} onClick={onClose}>Why Hire PDS?</Link></li>
          <li><Link to={"/whoweare"} onClick={onClose}>Who we are?</Link></li>
          <li><Link to={"/clients"} onClick={onClose}>Clients we served</Link></li>
          <li><Link to={"/contactus"} onClick={onClose}>Contact Us</Link></li>
        </ul>
        <Link to={'/bookdemo'} onClick={onClose}>
          <Button block className="drawer-button">
            Book a demo
            <BiCalendarCheck size={20} />
          </Button>
        </Link>
      </Drawer>
    </Row>
  )
}

export default Navbar
