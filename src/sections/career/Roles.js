import React from 'react';
import Link from 'next/link';
import { rgba } from 'polished';
import { Container, Row, Col } from 'react-bootstrap';
import { Title, Section, Text, Badge } from '../../components/Core';
import styled from 'styled-components';
import Java from '../../assets/image/png/java.png';
import Mongo from '../../assets/image/png/mongo.png';
import Express from '../../assets/image/png/express.png';
import ReactLogo from '../../assets/image/png/react.png';
import Node from '../../assets/image/png/nodejs.png';
import Angular from '../../assets/image/png/angular.png';
import Php from '../../assets/image/png/php.png';
import AWS from '../../assets/image/png/aws-icon.png';
import PhpLaravel from '../../assets/image/png/PhpLaravel.png';
import Flutter from '../../assets/image/png/flutter.png';
import IOS from '../../assets/image/png/ios.png';
import Android from '../../assets/image/png/android.png';
import Vue from '../../assets/image/png/vue.png';
import Database from '../../assets/image/png/database.png';
import Mysql from '../../assets/image/png/MySQL.png';
import Html from '../../assets/image/png/html5.png';
import Bootstrap from '../../assets/image/png/bootstrap5.png';
import Css from '../../assets/image/png/css.png';
import Oracle from '../../assets/image/png/oracle-database.png';
import ReactNative from '../../assets/image/png/reactNative.png';
import Sketch from '../../assets/image/png/sketch.png';
import Photoshop from '../../assets/image/png/photoshop.png';
import Adobe_xd from '../../assets/image/png/adobe_xd.png';
import Adobe_Illustrator from '../../assets/image/png/adobe_Illustrator.png';
import Selenium_Logo from '../../assets/image/png/Selenium_Logo.png';
import LoadRunner from '../../assets/image/png/LoadRunner.png';
import Tessy from '../../assets/image/png/tessy.png';
import Mantis from '../../assets/image/png/mantis.png';

const Card = styled.a`
  justify-content: flex-start;
  min-height: 100%;
  box-shadow: 0 2px 4px rgba(14, 86, 124, 0.17);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
  transition: 0.4s;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 32px 84px rgba(14, 86, 124, 0.17);
    color: #0056b3 !important;
    text-decoration: none;
    .title {
      color: #0056b3 !important;
    }
  }
`;

const Location = styled.span`
  color: #8c97ac;
  font-size: 16px;
  font-weight: 300;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const BadgeStyled = styled(Badge)`
  background-color: ${({ theme, bg }) => rgba(theme.colors[bg], 0.15)};
  color: ${({ theme, bg }) => theme.colors[bg]};
  border: none;
  font-weight: 300;
`;

const RolesCard = ({
  color = 'primary',
  title,
  location,
  type,
  children,
  image,
  ...rest
}) => (
  <Link href="/">
    <Card className="card-job top-only" {...rest}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* <Location>
          <i className="icon icon-pin-3 mr-1"></i> {location}
        </Location> */}
        {/* <BadgeStyled bg={color}>{type}</BadgeStyled> */}
        {image === 'backend' ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <img src={Java} alt="image" className="img-fluid" width="30px" />
            <img
              src={Php}
              alt="image"
              className="img-fluid"
              width="30px"
            />{' '}
            <img
              src={PhpLaravel}
              alt="image"
              className="img-fluid"
              width="30px"
            />
          </div>
        ) : image === 'mern' ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <img src={Mongo} alt="image" className="img-fluid" width="30px" />
            <img src={Express} alt="image" className="img-fluid" width="30px" />
            <img
              src={ReactLogo}
              alt="image"
              className="img-fluid"
              width="30px"
            />
            <img src={Node} alt="image" className="img-fluid" width="30px" />
          </div>
        ) : image === 'mean' ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <img src={Mongo} alt="image" className="img-fluid" width="30px" />
            <img src={Express} alt="image" className="img-fluid" width="30px" />
            <img src={Angular} alt="image" className="img-fluid" width="30px" />
            <img src={Node} alt="image" className="img-fluid" width="30px" />
          </div>
        ) : image === 'aws' ? (
          <div>
            <img src={AWS} alt="image" className="img-fluid" width="30px" />
          </div>
        ) : image === 'fronend' ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <img src={Html} alt="image" className="img-fluid" width="30px" />
            <img src={Css} alt="image" className="img-fluid" width="30px" />
            <img
              src={Bootstrap}
              alt="image"
              className="img-fluid"
              width="30px"
            />
            <img src={Vue} alt="image" className="img-fluid" width="30px" />
          </div>
        ) : image === 'mobile' ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <img src={Flutter} alt="image" className="img-fluid" width="30px" />
            <img src={IOS} alt="image" className="img-fluid" width="30px" />
            <img src={Android} alt="image" className="img-fluid" width="30px" />
            <img
              src={ReactNative}
              alt="image"
              className="img-fluid"
              width="30px"
            />
          </div>
        ) : image === 'database' ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <img src={Mongo} alt="image" className="img-fluid" width="30px" />
            <img src={Mysql} alt="image" className="img-fluid" width="30px" />
            <img src={Oracle} alt="image" className="img-fluid" width="30px" />
          </div>
        ) : image === 'ui/ux' ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <img src={Sketch} alt="image" className="img-fluid" width="30px" />
            <img
              src={Photoshop}
              alt="image"
              className="img-fluid"
              width="30px"
            />
            <img
              src={Adobe_xd}
              alt="image"
              className="img-fluid"
              width="30px"
            />
            <img
              src={Adobe_Illustrator}
              alt="image"
              className="img-fluid"
              width="30px"
            />
          </div>
        ) : image === 'testing' ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <img
              src={Selenium_Logo}
              alt="image"
              className="img-fluid"
              width="30px"
            />{' '}
            <img src={Tessy} alt="image" className="img-fluid" width="30px" />
            <img src={Mantis} alt="image" className="img-fluid" width="30px" />
            <img
              src={LoadRunner}
              alt="image"
              className="img-fluid"
              width="30px"
            />
          </div>
        ) : (
          ''
        )}
      </div>
      <Title variant="card" className="title" fontWeight={500}>
        {title}
      </Title>
    </Card>
  </Link>
);

const Roles = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center">
            <div>
              <Title>Open roles</Title>
              <Text>
                These companies release their own versions of the operating
                systems with minor changes, and yet always.
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="mt-lg-5">
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="secondary"
              title="MERN Stack Development"
              type="Full-time"
              image="mern"
              location="Tidel Park, Coimbatore"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="secondary"
              title="MEAN Stack Development"
              type="Full-time"
              image="mean"
              location="Tidel Park, Coimbatore"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="success"
              title="Front-End Development"
              type="Remote"
              image="fronend"
              location="Tidel Park, Coimbatore"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="success"
              title="Back-End Development"
              type="Full-time"
              image="backend"
              location="Tidel Park, Coimbatore"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="primary"
              title="Mobile Development"
              type="Full-time"
              image="mobile"
              location="Tidel Park, Coimbatore"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="primary"
              title="Database"
              image="database"
              type="Remote"
              location="Tidel Park, Coimbatore"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="secondary"
              title="AWS"
              type="Part-time"
              image="aws"
              location="Tidel Park, Coimbatore"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="secondary"
              title="UI/UX Design"
              type="Part-time"
              image="ui/ux"
              location="Tidel Park, Coimbatore"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="secondary"
              title="Testing"
              type="Part-time"
              image="testing"
              location="Tidel Park, Coimbatore"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Roles;
