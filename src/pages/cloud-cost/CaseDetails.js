import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Section, Box, Title, Text, Button, List } from '../../components/Core';

// import imgCase1 from '../../assets/image/jpeg/case-details--details.jpg';
// import imgCase2 from '../../assets/image/jpeg/case-details-half-single.jpg';
// import imgCase3 from '../../assets/image/jpeg/case-details-half-single-2.jpg';
import imgCase1 from '../../assets/image/jpeg/cloudImage1.jpg';
// import imgCase2 from '../../assets/image/jpeg/cloudImage4.jpg';
import imgCase3 from '../../assets/image/jpeg/cloud-cost-optimization-strategy.webp';
import imgCase2 from '../../assets/image/jpeg/cloudImage2.jpg';

const ImgContainer = styled(Box)`
  border-radius: 10px;
  overflow: hidden;
`;

const CaseDetails = () => (
  <>
    <Section className="position-relative" borderBottom="1px solid #eae9f2;">
      <Container>
        <ImgContainer className="text-center" pb={['50px', null, '75px']}>
          <img src={imgCase1} alt="" className="img-fluid" />
        </ImgContainer>

        <Row>
          <Col lg="12" xl="10" className="offset-xl-1">
            <Box pb={['40px', null, '65px']}>
              <Title variant="card" mb="18px">
                Get more from AWS Cloud
              </Title>
              <List>
                <li>
                  Optimise AWS environment for efficiency and resource
                  availability
                </li>
                <li>
                  Monitoring best practices and budgeting that focuses on
                  clients need
                </li>
              </List>
              {/* <Text variant="small">
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement technical data
                solutions for the business in a way that balances quality, cost,
                time and maintainability.
              </Text> */}
            </Box>
            {/* <Box pb={['40px', null, '65px']}>
              <Title variant="card" mb="18px">
                Client Brief
              </Title>
              <Text variant="small">
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement technical data
                solutions for the business in a way that balances quality, cost,
                time and maintainability.
              </Text>
            </Box> */}
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="mb-lg-0 mb-30">
            <Box>
              <img
                src={imgCase2}
                alt=""
                className="img-fluid"
                style={{ height: '458px' }}
              />
            </Box>
          </Col>
          <Col lg="6">
            <Box>
              <img
                src={imgCase3}
                alt=""
                style={{ height: '458px' }}
                className="img-fluid"
              />
            </Box>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12" xl="10" className="offset-xl-1 pt-4">
            <Box pb={['40px', null, '65px']}>
              <Title variant="card" mb="18px">
                Make your AWS environment actually save for you
              </Title>
              <Text variant="small" mb={3}>
                Moving to the Cloud is not actually a wonder for achieving cost
                optimization. It is a continuous journey of monitoring and
                aligning resources with goals to achieve the desired cost
                structure. The availability and ease of use of Cloud resources
                comes with an associated reality that costs tend to increase
                with time. However, Cloud-native provides granular insights into
                each Cloud resource and improves return on investment.
              </Text>
              <Text variant="small" mb={3}>
                Costing involves a consideration of various aspects like
                rightsizing for your applications, selecting a pricing model
                that suits your business, tagging resources and scaling based on
                demand.
              </Text>
              <Text variant="small" mb={3}>
                There are several ways to track and save on your AWS cloud
                computing costs. Apart from continuous monitoring, it also
                involves optimizing storage, right provisioning, leveraging
                compute instances for flexibility, autoscaling and automation.
              </Text>
              <Text variant="small" mb={3}>
                All this requires an understanding of the compute
                infrastructure, application, data usage and due-diligence on our
                part. Fuzionest is helping many customers achieve
                cost-efficiency by applying best practices and customized
                approaches in the design, delivery, and maintenance of AWS
                environments
              </Text>
              {/* <List>
                <li>
                  This role will work with stakeholders and other developers to
                  design and implement.
                </li>
                <li>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding.
                </li>
                <li>
                  You might be surprised to know that not only do we run some of
                  the biggest websites in the world; we’re also growing really
                  fast! We have close to 600 staff and contractors worldwide,
                  adding more than 100 people to the business, which grows year
                  on year, since 2017.
                </li>
              </List> */}
            </Box>
            {/* <Box pb={['40px', null, '65px']}>
              <Title variant="card" mb="18px">
                Learnings
              </Title>
              <Text variant="small">
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement technical data
                solutions for the business in a way that balances quality, cost,
                time and maintainability.
              </Text>
            </Box> */}

            {/* <Box>
              <Button>Get in Touch</Button>
            </Box> */}
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseDetails;
