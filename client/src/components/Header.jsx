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
    <Flex direction="column" position="sticky" top="0" zIndex="999">
      {/* Top Section */}
      <Flex
        align="center"
        justify="flex-end"
        h={{ base: "auto", md: "30px" }}
        bg="#041447"
        p="3"
        pr="14%"
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
        p="2"
        pr="14%"
        pl="14%"
      >
        <Flex align="center">
          <Image
            src="https://static.gst.gov.in/uiassets/images/Emblem_of_India-white.svg"
            alt="Logo"
            h="50px"
            pr="3"
            mr="3"
          />
          <Text fontSize="35px" color="white">
            Goods and Service Tax
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontSize="sm" color="white" mx="3">
            <ArrowForwardIcon mx="1" />
            Login
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
        pr="12%"
        pl="12%"
      >
        {[
          { icon: CalendarIcon, label: "Home" },
          { icon: PhoneIcon, label: "Services" },
          { icon: SearchIcon, label: "GST Law" },
          { icon: DownloadIcon, label: "Downloads" },
          { icon: QuestionIcon, label: "Search Taxpayer" },
          { icon: AtSignIcon, label: "Help and Taxpayer Facilities" },
          { icon: ExternalLinkIcon, label: "e-Invoice" },
        ].map((item) => (
          <Text
            key={item.label}
            fontSize="md"
            color="white"
            _hover={{
              cursor: "pointer",
              color: "#17c5ba",
              fontSize: "lg",
              transition: "color 0.3s, font-size 0.3s",
            }}
          >
            <Icon as={item.icon} /> {item.label}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}

export default Header;
