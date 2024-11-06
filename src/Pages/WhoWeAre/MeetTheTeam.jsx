import React from 'react'
import {Row, Col, Card} from 'antd'
const { Meta } = Card;
// import Picture1 from  "../../assets/images/Picture1.png"
import Picture1 from  "../../assets/images/white.png"
import khalil from  "../../assets/images/khalil.png"
import CardWithModal from '../../Components/CardWithModal';

const MeetTheTeam = () => {
    const people = [
        {
            "name": "Rob Westcott, JD, CPA",
            "position": "Provider Data Solutions Founder and President",
            "details": [
                {
                    "label": "1995 – 2008",
                    "children": "Rob was Vice President of Operations for Amerigroup. Rob led major company functions including Credentialing, Provider Information, Claims Appeals, Claims Projects, Distribution Services, Provider Contracting, and led a technical team developing automation and quality technology."
                },
                {
                    "label": "2009 – 2021",
                    "children": "Rob founded Cred-Ability Solutions LLC in 2009 and successfully led that NCQA Certified credentials verification organization company until 2021 when he sold it to Medallion (First Layer AI)."
                },
                {
                    "label": "2021 – Present",
                    "children": "Rob founded and is President of Provider Data Solutions LLC (PDS). Rob designed and developed the proprietary credentialing software used by PDS."
                }
            ],
            "image": Picture1
        },
        {
            "name": "Judy Gateley",
            "position": "Provider Data Solutions Executive Credentialing Specialist",
            "details": [
                {
                    "label": "199X to 200X",
                    "children": "Judy was Director of Credentialing for Amerigroup. Judy managed the credentialing of more than 100,000 providers across the nation. Judy – add something about NCQA here."
                },
                {
                    "label": "200X to Present",
                    "children": "Executive Credentialing Specialist: Judy performs delegated credentialing audits for large provider IPAs and groups and is our credentialing subject matter expert."
                }
            ],
            "image": Picture1
        },
        {
            "name": "Stephanie Barnett",
            "position": "Senior Credentialing Specialist and Client Liaison",
            "details": [
                {
                    "label": "Fortune 100 Insurance Company",
                    "children": "Nearly a decade managing national provider contracting, data management, and credentialing for a Fortune 100 insurance company."
                },
                {
                    "label": "Hospitals and Health Systems",
                    "children": "Two decades leading the managed care support functions for hospitals, multi-specialty physician organizations, and other health systems."
                },
                {
                    "label": "Community Coalitions",
                    "children": "More than a decade building community coalitions to improve access to more compassionate and person-centered care."
                }
            ],
            "image": Picture1
        },
        {
            "name": "Laraine Dover, MBA",
            "position": "Senior Credentialing Specialist and NCQA Certification Subject Matter Expert",
            "details": [
                {
                    "label": "",
                    "children": "More than 15 years of work in Credentialing/Privileging/Enrollment for healthcare providers and healthcare facilities. "
                },
                {
                    "label": "",
                    "children": "NCQA subject matter expert with over a decade in administering successful surveys and developing policies and procedures. "
                }
            ],
            "image": Picture1
        },
        {
            "name": "Khalil Sheikh",
            "position": "Chief Technology Officer (CTO)",
            "details": [
                {
                    "label": "1986-2006",
                    "children": "EVP Software & Strategy Saama Technologies & Integnology."
                },
                {
                    "label": "2010 – 2017",
                    "children": "Led software and IT for a group of companies for Vavni/Trellisoft."
                },
                {
                    "label": "2018 – 2020",
                    "children": "EVP Solutions & Strategy for Intelliswift Software and its subsidiaries."
                },
                {
                    "label": "2020 – 2022",
                    "children": "EVP Solutions & Strategy for Saxon Global & its affiliate companies."
                },
                {
                    "label": "2022 – Present",
                    "children": "Executive Technology Advisor for Planet Group. Khalil and his team built, improve, and maintain the PDS technology and developed several healthcare platforms."
                }
            ],
            "image": khalil
        }
    ];
    


  return (
    <section style={{
        margin:"1rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}>
        <Row  >
            <Col span={24}>
                <h1 className='section-title' style={{textAlign:"center"}}>Meet the Management team</h1>
            </Col>
        </Row>
        
        <Row align={'top'} justify={{ xs: 'center', sm: 'space-between' }} gutter={[10,30]}>
            {
                people.map((element, index)=>{
                    return (
                        <Col lg={4} md={24} sm={24} xs={24} key={index} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                         }}>
                            <CardWithModal
                                element={element}
                            />
                        </Col>
                    )
                })
            }
        </Row>
        
    </section>
  )
}

export default MeetTheTeam
