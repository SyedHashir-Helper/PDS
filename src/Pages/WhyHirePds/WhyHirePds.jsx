import React from 'react'
import {Row,Col} from 'antd'
import Advantages from './Advantages'
import "../../styles/WhyHirePds/whp.css"

const WhyHirePds = () => {
  return (
    <section className='section-whp'>
        <Row >
            <Col span={24}>
                <h1 className='section-title' style={{textAlign:"center"}}>Why Hire PDS?</h1>
            </Col>
        </Row>
        <Advantages/>
    </section>
  )
}

export default WhyHirePds
