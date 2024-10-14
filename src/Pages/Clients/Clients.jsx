import React from 'react'
import {Row, Col} from  'antd'
import Hero_Clients from './Hero_Clients'
import Navbar from '../../Components/Navbar'
import ClientList from './ClientList'
import Footer from '../../Components/Footer'

const Clients = () => {
  return (
    <section>
        <Navbar/>
        <Hero_Clients/>
        <Row >
            <Col span={24}>
                <h1 className='section-title' style={{textAlign:"center"}}>We have served a large group of community</h1>
            </Col>
        </Row>
        <ClientList/>
        <Footer/>
    </section>
  )
}

export default Clients
