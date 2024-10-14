import React from 'react'
import {Row, Col} from 'antd'
import Navbar from '../../Components/Navbar'
import Contact from './Contact'
import Footer from '../../Components/Footer'

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
        <Footer/>
    </section>
  )
}

export default ContactUs
