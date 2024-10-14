import React from 'react'
import {Row, Col} from 'antd'
import Navbar from '../../Components/Navbar'
import Contact from './Contact'

const ContactUs = () => {
  return (
    <section>
        <Navbar/>
        <Row>
                <Col span={24}>
                    <h1 className="section-title" style={{ textAlign: "center" }}>
                        Contact Us
                    </h1>
                </Col>
            </Row>
        <Contact/>
    </section>
  )
}

export default ContactUs
