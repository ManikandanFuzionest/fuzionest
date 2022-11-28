import React from 'react';
import { rgba } from 'polished';
import { Container, Row, Col } from 'react-bootstrap';

import { Section, Box, Text } from '../../components/Core';
import styled, { keyframes } from 'styled-components';

const animRippleOut = keyframes`
    100% {
      top: -12px;
      right: -12px;
      bottom: -12px;
      left: -12px;
      opacity: 0;
    }
`;

const InnerCircle = styled(Box)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const OuterCircle = styled(Box)`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  position: absolute;
  transform: perspective(1px) translateZ(0);
  background-color: ${({ theme, bg }) => rgba(theme.colors[bg], 0.06)};
  &:before {
    content: '';
    position: absolute;
    border: ${({ theme, bg }) => `6px solid ${rgba(theme.colors[bg], 0.08)}`};
    border-radius: 500px;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    animation: ${animRippleOut} 1.2s linear 1s infinite;
  }
`;

const FeatureCard = ({ color = 'primary', title, children, ...rest }) => (
  <Box width={'100%'} bg="light" {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
      >
        <InnerCircle bg={color} />
        <OuterCircle bg={color} />
      </Box>
      <div>
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={500}
          letterSpacing={-0.75}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize={2} lineHeight={1.75}>
          {children}
        </Text>
      </div>
    </div>
  </Box>
);

const Feature = () => (
  <>
    <Section pt="0!important">
      <Container>
        <Row className="">
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="In it Together">
              Together, We can achieve anything.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="primary" title="Put the Customer First">
              Our customers' interests are the heart of our decisions.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="warning" title="Innovate for the Greater Good">
              Our solutions help the entire work ecosystem.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="success" title="Empathy over Ego">
              We strive to build an inclusive, accepting culture.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="dark" title="Act Like an Owner">
              We act like owners - with commitment, determination, and a bias
              for action.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="ash" title="Operate with Integrity">
              We have the courage to manifest our values in action.
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
