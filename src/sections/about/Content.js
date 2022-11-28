import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Title, Section, Box, Text } from '../../components/Core';

import imgContent1 from '../../assets/image/jpeg/tidel2.jpg';
import imgContent2 from '../../assets/image/jpeg/tidel1.jpg';

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="12" style={{ textAlign: 'center' }}>
            <Title variant="hero">
              Our mission is to make your life easier.
            </Title>
          </Col>
          <Col lg="12" className="pl-lg-5">
            <Text>
              We’re a team of 20 people living and working in Coimbatore, India.
              And we’re working to build the best products and services to help
              our customers build their brands and grow their businesses.
            </Text>
            <Text>
              We’ve always aimed to do things a little differently at Fuzionest.
              Since the early days, we’ve had a focus on building one of the
              most effective development pipeline by rethinking a lot of
              traditional practices.
            </Text>
            <Text>
              A commitment to supporting our team and our customers is something
              that we always strive for. Our passion for making meaningful
              connections flows through everything we do. We care about building
              a quality product, trusted relationships with our customers, and a
              sense of community that connects our customers and team with one
              another.
            </Text>
            <Text>
              To learn more about our approach to business and work, feel free
              to send us a message.
            </Text>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img
                src={imgContent1}
                alt=""
                className="img-fluid"
                style={{ height: '517px' }}
              />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
