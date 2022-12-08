import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <Box
      sx={{
        // height: "100vh",
        // maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 10,
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f1f2f9",
          height: "auto", 
            minHeight: "calc(100vh - 80px)",
            // maxHeight: "calc(100vh - 80px)",

        }}
      >
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}

export default Layout;
