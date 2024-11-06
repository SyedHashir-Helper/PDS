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
        <ClientList/>
        <Footer/>
    </section>
  )
}

export default Clients
