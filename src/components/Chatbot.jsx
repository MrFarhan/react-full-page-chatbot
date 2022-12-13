import React, { useEffect, useState } from "react";
import ChatbotFooter from "./Footer";
import Messages from "../components/Messages";
import { customAnimation, initialMessage, URL } from "../utils/constant";
import axios from "axios";
import { Box } from "@chakra-ui/react";

function Chatbot({ questions }) {
  const url = URL;
  let formatedQuestions = questions.map((item) => ({
    from: "Computer",
    text: item,
  }));
  // console.log("questions are", formatedQuestions);
  // const apiCall = () => {
  //   const lastMessage = messages[messages?.length - 1];
  //   if (lastMessage?.isQuickReply && !lastMessage?.isInitialMessage) {
  //     return axios
  //       .post(url, { text: lastMessage?.text })
  //       .then((result) => {
  //         const text = result?.data?.data?.fulfillmentText;
  //         const quickReplies = result?.data?.data?.quickReplies; // to show quick replies buttons
  //         text?.map((item) =>
  //           setMessages((old) => [
  //             ...old,
  //             {
  //               from: "computer",
  //               text:
  //                 item ||
  //                 "Sorry i am facing a technical glitch, please checkout our website for more details about our services",
  //               quickReplies: quickReplies,
  //             },
  //           ])
  //         );
  //       })
  //       .catch((err) => {
  //         setMessages((old) => [
  //           ...old,
  //           { from: "computer", text: "Sorry i am currently offline" },
  //         ]);
  //       });
  //   }
  // };

  const [messages, setMessages] = useState([formatedQuestions[0]]); // initialMessage is initial templete message of chatbot
  const [inputMessage, setInputMessage] = useState(""); // input message state manager

  let answersLength = messages.filter((item) => item.from === "me");

  // send button handler
  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    if (answersLength.length == formatedQuestions.length) {
      return;
    }
    const data = inputMessage;
    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      if (answersLength.length <= formatedQuestions.length) {
        return setMessages((old) => [
          ...old,
          formatedQuestions[answersLength.length + 1],
        ]);
      }
    }, 1000);
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
