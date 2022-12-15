import { Container, Spinner } from "@chakra-ui/react";
import React from "react";
import "./PageNotFound.scss";

const PageNotFound = ({ loading }) => {
  return loading ? (
    <Container
      maxW={"3xl"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Spinner size="xl" />
    </Container>
  ) : (
    <div className="pageNotFound">
      <div className="fof">
        <h1>Error 404</h1>
      </div>
    </div>
  );
};

export default PageNotFound;
