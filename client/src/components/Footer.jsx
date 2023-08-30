import React from "react";
import { Box, Flex, Text, Container, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <Box bg="#14305c" color="white">
      <Container maxW="container.lg" py="8">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          {/* About GST */}
          <Box
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              About GST
            </Text>
            <Text fontSize="sm">
              GST Council Structure
              <br />
              GST History
            </Text>
          </Box>

          {/* Website Policies */}
          <Box
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              Website Policies
            </Text>
            <Text fontSize="sm">
              Website Policy
              <br />
              Terms and Conditions
              <br />
              Hyperlink Policy
              <br />
              Disclaimer
            </Text>
          </Box>

          {/* Related Sites */}
          <Box
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              Related Sites
            </Text>
            <Text fontSize="sm">
              Central Board of Indirect Taxes and Customs
              <br />
              State Tax Websites
              <br />
              National Portal
              <br />
              Help and Taxpayer Facilities
            </Text>
          </Box>

          {/* Help & Taxpayer Facilities */}
          <Box
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              Help & Taxpayer Facilities
            </Text>
            <Text fontSize="sm">
              System Requirements
              <br />
              GST Knowledge Portal
              <br />
              GST Media
              <br />
              Site Map
              <br />
              Grievance Nodal Officers
              <br />
              Free Accounting and Billing Services
              <br />
              GST Suvidha Providers
            </Text>
          </Box>
          {/* Contact Us */}
          <Box
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              Contact Us
            </Text>
            <Text fontSize="sm">
              Help Desk Number: 1800-103-4786
              <br />
              Log/Track Your Issue: Grievance Redressal Portal for GST
            </Text>
            <IconButton
              as="a"
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              mx="2"
              my="2"
              size="sm"
            />
            <IconButton
              as="a"
              href="https://youtube.com"
              target="_blank"
              aria-label="YouTube"
              icon={<FaYoutube />}
              mx="2"
              my="2"
              size="sm"
            />
            <IconButton
              as="a"
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              mx="2"
              my="2"
              size="sm"
            />
            <IconButton
              as="a"
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              icon={<FaFacebook />}
              mx="2"
              my="2"
              size="sm"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
