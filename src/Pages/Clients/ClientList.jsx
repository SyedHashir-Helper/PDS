import React from 'react'
import { Card, List, Row } from 'antd';
import ForvisMazaars from "../../assets/images/clients/ForvisMazars.png";
import ForvisMazars from '../../assets/images/clients/ForvisMazars.png';
import OlofssonGroup from '../../assets/images/clients/Olofsson-Group.png';
import UniversalAmerican from '../../assets/images/clients/UAM_Wellcare_logo.png';
import Sentara from '../../assets/images/clients/sentara.png';
import TexasTrueChoice from '../../assets/images/clients/ttc.png';
import ChooseWellCommunities from '../../assets/images/clients/choosewell+-+full+color+web.png';
import KaiserPermanente from '../../assets/images/clients/kaiser-permanente-logo-png-transparent.png';
import LongevityHealthPlan from '../../assets/images/clients/63c7fe1f7c4ed17f03366b86_Longevity.png';
import MolinaHealthCare from '../../assets/images/clients/molina.png';
import EVRYHealth from '../../assets/images/clients/104684.png';
import PACEHealthcare from '../../assets/images/clients/Logo-blue.png';
import TheViabilityCompany from '../../assets/images/clients/60225ViabilityCompany_600x600.png';

const {Meta} = Card;


const data = [
    {
        "name": "Forvis Mazars",
        "image": ForvisMazars
    },
    {
        "name": "The Olofson Group",
        "image": OlofssonGroup
    },
    {
        "name": "Universal American",
        "image": UniversalAmerican
    },
    {
        "name": "Sentara",
        "image": Sentara
    },
    {
        "name": "Texas True Choice",
        "image": TexasTrueChoice
    },
    {
        "name": "ChooseWell Communities",
        "image": ChooseWellCommunities
    },
    {
        "name": "Kaiser Permanente",
        "image": KaiserPermanente
    },
    {
        "name": "Longevity Health Plan",
        "image": LongevityHealthPlan
    },
    {
        "name": "Molina HealthCare",
        "image": MolinaHealthCare
    },
    {
        "name": "EVRY Health",
        "image": EVRYHealth
    },
    {
        "name": "PACE Healthcare",
        "image": PACEHealthcare
    },
    {
        "name": "The Viability Company",
        "image": TheViabilityCompany
    }
];


const ClientList = () => {
  return (
    <Row>
        <List style={{width: "99%"}}
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
            <List.Item style={{height: "250px"}}>
                <Card hoverable title={item.name} style={{ height: "100%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", objectFit: "cover"}}>
                        <img width={300} style={{
                            objectFit: "cover"
                    }} src={item.image} />
                </Card>
            </List.Item>
            )}
        />
    </Row>
  )
}

export default ClientList
