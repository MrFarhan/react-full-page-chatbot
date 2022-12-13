import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Chatbot from "./components/Chatbot";
import { Route, useParams } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routing />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
