import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import ProtfolioCard from "../../components/ProtfolioCard";

import product1 from "../../assets/image/png/mockup1.png";
import product2 from "../../assets/image/png/mockup1.png";
import imgCase1 from "../../assets/image/png/mockup1.png";
import imgCase2 from "../../assets/image/png/case-media-img-2.png";
import imgBrand1 from "../../assets/image/png/angular.png";
import imgBrand2 from "../../assets/image/jpeg/case-card-brand-img-2.jpg";

const protfolioData = [
  {
    headTitle: "Supermarket",
    img: product1,
    title: "Frontend development",
    titleDes:
      "We believe that first impression ",
    description:
      "We believe that first impression is crucial, so we take control of the development graphical user interface of a website using,We believe that first impression is crucial, so we take control of the development",
    pro: [
      {
        title: "Angular",
        description: "Throwing consider dwelling bachelor",
        image:
          "https://uploads-ssl.webflow.com/5bf7d4116ffe19589ea8d17e/61f25bca94a0fa645a28c80a_angular.png",
      },
      {
        title: "Reactjs",
        description: "Throwing consider dwelling",
        image:
          "https://uploads-ssl.webflow.com/5bf7d4116ffe19589ea8d17e/61f25ccc8a120349093e5006_react.png",
      },
      {
        title: "Vuejs",
        description: "Throwing  bachelor",
        image:
          "https://uploads-ssl.webflow.com/5bf7d4116ffe19589ea8d17e/61f25cd60408f971347441c1_vue.png",
      },
    ],
  },
  {
    headTitle: "Hair & Beauty",
    img: product2,
    title: "Development",
    description:
      "We believe that first impression is crucial, so we take control of the development graphical user interface of a website using",
    pro: [
      {
        title: "Reactjs",
        description: "Throwing consider dwelling",
        image:
          "https://uploads-ssl.webflow.com/5bf7d4116ffe19589ea8d17e/61f25ccc8a120349093e5006_react.png",
      },
      {
        title: "Angular",
        description: "Throwing consider dwelling bachelor",
        image:
          "https://uploads-ssl.webflow.com/5bf7d4116ffe19589ea8d17e/61f25bca94a0fa645a28c80a_angular.png",
      },
    ],
  },
];

const Protfolio1 = () => (
  <>
    {/* <!-- Feature section #F7F7FB--> */}
    <Section bg="#FFFFFF" className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="12" className="mb-5 mb-lg-0">
            <ProtfolioCard
              img={imgCase1}
              title="Brag Mobile App"
              protfolioData={protfolioData}
            ></ProtfolioCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Protfolio1;
