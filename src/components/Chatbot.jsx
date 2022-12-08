import React, { useEffect, useState } from "react";
import ChatbotFooter from "./Footer";
import Messages from "../components/Messages";
import { customAnimation, initialMessage, URL } from "../utils/constant";
import axios from "axios";
import { Box } from "@chakra-ui/react";

function Chatbot() {
  const url = URL;

  const apiCall = () => {
    const lastMessage = messages[messages?.length - 1];
    if (lastMessage?.isQuickReply && !lastMessage?.isInitialMessage) {
      return axios
        .post(url, { text: lastMessage?.text })
        .then((result) => {
          const text = result?.data?.data?.fulfillmentText;
          const quickReplies = result?.data?.data?.quickReplies; // to show quick replies buttons
          text?.map((item) =>
            setMessages((old) => [
              ...old,
              {
                from: "computer",
                text:
                  item ||
                  "Sorry i am facing a technical glitch, please checkout our website for more details about our services",
                quickReplies: quickReplies,
              },
            ])
          );
        })
        .catch((err) => {
          setMessages((old) => [
            ...old,
            { from: "computer", text: "Sorry i am currently offline" },
          ]);
        });
    }
  };

  const [messages, setMessages] = useState([initialMessage]); // initialMessage is initial templete message of chatbot
  const [inputMessage, setInputMessage] = useState(""); // input message state manager

  useEffect(() => {
    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages?.length]); // calles the api when ever new message received.

  // send button handler
  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    // calles the api on click of enter
    axios
      .post(url, { text: data })
      .then((result) => {
        const text = result?.data?.data?.fulfillmentText;
        const quickReplies = result?.data?.data?.quickReplies;
        text?.map((item) =>
          setMessages((old) => [
            ...old,
            {
              from: "computer",
              text:
                item ||
                "Sorry i am facing a technical glitch, please checkout our website for more details about our services",
              quickReplies: quickReplies,
            },
          ])
        );
      })
      .catch((err) => {
        setMessages((old) => [
          ...old,
          { from: "computer", text: "Sorry i am currently offline" },
        ]);
      });
  };

  return (
    <Box pb={"50px"}>
      <Messages
        messages={messages}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
        setMessages={setMessages}
      />
      <ChatbotFooter
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
        setMessages={setMessages}
      />
    </Box>
  );
}

export default Chatbot;
