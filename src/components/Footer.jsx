import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }}>
    <Box textAlign="center" fontSize="sm">
      &copy; {new Date().getFullYear()} Todo App, Inc. All rights reserved.
    </Box>
  </Box>
);

export default Footer;
