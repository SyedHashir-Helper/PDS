import React , {useState, useRef, useEffect} from 'react'
import {Row,Col, Divider, Grid} from 'antd'
import "../styles/Components/HorizontalCard.css"

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

const HorizontalCard = ({image, header, desc, reverse}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
    const { md } = Grid.useBreakpoint();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Stop observing after it's visible
                    }
                });
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

  return (
    <Row tabIndex="0" className='horizon-card' 
    ref={cardRef}
    gutter={[0,10]}
        style={{
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            transition: "transform 1s ease-in-out, box-shadow 1s ease-in-out",
            borderRadius: "15px",
            border: "1px solid rgb(223, 223, 223)",
            transform: isVisible ? "translateX(0)" : "translateX(-100%) scale(1)",
            boxShadow: isFocused ? "0 4px 20px rgba(0,0,0,0.2)" : "none"
        }}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
        <Col className="card-content" md={18} lg={18} 
            style={{display: "flex", alignItems: "start", flexDirection: "column",padding: "1rem",
                    transition: "transform 0.8s ease-in-out"}}>
            <Row className='card-header'>
                <h1>
                    {header}
                </h1>
            </Row>
            <Row className='card-desc'>
                {desc}
            </Row>
        </Col>
        <Col md={6} lg={6} xs={24} sm={24} className='card-img' style={{display: "flex", justifyContent: "center"}}>
            <img src={image} />
        </Col>
    </Row>
  )
}

export default HorizontalCard
