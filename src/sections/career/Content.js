import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Title, Section, Box, Text } from '../../components/Core';

import GlobalContext from '../../context/GlobalContext';
import { device } from '../../utils';

import imgVideo from '../../assets/image/jpeg/video-image-2.jpg';
import tidel from '../../assets/image/png/tidel.jpeg';

const IconButton = styled(Box)`
  cursor: pointer;
  font-size: 22px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${({ theme }) => theme.colors.light};
  width: 64px;
  height: 64px;
  @media ${device.sm} {
    width: 100px;
    height: 100px;
  }
  @media ${device.md} {
    width: 124px;
    height: 124px;
  }
`;

const Content = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      <Section>
        <Container>
          <Row className="justify-content-center pb-5 mb-5">
            <Col lg="12" style={{ textAlign: 'center' }}>
              <Title variant="hero" className="mb-0">
                Together at Fuzionest
              </Title>
            </Col>
            <Col lg="12" className="pl-lg-5 d-flex align-items-center">
              <Text>
                There are jobs-and then there are careers. The chance to do the
                kind of work that adds up to something meaningful. The
                opportunity to challenge yourself and learn new skills. The
                prospect of being surrounded by smart, ambitious, motivated
                people, day-in and day-out. Together, we work hard, we laugh a
                lot, we brainstorm nonstop, and we give the best high-fives in
                town.
              </Text>
            </Col>
            <Col lg="12" className="pl-lg-5 d-flex align-items-center">
              <Text>Sound appealing? Come join us.</Text>
            </Col>
          </Row>
          <Box borderRadius={10} className="position-relative overflow-hidden">
            {/* <img src={imgVideo} alt="" className="img-fluid" /> */}
            <img src={tidel} alt="" className="img-fluid" />
            {/* <IconButton onClick={openVideoModal}>
              <i className="icon icon-triangle-right-17-2"></i>
            </IconButton> */}
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Content;
