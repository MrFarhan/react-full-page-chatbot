import axios from "axios";
import React from "react";
import { useState } from "react";
import Chatbot from "../components/Chatbot";
import Layout from "../Layout";
import { URL } from "../utils/constant";

function Chat({questions}) {
  return (
    <Layout>
      <Chatbot questions={questions}/>
    </Layout>
  );
}

export default Chat;
