import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Title, Section, Box, Text } from '../../components/Core';

import imgU1 from '../../assets/image/jpeg/about-team-1.jpg';
import imgU2 from '../../assets/image/jpeg/about-team-3.jpg';
import imgU3 from '../../assets/image/jpeg/about-team-4.jpg';
import imgU4 from '../../assets/image/jpeg/about-team-5.jpg';
import imgU5 from '../../assets/image/jpeg/about-team-6.jpg';
import imgU6 from '../../assets/image/jpeg/about-team-2.jpg';

const CardImage = styled.div`
  max-width: 160px;
  min-width: 160px;
  min-height: 160px;
  max-height: 160px;
  overflow: hidden;
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 29px;
`;

const TeamCard = ({ userImg, title, children, ...rest }) => (
  <Box
    className="text-center"
    pt="15px"
    px="30px"
    borderRadius={10}
    mb={4}
    {...rest}
  >
    <CardImage>
      <img src={userImg} className="img-fluid" alt="" />
    </CardImage>
    <div className="text-center">
      <Title variant="card" fontSize="24px" letterSpacing={-0.75} my={1}>
        {title}
      </Title>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Team = () => (
  <>
    {/* <!-- Team section --> */}
    <Section className="position-relative pt-5">
      <Container>
        <Row className="justify-content-center">
          {/* <Col lg="12" className="text-center pb-3"> */}
          <Col lg="12" className="pl-lg-5">
            <div className="">
              <Title>Our Culture</Title>
              <Text>
                We believe that creating a company where people love to work is
                built on relationships, growth, and impact.
              </Text>
              <Text>
                We cultivate a culture of low ego and set a high bar for
                excellence. We treat one another inside the company the same way
                we treat our members–by communicating in ways that build trust,
                operating with transparency, and having one another’s back.
              </Text>
              <Text>
                We recognise the contributions of individuals and celebrate wins
                as a team. We also understand that “FUZION” of everyone’s effort
                and contribution is the way for success and way forward. Every
                member of the team is an owner of the company and is encouraged
                to “NEST In” on any part of the business. What we all have in
                common is a mission that starts with heart, and a desire to work
                together to create something of lasting value and personal
                impact for our clients and employees alike.
              </Text>
            </div>
          </Col>
        </Row>
        {/* <Row className="align-items-center justify-content-center">
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU1} title="Louise Elliott">
              Founder and CEO
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU2} title="Trevor Fleming">
              CTO
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU3} title="Raymond Baker">
              Software Engineer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU4} title="George Torres">
              UX Designer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU5} title="Daisy Ferguson">
              Content Writer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU6} title="Todd Summers">
              Digital Marketer
            </TeamCard>
          </Col>
        </Row> */}
      </Container>
    </Section>
  </>
);

export default Team;
