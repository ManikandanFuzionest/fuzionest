import React from "react";
import Hero from "../sections/landing4/Hero";
import Feature from "../sections/landing4/Feature";
import Clients from "../sections/landing4/Clients";
// import Content1 from "../sections/landing4/Content1";
import Content1 from "../sections/landing2/Content1";
import Content2 from "../sections/landing2/Content2";
// import Content2 from "../sections/landing4/Content2";
import Feature2 from "../sections/landing2/Feature2";
import Testimonial from "../sections/landing4/Testimonial";
import Fact from "../sections/landing4/Fact";
import Pricing from "../sections/landing4/Pricing";
import Faq from "../sections/landing4/Faq";
import Form from "../sections/landing4/Form";
import CTA from "../sections/landing4/CTA";
import PageWrapper from "../components/PageWrapper";
import Reviews from "../sections/reviews/review";

const IndexPage = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />
        {/* <Feature /> */}
        <Clients />
        <Content1 />
        <Content2 />
        <Feature2 />
        {/* <Testimonial /> */}
        {/* <Fact /> */}
        {/* <Pricing /> */}
        <Reviews />
        <Form />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;