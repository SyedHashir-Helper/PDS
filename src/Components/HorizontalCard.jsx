import React , {useState, useRef, useEffect} from 'react'
import {Row,Col} from 'antd'
import "../styles/Components/HorizontalCard.css"


const HorizontalCard = ({image, header, desc, reverse}) => {

  return (
    <Row tabIndex="0" className='horizon-card' 
        style={{
            margin: "0rem 0rem",
            display: "flex",
            flexDirection: reverse ? "row-reverse" : "row",
            overflow: "hidden",
            transition: "transform 1s ease-in-out, box-shadow 0.5s ease-in-out",
        }}>
        <Col md={12} lg={12} className='card-img'>
            <img src={image} />
        </Col>
        <Col md={12} lg={12} style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} className='card-content'>
            <Row className='card-header'>
                <h1>
                    {header}
                </h1>
            </Row>
            <Row className='card-desc'>
                {desc}
            </Row>
        </Col>
    </Row>
  )
}

export default HorizontalCard
