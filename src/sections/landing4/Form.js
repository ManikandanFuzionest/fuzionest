import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../../components/Core";

import PageWrapper from "../../components/PageWrapper";

const FormStyled = styled.form``;

const Form1 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <Container>
            <Row className="">
              {/* <Col lg="12"> */}
                <Col lg="12" md={{ span: 3, offset: 3 }}> 
                  <Box >
                    <Title>Make an appoinment</Title>
                  </Box>
                </Col>
              
                <Col lg="6">
               
                  <FormStyled
                    name="contact1"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    

                    
                    <Row className="" style={{marginTop:"35px"}}>
                      <Col lg="6">
                        <Box mb={3}>
                        <Input
                          variant="outline"
                          type="text"
                          placeholder="Your name"
                          name="name"
                          required
                        />
                      </Box>
                      </Col>
                      
                      <Col lg="6">
                        <Box mb={3}>
                        <Input
                        variant="outline"
                          type="email"
                          placeholder="Email address"
                          name="email"
                          required
                        />
                      </Box>
                      </Col>
                    
                      <Col lg="6">
                      <Box mb={3}>
                      <Input
                      variant="outline"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </Box>
                      </Col>
                    
                      <Col lg="6">
                        <Box mb={3}>
                        <Input
                        variant="outline"
                          type="text"
                          as="textarea"
                          placeholder="Write your message"
                          rows={4}
                          name="message"
                          required
                        />
                      </Box>
                      </Col>
                      <Col lg="11">
                        <Button width="100%" type="submit" borderRadius={10}>
                        Send Message
                        </Button>
                      </Col>
                    
                    </Row>
                  </FormStyled>
                
                </Col>
                <Col lg="6"
                  className="mt-5 mt-lg-0 pt-lg-5"
                >
                  <Box className="mb-5">
                    <Title variant="card" fontSize="24px">
                    What is Lorem Ipsum?
                    </Title>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                  </Box>
                  
                </Col>

              {/* </Col> */}
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Form1