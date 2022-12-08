import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Chatbot />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
