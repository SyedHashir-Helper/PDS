import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BiCalendarCheck } from 'react-icons/bi';
import { Input, Row, Col, Form, Button, message, Spin, Alert, Divider} from "antd";
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
    const onSubmit = (data) => console.log(data);

  return (
    <Row justify={'center'} >

        <Col md={16} className="contact-form">
          <Row className="contact-title" justify={"center"} align={"middle"}>
            And we will schdule your free demo
          </Row>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)} >
            <Row gutter={[10, 10]} justify={"center"}>
              <Col span={11}>
                <label>First Name</label>
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
                    <Input {...field} placeholder="First Name" />
                  )}
                />

                <p className="error-msg">{errors.firstname?.message}</p>
              </Col>
              <Col span={11}>
                <label>Last Name</label>
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
                    <Input {...field} placeholder="Last Name" />
                  )}
                />
                <p className="error-msg">{errors.lastname?.message}</p>
              </Col>

              <Col span={11}>
                <label>Job Title</label>
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
                    <Input {...field} placeholder="Job Title" />
                  )}
                />

                <p className="error-msg">{errors.jobtitle?.message}</p>
              </Col>
              <Col span={11}>
                <label>Office Phone</label>
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
                    <Input {...field} placeholder="Office Phone" />
                  )}
                />
                <p className="error-msg">{errors.officephone?.message}</p>
              </Col>

              <Col span={11}>
                <label>Mobile Phone</label>
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
                    <Input {...field} placeholder="Mobile Phone" />
                  )}
                />

                <p className="error-msg">{errors.mobilephone?.message}</p>
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

              <Col span={11}>
                <label>Company</label>
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
                    <Input {...field} placeholder="Company" />
                  )}
                />
                <p className="error-msg">{errors.company?.message}</p>
              </Col>
              <Col span={11}>
                <label>Country</label>
                <Controller
                  name="country"
                  rules={{
                    required: "It is mandatory",
                    minLength: {
                      value: 4,
                      message: "Minimum length is 4 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Country" />
                  )}
                />
                <p className="error-msg">{errors.country?.message}</p>
              </Col>
            </Row>
            <Row justify={"end"} align={"middle"}>

              <Col pull={1}>
                <button type="submit" className="contact-button">
                  <BiCalendarCheck size={20}/> Book
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
  )
}

export default DemoForm
