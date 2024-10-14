import React, { useState,useRef, useEffect } from "react";
import { Row, Col, Card, Modal, Timeline } from "antd";
const { Meta } = Card;

const CardWithModal = ({ element }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the card is visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as necessary
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
    <>
      <Card
        ref={cardRef}
        hoverable
        style={{
          width: 330,
          transition: 'transform 1.5s ease, opacity 0.5s ease',
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        opacity: isVisible ? 1 : 0,
        }}
        cover={<img alt="example" src={element.image} />}
      >
        <Meta title={element.name} description={element.position} />
        <a
          onClick={showModal}
          style={{
            textAlign: "center",
            lineHeight: "2",
            padding: "1rem 0rem",
            fontSize: "1.5rem",
          }}
        >
          Know More
        </a>
      </Card>
      <Modal
        title={element.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={820}
      >
        <Row align={"top"}>
          <Col md={7}>
            <img
              src={element.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Col>
          <Col md={17} className="">
            <Timeline
              mode="left"
              items={element.details.map((item) => ({
                label: <span style={{ fontWeight: "bold" }}>{item.label}</span>,
                children: (
                  <div style={{ textAlign: "left" }}>{item.children}</div>
                ),
              }))}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CardWithModal;
