import React from "react";
import { Row, Col, Button } from "antd";
import "../../styles/Homepage/Hero.css";
// import hero from "../../assets/PDS-ai.png";
import hero from "../../assets/1234.png";
// import hero from "../../assets/images/hero.png";
import { CheckOutlined } from '@ant-design/icons';
import { FaCheck } from 'react-icons/fa';
import { BiCalendarCheck } from 'react-icons/bi';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Row
      style={{
        height: "70vh",
        background: "linear-gradient(135deg, #f5fbfe, #e3f2f9)",
        padding: "2rem",
        paddingLeft: "3rem"

      }}

    >
      <Col md={14} lg={14} sm={24} xs={24} className="hero-text">
        <Row>
          <Col md={24}>
            <h1 className="main-text">
              Your Prescription for
              <span className="main-text-blue">Worry-Free Credentialing</span>
            </h1>
          </Col>
          <Col md={24}>
            <p className="second-text">
              Provider Data Solutions technology and expert personnel guarantee
              credentialed files that are complete, accurate, and current.
            </p>
          </Col>
          <Col md={24} className="service-list">
            <ul>
              <li>
                <FaCheck className="check-icon" />
                <span>
                  Guaranteed Quality: proprietary technology and an amazing team
                  of experts lauded by NCQA.
                </span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>
                  Fast: turnaround times that exceed industry standards.
                </span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Affordable: only pay for completed files.</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>
                  Services: Credentialing, Recredentialing, Ongoing Monitoring,
                  Delegated Audits, and expert consulting.
                </span>
              </li>
            </ul>
          </Col>
          <Col md={24} lg={24}>
            <Link to={'/bookdemo'}>
              <Button className="hero-button" color="primary" size="large" style={{border: "1px solid var(--main-theme)",
              }}>
                <BiCalendarCheck size={25} />Book a Demo
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col md={10} lg={10} sm={24} xs={24} className="hero-img">
        <img src={hero} />
      </Col>
      
    </Row>
  );
};

export default HeroSection;
