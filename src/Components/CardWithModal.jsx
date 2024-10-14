import React, {useState} from 'react'
import {Row,Col, Card, Modal, Timeline} from 'antd'
const { Meta } = Card;

const CardWithModal = ({element}) => {
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
  return (
    <>
      <Card
            hoverable
            style={{
                width: 330
            }}
            cover={<img alt="example" src={element.image} />}
        >
            <Meta title={element.name} description={element.position} />
            <a onClick={showModal} style={{textAlign: "center", lineHeight: "2", padding: "1rem 0rem", fontSize: "1.5rem"}}>Know More</a>
      </Card>
      <Modal title={element.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  width={800}>
        <Row>
            <Col md={8}>
                <img src={element.image} />
            </Col>
            <Col md={16}>
                <Timeline mode='left'
                    items={
                        element.details
                    }
                />
            </Col>
        </Row>
      </Modal>
    </>
  )
}

export default CardWithModal
