import { Box, Heading, Text, Stack, Badge, Grid } from "@chakra-ui/react";

const GSTDetailsComponent = () => {
  const data = {
    ntcrbs: "MFT",
    adhrVFlag: "Yes",
    lgnm: "SUZLON ENERGY LTD",
    stj: "State - Andhra Pradesh,Division - Anantapur,Circle - ANANTHAPUR-II (Jurisdictional Office)",
    dty: "Regular",
    cxdt: "",
    gstin: "37AADCS0472N1Z1",
    nba: [
      "Works Contract",
      "Office / Sale Office",
      "Recipient of Goods or Services",
      "Service Provision",
      "Factory / Manufacturing",
      "Warehouse / Depot",
    ],
    ekycVFlag: "Not Applicable",
    cmpRt: "NA",
    rgdt: "01/07/2017",
    ctb: "Public Limited Company",
    pradr: {
      adr: "6-3-219, RAMNAGAR Extension, ANANTAPUR, ANANTAPUR, Ananthapuramu, Andhra Pradesh, 515004",
    },
    sts: "Active",
    tradeNam: "SUZLON ENERGY LTD",
    isFieldVisitConducted: "No",
    adhrVdt: "16/03/2023",
    ctj: "Commissionerate - TIRUPATI,Division - ANANTAPUR,Range - ANANTAPUR - 1 RANGE",
    einvoiceStatus: "Yes",
  };

  console.log(data)
  return (
    <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading as="h2" size="lg" mb={4}>
        GST Details for {data.tradeNam}
      </Heading>
      <Stack spacing={4}>
        <Text>
          <strong>Legal Name:</strong> {data.lgnm}
        </Text>
        <Text>
          <strong>GSTIN:</strong> {data.gstin}
        </Text>
        <Text>
          <strong>Status:</strong> {data.sts}
        </Text>
        <Text>
          <strong>Address:</strong> {data.pradr.adr}
        </Text>
        {/* ... (other data fields) */}
        <Text>
          <strong>Business Activities:</strong>
        </Text>
        <Stack direction="row" spacing={2}>
          {data.nba.map((activity, index) => (
            <Badge key={index} colorScheme="blue">
              {activity}
            </Badge>
          ))}
        </Stack>
      </Stack>
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={4}
        mt={4}
      >
        <Box>
          <Text>
            <strong>Trade Name:</strong> {data.tradeNam}
          </Text>
          <Text>
            <strong>Registration Date:</strong> {data.rgdt}
          </Text>
          {/* Add more data fields here */}
        </Box>
        <Box>
          <Text>
            <strong>Constitution:</strong> {data.ctb}
          </Text>
          <Text>
            <strong>Registration Address:</strong> {data.pradr.adr}
          </Text>
          {/* Add more data fields here */}
        </Box>
        {/* Add more grid items as needed */}
      </Grid>
    </Box>
  );
};

export default GSTDetailsComponent;
