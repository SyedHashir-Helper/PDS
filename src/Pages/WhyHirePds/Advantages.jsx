import React from 'react'
import {Row, Col} from 'antd'
import HorizontalCard from '../../Components/HorizontalCard'
import expertise from "../../assets/images/advantages/expertise.png"
import service from "../../assets/images/advantages/service.png"
import Quality from "../../assets/images/advantages/quality.png"
import Transparency from "../../assets/images/advantages/transparency.png"
import files from "../../assets/images/advantages/folder.png"
import cost from "../../assets/images/advantages/cost.png"


import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);




const Advantages = () => {
    const advantages = [
        {
          "header": "Expertise",
          "description": "No other CVO provides the level of expertise our team members provide.",
          "image": expertise
        },
        {
          "header": "Service",
          "description": "No other CVO provides the elevated level of service we provide.",
          "image": service,
          "details": {
            "Service Level": "No other CVO provides the elevated level of service we provide.",
            "Timeliness": "PDS typically completes files within days and sometimes within hours. There is no extra charge for expedited files.",
            "Scope": [
              "Credentials",
              "Recredentials",
              "Performs ongoing monitoring and tracks results",
              "Performs delegated audits",
              "Supports clients in their NCQA audits",
              "Hosts regular client meetings and publishes minutes"
            ],
            "Note": "Other CVOs do not provide all these critical services."
          }
        },
        {
          "header": "Quality",
          "description": "Our technology and team provide proven quality. NCQA has lauded the PDS technology platform and our staff expertise in multiple audits.",
          "image": Quality
        },
        {
            "header": "Current and Complete Files - Guaranteed",
            "description": "PDS ensures files are complete before credentialing—guaranteed, or the client pays nothing. Unlike other CVOs, we don’t charge for incomplete work.",
            "image": files,
          },
        {
          "header": "Transparency",
          "description": "Clients can check or expedite the credentialing status of any provider file at any time.",
          "image": Transparency
        },
        {
          "header": "Cost",
          "description": "Our cost per clean file is an excellent value compared to competitors.",
          "image": cost
        },
      ]

  return (
    <Row justify={'space-around'} align={'middle'} gutter={[0,10]} style={{margin: "0rem 1rem"}}>
        {
            advantages.map((element,index)=>{
                return (
                    <Col md={11} sm={22} xs={22} key={index}>
                        <HorizontalCard
                            image={element.image}
                            desc={element.description}
                            header={element.header}
                        />
                    </Col>
                )
            })
        }
    </Row>
  )
}

export default Advantages
