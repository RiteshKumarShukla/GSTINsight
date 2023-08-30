import React from "react";
import {
  Flex,
  Text,
  Icon,
  Image,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  AddIcon,
  MinusIcon,
  SearchIcon,
  QuestionIcon,
  DownloadIcon,
  AtSignIcon,
  ExternalLinkIcon,
  CalendarIcon,
  PhoneIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column">
      {/* Top Section */}
      <Flex
        align="center"
        justify="flex-end"
        h={{ base: "auto", md: "30px" }}
        bg="#041447"
        p="2"
        pr="190px"
        pl="190px"
      >
        <Text fontSize="sm" color="white">
          Skip to Main Content <AddIcon mx="1" /> <MinusIcon mx="1" />
        </Text>
      </Flex>

      {/* Mid Section */}
      <Flex
        align="center"
        justify="space-between"
        bg="#0b1f58"
        p="4"
        pr="190px"
        pl="190px"
      >
        <Flex align="center">
          <Image
            src="https://static.gst.gov.in/uiassets/images/Emblem_of_India-white.svg"
            alt="Logo"
            h="50px"
            pr="3"
          />
          <Text fontSize="40px" color="white">
            Goods & Service Tax
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontSize="sm" color="white" mx="3">
          <ArrowForwardIcon mx="1" />Login
          </Text>
          <IconButton
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            aria-label="Toggle Theme"
            ml="2"
            size="sm"
          />
        </Flex>
      </Flex>

      {/* Bottom Section */}
      <Flex
        align="center"
        justify="space-around"
        bg="#2c4e86"
        p="2"
        pr="190px"
        pl="190px"
      >
        <Text fontSize="md" color="white">
          <Icon as={CalendarIcon} /> Home
        </Text>
        <Text fontSize="md" color="white">
          <Icon as={PhoneIcon} /> Services
        </Text>
        <Text fontSize="md" color="white">
          <Icon as={SearchIcon} /> GST Law
        </Text>
        <Text fontSize="md" color="white">
          <Icon as={DownloadIcon} /> Downloads
        </Text>
        <Text fontSize="md" color="white">
          <Icon as={QuestionIcon} /> Search Taxpayer
        </Text>
        <Text fontSize="md" color="white">
          <Icon as={AtSignIcon} /> Help and Taxpayer Facilities
        </Text>
        <Text fontSize="md" color="white">
          <Icon as={ExternalLinkIcon} /> e-Invoice
        </Text>
      </Flex>
    </Flex>
  );
}

export default Header;
