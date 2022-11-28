import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";
import { Title, Box, Text } from "../Core";

const Card = styled(Box)`
  border-radius: 10px 10px;
  overflow: hidden;
  margin: auto;
  width: 90%;
  padding: 50px 24px;
`;

const BoxShadow = styled(Box)`
  padding: 0px 44px 0px 44px;
  border-radius: 16px;
  box-shadow: 0 0 20px 7px rgb(0 0 0 / 8%);
  background-color: white;
`;

// const ImageContainer = styled(Box)`
//   max-width: 210px;
//   border-radius: 8px;
//   overflow: hidden;
//   position: relative;
//   width: 100%;
// `;
const ImageContainer = styled(Box)`
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;

const BrandImage = styled(Box)`
  overflow: hidden;
  img {
    border-radius: 8px;

    // border: 1px solid #eae9f2;
  }
`;

const CardText = styled(Box)`
  // padding-left: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 12px auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;
const CardTextRigth = styled(Box)`
  // padding-left: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 12px auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;

const TitleStyled = styled(Title)`
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ProtfolioCard = ({
  img,
  imgBrand,
  protfolioData,
  preTitle,
  title,
  children,
  readMore,
  ...rest
}) => {
  protfolioData.map((base1) => {
    console.log(base1);
  });
  return (
    <div>
      {protfolioData.map((base1) => (
        <Card className="" {...rest}>
          <BoxShadow>
            <h4 style={{ textAlign: "center", margin: "0px",padding: "20px 0px"  }}>
              {base1.headTitle} -   {base1.titleDes}
            </h4>
            <ImageContainer>
              <Link href="/">
                <a>
                  <img src={base1.img} alt="" className="w-100 img-fluid" />
                </a>
              </Link>
            </ImageContainer>
            <Container>
              <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <Col lg={4}>
                  <Row
                    lg={4}
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    {base1.pro.map((data) => (
                      <Col>
                        <CardText>
                          <BrandImage>
                            <img
                              src={data.image}
                              alt=""
                              className="img-fluid "
                              style={{ width: "38px" }}
                            />
                          </BrandImage>
                          {/* <div>
                        <h6 fontSize={2} lineHeight={1.75} mb="0">
                          {data.title}
                        </h6>
                        <Text
                          variant="small"
                          fontSize={2}
                          lineHeight={1.75}
                          mb="0"
                        >
                          {data.description}
                        </Text>
                      </div> */}
                        </CardText>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col lg={8}>
                  <CardTextRigth>
                    <div>
                      {/* <h6 fontSize={2} lineHeight={1.75} mb="0">
                        {base1.title}
                      </h6> */}
                      <Text
                        variant="small"
                        fontSize={2}
                        lineHeight={1.75}
                        mb="0"
                      >
                        {base1.description}
                      </Text>
                    </div>
                  </CardTextRigth>
                </Col>
              </Row>
            </Container>
          </BoxShadow>
        </Card>
      ))}
    </div>
  );
};

export default ProtfolioCard;
