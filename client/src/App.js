import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MidSection from "./components/GST";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <MidSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
