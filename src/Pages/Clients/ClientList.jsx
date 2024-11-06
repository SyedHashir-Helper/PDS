import React from "react";
import { Card, List, Row } from "antd";
import ForvisMazaars from "../../assets/images/clients/ForvisMazars.png";
import ForvisMazars from "../../assets/images/clients/ForvisMazars.png";
import OlofssonGroup from "../../assets/images/clients/Olofsson-Group.png";
import UniversalAmerican from "../../assets/images/clients/UAM_Wellcare_logo.png";
import Sentara from "../../assets/images/clients/sentara.png";
import TexasTrueChoice from "../../assets/images/clients/ttc.png";
import ChooseWellCommunities from "../../assets/images/clients/choosewell+-+full+color+web.png";
import KaiserPermanente from "../../assets/images/clients/kaiser-permanente-logo-png-transparent.png";
import LongevityHealthPlan from "../../assets/images/clients/63c7fe1f7c4ed17f03366b86_Longevity.png";
import MolinaHealthCare from "../../assets/images/clients/molina.png";
import EVRYHealth from "../../assets/images/clients/104684.png";
import PACEHealthcare from "../../assets/images/clients/Logo-blue.png";
import TheViabilityCompany from "../../assets/images/clients/60225ViabilityCompany_600x600.png";
import {Link} from 'react-router-dom'

const { Meta } = Card;

const data = [
    {
      name: "Forvis Mazars",
      image: ForvisMazars,
      url: "https://www.forvismazars.com/group/en", // Example URL
    },
    {
      name: "The Olofson Group",
      image: OlofssonGroup,
      url: "https://olofsson.group/ ", // Example URL
    },
    {
      name: "Universal American",
      image: UniversalAmerican,
      url: "https://www.uasdubai.ae/", // Example URL
    },
    {
      name: "Sentara",
      image: Sentara,
      url: "https://www.sentara.com", // Example URL
    },
    {
      name: "Texas True Choice",
      image: TexasTrueChoice,
      url: "https://www.truechoiceinsurance.com", // Example URL
    },
    {
      name: "ChooseWell Communities",
      image: ChooseWellCommunities,
      url: "https://www.choose-well.org", // Example URL
    },
    {
      name: "Kaiser Permanente",
      image: KaiserPermanente,
      url: "https://www.kaiserpermanente.org", // Example URL
    },
    {
      name: "Longevity Health Plan",
      image: LongevityHealthPlan,
      url: "https://longevityhealthplan.com", // Example URL
    },
    {
      name: "Molina HealthCare",
      image: MolinaHealthCare,
      url: "https://www.molinahealthcare.com", // Example URL
    },
    {
      name: "EVRY Health",
      image: EVRYHealth,
      url: "https://www.evryhealth.com", // Example URL
    },
    {
      name: "PACE Healthcare",
      image: PACEHealthcare,
      url: "https://www.pace-healthcare.com", // Example URL
    },
    {
      name: "The Viability Company",
      image: TheViabilityCompany,
      url: "https://www.viabilitycompany.com", // Example URL
    },
  ];
  

const ClientList = () => {
  return (
    <Row justify={"center"}>
      <List
        style={{ width: "95%" }}
        grid={{
          gutter: 16,
          xs: 2, // 2 columns for extra small screens
          sm: 2, // 2 columns for small screens
          md: 4, // 4 columns for medium screens
          lg: 4,
          xl: 4,
      xxl: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ height: "250px" }}>
            <Link to={item.url}>
            <Card
              hoverable
              style={{
                  height: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
              <img
                width={300}
                style={{
                  height: "90%",
                  width: "90%",
                  objectFit: "contain",
                  transition: 'transform 0.3s ease',
                }}
                src={item.image}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Scale up on focus
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'} // Scale up on focus
                tabIndex={0} // Make the image focusable
              />
            </Card>
      </Link>
          </List.Item>
        )}
      />
    </Row>
  );
};

export default ClientList;
