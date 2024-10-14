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

    const wrapAfterThreeWords = (text) => {
        const words = text.split(' ');
        const chunks = [];
        for (let i = 0; i < words.length; i += 3) {
            chunks.push(words.slice(i, i + 3).join(' '));
        }
        return chunks.map((chunk, index) => (
            <div key={index}>{chunk}</div>
        ));
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
      <Modal title={element.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  width={820}>
        <Row align={'top'}>
            <Col md={7}>
                <img src={element.image} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }} />
            </Col>
            <Col md={17}>
                <Timeline
                    mode='left'
                    items={element.details.map((item) => ({
                        label: (<span style={{ fontWeight: 'bold'}}>
                                    {item.label}
                                </span>),
                        children: (
                            <div style={{ textAlign: 'justify'}}>
                                {item.children}
                            </div>
                        )
                    }))}
                />
            </Col>
        </Row>
      </Modal>
    </>
  )
}

export default CardWithModal
