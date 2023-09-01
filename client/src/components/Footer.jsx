import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <Box bg="#14305c" color="white">
      <Container maxW="76%" py="8">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          {/* About GST */}
          <Box
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
            mx="2"
            textAlign="left"
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              About GST
            </Text>
            <Text fontSize="sm">
              GST Council Structure
              <br />
              <br />
              GST History
            </Text>
          </Box>

          {/* Website Policies */}
          <Box
            textAlign="left"
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
            mx="2"
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              Website Policies
            </Text>
            <Text fontSize="sm">
              Website Policy
              <br />
              <br />
              Terms and Conditions
              <br />
              <br />
              Hyperlink Policy
              <br />
              <br />
              Disclaimer
            </Text>
          </Box>

          {/* Related Sites */}
          <Box
            textAlign="left"
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
            mx="2"
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              Related Sites
            </Text>
            <Text fontSize="sm">
              Central Board of Indirect 
              <br />Taxes and Customs
              <br />
              <br />
              State Tax Websites
              <br />
              <br />
              National Portal
              <br />
              <br />
              Help and Taxpayer Facilities
            </Text>
          </Box>

          {/* Help & Taxpayer Facilities */}
          <Box
            textAlign="left"
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
            mx="2"
          >
            <Text
              fontWeight="bold"
              fontSize="lg"
              mb="4"
              color="#3988b0"
              whiteSpace="nowrap"
            >
              Help & Taxpayer Facilities
            </Text>
            <Text fontSize="sm">
              System Requirements
              <br />
              <br />
              GST Knowledge Portal
              <br />
              <br />
              GST Media
              <br />
              <br />
              Site Map
              <br />
              <br />
              Grievance Nodal Officers
              <br />
              <br />
              Free Accounting and Billing Services
              <br />
              <br />
              GST Suvidha Providers
            </Text>
          </Box>
          {/* Contact Us */}
          <Box
            textAlign="left"
            flexBasis={{ base: "100%", md: "20%" }}
            mb={{ base: "4", md: "0" }}
            mx="2"
          >
            <Text fontWeight="bold" fontSize="lg" mb="4" color="#3988b0">
              Contact Us
            </Text>
            <Text fontSize="sm">
              Help Desk Number: 
              <br />1800-103-4786
              <br />
              <br />
              Log/Track Your Issue: <br /> Grievance Redressal Portal for GST
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
              my="8"
              size="sm"
            />
          </Box>
        </Flex>
      </Container>
      <Divider borderColor="#3988b0" my="2" />
      <Flex
        p="4"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        width="70%"
        margin="auto"
      >
        <Text fontSize="sm" textAlign="center" color="#3988b0">
          © 2018-19 Goods and Services Tax Network
        </Text>
        <Text fontSize="sm" textAlign="center" color="#3988b0">
          Site Last Updated on 27-07-2023
        </Text>
        <Text fontSize="sm" textAlign="center" color="#3988b0">
          Designed & Developed by Ritesh Kr. Shukla
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
