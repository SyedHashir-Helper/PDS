import React from 'react'
import {Row,Col} from 'antd'
import demo from "../../assets/images/demo.png"
import { CheckOutlined } from '@ant-design/icons';
import { FaCheck } from 'react-icons/fa';
import check from "../../assets/check.png";
import { BiCalendarCheck } from 'react-icons/bi';

const Hero_Demo = () => {
  return (
    <Row
    className='hero--section'

  >
    <Col md={14} lg={14} className="hero-wwr-text">
      <Row>
        <Col md={24} xs={24} sm={24}>
          <h1 className="wwr-main-text">
            Request Your
            <span className="wwr-main-text-blue">Demo Today</span>
          </h1>
        </Col>
        <Col md={24}>
            <p className="wwr-second-text">
                With your demo, you get
            </p>
        </Col>
        
          <Col md={24} className="service-list">
            <ul>
              <li>
                <img src={check} alt="Check Icon" className="check-image" />
                <span>
                  Pre-loaded data or upload your own
                </span>
              </li>
              <li>
                <img src={check} alt="Check Icon" className="check-image" />
                <span>
                  Preconfigured process and reports
                </span>
              </li>
              <li>
                <img src={check} alt="Check Icon" className="check-image" />
                <span>Guided Content, how tos and best practices for medical credentiality</span>
              </li>
              <li>
                <img src={check} alt="Check Icon" className="check-image" />
                <span>
                  Online training and live onboarding seminars
                </span>
              </li>
            </ul>
          </Col>
      </Row>
    </Col>
    <Col md={9} lg={9} className="wwr-hero-img">
      <img src={demo} />
    </Col>
    
  </Row>
  )
}

export default Hero_Demo
