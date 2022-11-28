import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import CaseList from "../sections/case-study/CaseList1";
import CaseList2 from "../sections/case-study/CaseList2";
import Protfolio1 from "../sections/protfolio/Protfolio1";
import CTA from "../sections/case-study/CTA";

const Protfolio = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Title variant="hero">Protfolio</Title>
                <Text>
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        {/* <CaseList /> */}
        <Protfolio1 />
        {/* <CaseList /> */}
        <CTA />
      </PageWrapper>
    </>
  );
};
export default Protfolio;
