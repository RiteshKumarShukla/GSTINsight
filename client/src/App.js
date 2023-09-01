import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GST from "./components/GST";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <GST />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
