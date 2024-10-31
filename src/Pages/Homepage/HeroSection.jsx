import React from "react";
import { Row, Col, Button } from "antd";
import "../../styles/Homepage/Hero.css";
// import hero from "../../assets/PDS-ai.png";
import hero from "../../assets/images/Webpage 2.png";
import check from "../../assets/check.png";
// import hero from "../../assets/images/hero.png";
import { CheckOutlined } from '@ant-design/icons';
import { FaCheck } from 'react-icons/fa';
import { BiCalendarCheck } from 'react-icons/bi';
import { Link } from "react-router-dom";

const HeroSection = () => {

  return (
    <Row className="hero--section"
    >
      <Col md={14} lg={14} sm={24} xs={24} className="hero-text">
        <Row>
          <Col md={24} style={{width: "100%", display: "flex", flexDirection: "column"}} className="upper-text">
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
                <img src={check} alt="Check Icon" className="check-image" />
                <span>
                  Guaranteed Quality: Proprietary technology.
                </span>
              </li>
              <li>
                <img src={check} alt="Check Icon" className="check-image" />
                <span>
                  Team: NCQA Experts
                </span>
              </li>
              <li>
                <img src={check} alt="Check Icon" className="check-image" />
                <span>
                  Fast: turnaround times that exceed industry standards.
                </span>
              </li>
              <li>
                <img src={check} alt="Check Icon" className="check-image" />
                <span>Affordable: only pay for completed files.</span>
              </li>
              <li>
                <img src={check} alt="Check Icon" className="check-image" />
                <span>
                  Services: Credentialing, Recredentialing, Monitoring, Audits, Consulting
                </span>
              </li>
            </ul>
          </Col>
          <Col md={24} lg={24} className="hero-image-parent">
            <Link to={'/bookdemo'}>
              <Button type="primary" style={{
                background: "var(--main-theme)",
                color: "white",
                border: "None",
                padding: "2rem"
              }}><BiCalendarCheck size={20}/>Book a Demo</Button>
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
