import React from "react";
import Chatbot from "../components/Chatbot";
import Layout from "../Layout";

function Chat({questions}) {
  return (
    <Layout>
      <Chatbot questions={questions}/>
    </Layout>
  );
}

export default Chat;
