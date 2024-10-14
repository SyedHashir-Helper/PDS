import React from 'react'
import {Row, Col} from 'antd'
import HorizontalCard from '../../Components/HorizontalCard'
import expertise from "../../assets/images/experts.png"
import service from "../../assets/images/service.png"
import Quality from "../../assets/images/quality.png"
import Transparency from "../../assets/images/transparency.png"
import files from "../../assets/images/files.png"
import cost from "../../assets/images/cost.png"


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
          "header": "Transparency",
          "description": "Clients can check or expedite the credentialing status of any provider file at any time.",
          "image": Transparency
        },
        {
          "header": "Current and Complete Files - Guaranteed",
          "description": "Unlike some CVOs, PDS does not require that clients submit files for credentialing that are current and complete. We will perform the work needed to ensure that the files are current and complete at the time of the credentialing decision. Guaranteed. Or the client does not pay. Other CVOs give clients two things they do not need: files the CVO failed to complete, and an invoice for the CVO’s failed efforts. ",
          "image": files,
        },
        {
          "header": "Cost",
          "description": "Our cost per clean file is an excellent value compared to competitors.",
          "image": cost
        }
      ]

  return (
    <Row>
        {
            advantages.map((element, index)=>{
                return (
                    <Col md={23} key={index} >
                        <HorizontalCard 
                            header={element.header}
                            desc={element.description}
                            image={element.image}
                            reverse={index % 2 != 0}
                        />
                    </Col>
                )
            })
        }
    </Row>
  )
}

export default Advantages
