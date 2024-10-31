import React from "react";
import { Row, Col, Button } from "antd";
import team from "../../assets/images/team.png";
import { CheckOutlined } from "@ant-design/icons";
import { FaCheck } from "react-icons/fa";
import { BiCalendarCheck } from "react-icons/bi";

const Hero_Clients = () => {
  return (
    <Row
       className="hero--section"
    >
      <Col md={14} lg={14} className="hero-wwr-text">
        <Row>
          <Col  md={24} xs={24} sm={24}>
            <h1 className="wwr-main-text">
              Clients
              <span className="wwr-main-text-blue">we have served</span>
            </h1>
          </Col>
          <Col md={24}>
            <p className="wwr-second-text">
              We are a team of friends, coworkers and technology professionals
              who have a tremendous amount of credentialing expertise and
              experience, and we provide outstanding service to clients. Members
              of our team have worked together for decades in medical
              credentialing.
            </p>
          </Col>
        </Row>
      </Col>
      <Col md={9} lg={9} className="wwr-hero-img">
        <img src={team} />
      </Col>
    </Row>
  );
};

export default Hero_Clients;
