import React from "react";
import Box from "./Box";

const Section = (props) => {
  return <Box py={[5, null, "80px", 3]} {...props} />;
};

export default Section;
