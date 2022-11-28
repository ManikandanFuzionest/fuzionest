import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Title, Button, Section, Box, Text, Input } from '../components/Core';

import PageWrapper from '../components/PageWrapper';
import { device } from '../utils';

const FormStyled = styled.form``;

const WidgetWrapper = styled(Box)`
  border-radius: 10px;
  background-color: #f7f7fb;
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  @media ${device.lg} {
    padding-left: 140px;
    padding-right: 150px;
  }
  @media ${device.xl} {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

const Contact2 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <div className="banner-content">
                  <Title variant="hero">We're here</Title>
                  <Text>
                    Our door is always open for a good coffee{' '}
                    <br className="d-none d-md-block" />
                    followed by a discussion.{' '}
                  </Text>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-5 pt-lg-5">
              <Col xl="10">
                <WidgetWrapper>
                  <Row>
                    <Col md="6" sm="6">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Call us
                        </Title>
                        <Text>+91-84387 62921</Text>
                      </Box>
                    </Col>
                    <Col md="6" sm="6">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Email us
                        </Title>
                        <Text>contact@fuzionest.com</Text>
                      </Box>
                    </Col>
                    <Col md="12" sm="12">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Contact us
                        </Title>
                        <Text>Fuzionest Private Limited,</Text>
                        <Text>Tidel Park,</Text>
                        <Text>Module No. 12 Ground Floor Elcot SEZ,</Text>
                        <Text>
                          Coimbatore IT Park Rd, Coimbatore, Tamil Nadu 641014.
                        </Text>
                      </Box>
                    </Col>
                  </Row>
                </WidgetWrapper>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={6} className="order-lg-1 pt-5 mt-4">
                <div>
                  <Title
                    variant="card"
                    fontSize="24px"
                    className="mb-5 text-center"
                  >
                    or, Send us a message
                  </Title>
                  <FormStyled
                    name="contact2"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact2" />
                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="nameput"
                      >
                        Your name
                      </Title>
                      <Input
                        type="text"
                        placeholder="i.e. John Doe"
                        id="nameput"
                        name="name"
                        required
                      />
                    </Box>
                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="emailput"
                      >
                        Email address
                      </Title>
                      <Input
                        type="email"
                        placeholder="i.e. james@email.com"
                        id="emailput"
                        name="email"
                        required
                      />
                    </Box>

                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="phoneput"
                      >
                        Phone Number
                      </Title>
                      <Input
                        type="number"
                        placeholder="i.e. 9876543210"
                        id="phoneput"
                        name="phone"
                        required
                      />
                    </Box>

                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="messageput"
                      >
                        Message
                      </Title>
                      <Input
                        type="text"
                        as="textarea"
                        placeholder="What is the service that you are looking for"
                        rows={4}
                        id="messageput"
                        name="message"
                        required
                      />
                    </Box>

                    <Button width="100%" type="submit" borderRadius={10}>
                      Send Message
                    </Button>
                  </FormStyled>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact2;
