import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Row, Col, Form, Button, message, Spin, Alert, Divider} from "antd";
import "../../styles/Contact/Contact.css"
import { FiSend } from 'react-icons/fi';

import contact from "../../assets/images/contact.png"
const { TextArea } = Input;

const Contact = () => {
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
      name: "",
      email: "",
      message: "",
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
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <Row justify={'center'} >
        
        <Col md={12} className="contact-image">
            <img src={contact}  />
        </Col>
        <Col md={10} className="contact-form">
          <Row className="contact-title" justify={"center"} align={"middle"}>
            How can we help you?
          </Row>
          <Row className="contact-title" justify={'center'} align={'middle'}>
            <span>Please contact us online or by phone - 757-373-5050</span>
          </Row>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)} >
            <Row gutter={[10, 10]} justify={"center"}>
              <Col span={11}>
                <label>Name</label>
                <Controller
                  name="name"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Name" />
                  )}
                />

                <p className="error-msg">{errors.name?.message}</p>
              </Col>
              <Col span={11}>
                <label>Email</label>
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
                    <Input {...field} placeholder="Email" />
                  )}
                />
                <p className="error-msg">{errors.email?.message}</p>
              </Col>
              <Col span={22}>
                <label>Message</label>
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
                        placeholder="Your Message"
                        style={{ height: 120, resize: 'none' }}
                        />
                  )}
                />
                <p className="error-msg">{errors.message?.message}</p>
              </Col>
            </Row>
            <Row justify={"end"} align={"middle"}>

              <Col pull={1}>
                <button type="submit" className="contact-button">
                  <FiSend size={13}/> Send
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
