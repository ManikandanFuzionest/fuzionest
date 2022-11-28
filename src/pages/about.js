import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Hero from '../sections/common/Hero';
import Content from '../sections/about/Content';
import Team from '../sections/about/Team';
import CTA from '../sections/about/CTA';

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="About us"></Hero>
        <Content />
        <Team />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default About;
