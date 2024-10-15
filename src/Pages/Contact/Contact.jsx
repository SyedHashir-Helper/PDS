import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from '@emailjs/browser'
import axios from 'axios'


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
import "../../styles/Contact/Contact.css";
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

import contact from "../../assets/images/contact.png";
const { TextArea } = Input;

const Contact = () => {
  const API_KEY = "";
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
      message: "",
    },
  });

  const iconStyle = {
    border: "1px solid #ccc", // Border color
    borderRadius: "5px", // Rounded corners
    padding: "8px", // Padding around the icon
    display: "flex", // Flexbox for centering
    marginRight: "8px", // Space between the icon and input
  };

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
  const onSubmit = async (dataT) => {
   
    console.log(dataT)
    try {
      const formData = new FormData();
      formData.append('from', 'Syed Hashir 2021cs1@student.uet.edu.pk');
      formData.append('to', dataT.email); // The recipient
      formData.append('subject', "Mailing");
      formData.append('text', "<h1>hi</h1>");
      fetch('https://api.mailgun.net/v3/sandboxa06c5a5cc75043e18ee5c7d44b40a7f7.mailgun.org/messages', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa('API_KEY'), // Basic auth with API key
        },
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            alert('Email sent successfully!');
          } else {
            alert('Failed to send email.');
          }
          console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }
    catch (err) {
      error("Didn't send email")
    }
  }

  return (
    <section>
      <Row justify={"center"}>
        {contextHolder}
        <Col md={10} className="contact-form">
          <Row className="contact-title" justify={"center"} align={"middle"}>
            How can we help you?
          </Row>
          <Row className="contact-title" justify={"center"} align={"middle"}>
            <span>Please contact us online or by phone - 757-373-5050</span>
          </Row>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={[10, 10]} justify={"center"}>
              <Col span={11}>
                <div style={{ display: "flex" }}>
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
                      <Input {...field} placeholder="First Name*" />
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
                      <Input {...field} placeholder="Last Name*" />
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
                      <Input {...field} placeholder="Job Title*" />
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
                      <Input {...field} placeholder="Office Phone*" />
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
                      <Input {...field} placeholder="Mobile Phone*" />
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
                      <Input {...field} placeholder="Email*" />
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
                      <Input {...field} placeholder="Company*" />
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
                      <Input {...field} placeholder="Country" />
                    )}
                  />
                </div>
                <p className="error-msg">{errors.country?.message}</p>
              </Col>

              <Col span={22}>
                <div style={{ display: "flex", alignItems: "start" }}>
                  <div style={iconStyle}>
                    <FaComments />
                  </div>
                  <Controller
                    name="message"
                    rules={{
                      required: "It is mandatory",
                      minLength: {
                        value: 4,
                        message: "Minimum length is 4 characters",
                      },
                    }}
                    control={control}
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        showCount
                        maxLength={100}
                        placeholder="Your Message*"
                        style={{ height: 120, resize: "none" }}
                      />
                    )}
                  />
                </div>
                <p className="error-msg">{errors.message?.message}</p>
              </Col>
            </Row>
            <Row justify={"end"} align={"middle"}>
              <Col pull={1}>
                <button type="submit" className="contact-button">
                  <FiSend size={13} /> Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
