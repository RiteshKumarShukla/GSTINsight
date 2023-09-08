import React, { useState } from "react";
import {
  Flex,
  Text,
  Box,
  Container,
  Input,
  Button,
  VStack,
  Divider,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";

function GST() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allGstinData, setAllGstinData] = useState([]);

  const keyFullForms = {
    gstin: "GSTIN of the Tax Payer",
    einvoiceStatus: "E invoice enablement status",
    lgnm: "Legal Name of Business",
    stj: "State Jurisdiction",
    ctj: "Centre Jurisdiction",
    rgdt: "Date of Registration",
    ctb: "Constitution of Business",
    dty: "Taxpayer type",
    nba: "Nature of Business Activity",
    sts: "GSTN status",
    cxdt: "Date Of Cancellation",
    lstupdt: "Last Updated Date",
    stjCd: "State Jurisdiction Code",
    ctjCd: "Centre Jurisdiction Code",
    tradeNam: "Trade Name",
    adadr: "Additional Place of Business Fields",
    addr: "Additional place of business address",
    bnm: "Building Name",
    st: "Street",
    loc: "Location",
    bno: "Door Number",
    stcd: "State name",
    flno: "Floor Number",
    lt: "Lattitude",
    lg: "Longitude",
    pncd: "Pin Code",
    ntr: "Nature of Additional place of business",
    pradr: "Principal Place of Business fields",
    addr: "Principal Place of Business Address",
    bnm: "Building Name",
    st: "Street",
    loc: "Location",
    bno: "Door Number",
    stcd: "State name",
    flno: "Floor Number",
    lt: "Lattitude",
    lg: "Longitude",
    pncd: "Pin Code",
    ntr: "Nature of principal place of Business",
  };
  const handleSearch = async () => {
    try {
      setErrorMessage("");
      setLoading(true);

      if (!searchValue) {
        setErrorMessage("Please enter a GSTIN/UIN.");
        setFilteredData({});
        setLoading(false);
        return;
      }

      // Update the URL to include the searchValue
      const response = await axios.get(
        `https://gstin-c2rb.onrender.com/gstin/search/${searchValue}`
      );
      console.log("API Response:", response.data);

      if (!response.data || Object.keys(response.data).length === 0) {
        setErrorMessage("No data found for the provided GSTIN/UIN.");
        setFilteredData({});
      } else if (searchValue === response.data.gstin) {
        setErrorMessage("");
        setFilteredData(response.data);
      } else {
        setErrorMessage("No data found for this GSTIN.");
        setFilteredData({});
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while fetching data.");
      setFilteredData({});
      setLoading(false);
    }
  };

  const openModal = async () => {
    try {
      const response = await axios.get(
        "https://gstin-c2rb.onrender.com/gstin/all"
      );
      if (response.data && response.data.length > 0) {
        setAllGstinData(response.data);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error fetching all GSTINs:", error);
    }
  };

  return (
    <Box py="12">
      <Container maxW="container.xl">
        <Text fontSize="2xl" fontWeight="bold" mb="4" ml="4">
          Search Taxpayer
        </Text>
        <Flex mb="4" pl="4" pr="4">
          <Input
            placeholder="Enter GSTIN/UIN of The TaxPayer..."
            size="lg"
            marginRight="2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button bg="#2c4e86" color="white" size="lg" onClick={handleSearch}>
            Search
          </Button>
          <Button
            ml="2"
            size="lg"
            bg="#2c4e86"
            color="white"
            onClick={openModal}
          >
            See All GSTINs
          </Button>
        </Flex>

        {errorMessage && (
          <Text ml={4} color="red.500">
            {errorMessage}
          </Text>
        )}
        {loading ? (
          <Flex justify="center" align="center" height="200px">
            <Spinner size="lg" color="blue.500" />
          </Flex>
        ) : (
          <VStack align="stretch" spacing="4">
            <Box p="4" borderRadius="md" boxShadow="md">
              {Object.keys(filteredData).map((key) => (
                <React.Fragment key={key}>
                  {typeof filteredData[key] === "object" ? (
                    <React.Fragment>
                      <Text fontWeight="bold">{keyFullForms[key]}</Text>
                      {Object.keys(filteredData[key].addr || {}).map(
                        (subKey) => (
                          <Flex key={subKey} justify="space-between" mb="2">
                            <Text w="40%">{keyFullForms[subKey]}</Text>
                            <Text w="60%">
                              {filteredData[key].addr[subKey] || "NA"}
                            </Text>
                          </Flex>
                        )
                      )}
                    </React.Fragment>
                  ) : (
                    <Flex justify="space-between" mb="2">
                      <Text fontWeight="bold" w="40%">
                        {keyFullForms[key]}
                      </Text>
                      <Text w="60%">
                        {Array.isArray(filteredData[key])
                          ? filteredData[key].length === 0
                            ? "NA"
                            : filteredData[key].join(", ")
                          : filteredData[key] || "NA"}
                      </Text>
                    </Flex>
                  )}
                  <Divider marginTop={4} marginBottom={4} />
                </React.Fragment>
              ))}
            </Box>
          </VStack>
        )}
      </Container>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>All GSTINs</ModalHeader>
          <Text fontSize="md" color="blue.600" ml="4">
            These are the GSTINs with details available in our database.
          </Text>

          <Text fontSize="md" color="blue.600" ml="4">
            Copy a GSTIN and paste it in the search bar for details.
          </Text>
          <ModalCloseButton />
          <ModalBody>
            {allGstinData.map((gstin, index) => (
              <div key={index}>{gstin}</div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default GST;
