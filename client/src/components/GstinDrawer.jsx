import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

function GstinDrawer({ isOpen, onClose }) {
  const [gstins, setGstins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);

      // Fetch GSTINs from the API
      axios
        .get("https://gstin-c2rb.onrender.com/gstin/search/all")
        .then((response) => {
          setGstins(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching GSTINs:", error);
          setLoading(false);
        });
    }
  }, [isOpen]);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Available GSTINs</DrawerHeader>

        <DrawerBody>
          {loading ? (
            <Text>Loading GSTINs...</Text>
          ) : (
            <VStack spacing={4} align="stretch">
              {gstins.map((gstin) => (
                <Text key={gstin} fontSize="lg">
                  {gstin}
                </Text>
              ))}
              {gstins.length === 0 && <Text>No GSTINs available.</Text>}
            </VStack>
          )}
        </DrawerBody>

        <Button onClick={onClose} width="100%" mt="auto">
          Close Drawer
        </Button>
      </DrawerContent>
    </Drawer>
  );
}

export default GstinDrawer;
