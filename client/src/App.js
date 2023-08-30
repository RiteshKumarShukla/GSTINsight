import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import GSTDetailsComponent from "./components/GST";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header/>
        <GSTDetailsComponent />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
