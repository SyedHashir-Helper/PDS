import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BiCalendarCheck } from "react-icons/bi";
import {
  Input,
  Row,
  Col,
  Form,
  Button,
  message,
  Spin,
  Alert,
  Divider,
} from "antd";
import { FiSend } from "react-icons/fi";
import {
  FaUser,
  FaBriefcase,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaBuilding,
  FaGlobe,
  FaComments,
} from "react-icons/fa"; // Importing icons

const iconStyle = {
  border: "1px solid #ccc", // Border color
  borderRadius: "5px", // Rounded corners
  padding: "8px", // Padding around the icon
  display: "flex", // Flexbox for centering
  marginRight: "8px", // Space between the icon and input
};

const DemoForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      jobtitle: "",
      officephone: "",
      mobphone: "",
      email: "",
      company: "",
      country: "",
    },
  });

  const error = (errmsg) => {
    messageApi.open({
      type: "error",
      content: errmsg,
    });
  };

  const success = (successmsg) => {
    messageApi.open({
      type: "success",
      content: successmsg,
      duration: 2,
    });
  };
  const onSubmit = (data) => success("Booked Successfully");

  return (
    <Row justify={"center"}>
        {contextHolder}
      <Col md={16} className="contact-form">
        <Row className="contact-title" justify={"center"} align={"middle"}>
          And we will schdule your free demo
        </Row>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[10, 10]} justify={"center"}>
            <Col span={11}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={iconStyle}>
                  <FaUser />
                </div>
                <Controller
                  name="firstname"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="First Name*" style={{lineHeight: "3rem", fontSize: "1.5rem"}}/>
                  )}
                />
              </div>
              <p className="error-msg">{errors.firstname?.message}</p>
            </Col>

            <Col span={11}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={iconStyle}>
                  <FaUser />
                </div>
                <Controller
                  name="lastname"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Last Name*" style={{lineHeight: "3rem", fontSize: "1.5rem"}}/>
                  )}
                />
              </div>
              <p className="error-msg">{errors.lastname?.message}</p>
            </Col>

            <Col span={11}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={iconStyle}>
                  <FaBriefcase />
                </div>
                <Controller
                  name="jobtitle"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Job Title*" style={{lineHeight: "3rem", fontSize: "1.5rem"}}/>
                  )}
                />
              </div>
              <p className="error-msg">{errors.jobtitle?.message}</p>
            </Col>

            <Col span={11}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={iconStyle}>
                  <FaPhone />
                </div>
                <Controller
                  name="officephone"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Office Phone*" style={{lineHeight: "3rem", fontSize: "1.5rem"}}/>
                  )}
                />
              </div>
              <p className="error-msg">{errors.officephone?.message}</p>
            </Col>

            <Col span={11}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={iconStyle}>
                  <FaMobileAlt />
                </div>
                <Controller
                  name="mobilephone"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Mobile Phone*" style={{lineHeight: "3rem", fontSize: "1.5rem"}}/>
                  )}
                />
              </div>
              <p className="error-msg">{errors.mobilephone?.message}</p>
            </Col>

            <Col span={11}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={iconStyle}>
                  <FaEnvelope />
                </div>
                <Controller
                  name="email"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Email*" style={{lineHeight: "3rem", fontSize: "1.5rem"}}/>
                  )}
                />
              </div>
              <p className="error-msg">{errors.email?.message}</p>
            </Col>

            <Col span={11}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={iconStyle}>
                  <FaBuilding />
                </div>
                <Controller
                  name="company"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Company*" style={{lineHeight: "3rem", fontSize: "1.5rem"}}/>
                  )}
                />
              </div>
              <p className="error-msg">{errors.company?.message}</p>
            </Col>

            <Col span={11}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={iconStyle}>
                  <FaGlobe />
                </div>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} value={'USA'} disabled style={{lineHeight: "3rem", fontSize: "1.5rem"}}/>
                  )}
                />
              </div>
              <p className="error-msg">{errors.country?.message}</p>
            </Col>
          </Row>
          <Row justify={"end"} align={"middle"}>
            <Col pull={1}>
              <button type="submit" className="contact-button">
                <BiCalendarCheck size={20} /> Book a demo
              </button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default DemoForm;
