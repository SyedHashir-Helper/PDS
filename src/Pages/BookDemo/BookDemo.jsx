import React from 'react'
import Hero_Demo from './Hero_Demo'
import Navbar from '../../Components/Navbar'
import {Row, Col} from 'antd'
import DemoForm from './DemoForm'
import Footer from '../../Components/Footer'

const BookDemo = () => {
  return (
    <>
        <Navbar/>
        <Hero_Demo/>
        <Row>
                <Col span={24}>
                    <h1 className="section-title" style={{ textAlign: "center" }}>
                        Answer a few questions
                    </h1>
                </Col>
        </Row>
        <DemoForm/>
        <Footer/>
    </>
  )
}

export default BookDemo
