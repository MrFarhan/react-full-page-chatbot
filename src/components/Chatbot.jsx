import React, { useState } from "react";
import ChatbotFooter from "./Footer";
import Messages from "../components/Messages";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { URL } from "../utils/constant";
import { useSearchParams } from "react-router-dom";

function Chatbot({ questions }) {
  let formatedQuestions = questions.map((item) => ({
    from: "Computer",
    text: item,
  }));

  // eslint-disable-next-line
  const [searchParams, _] = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const clientId = searchParams.get("clientId");
  const sheetId = searchParams.get("sheetId");
  const tabId = searchParams.get("tabId");

  let data = {
    surveyId,
    clientId,
    sheetId,
    tabId,
  };

  const [messages, setMessages] = useState([formatedQuestions[0]]); // initialMessage is initial templete message of chatbot
  const [inputMessage, setInputMessage] = useState(""); // input message state manager

  // send button handler
  let answers = messages?.filter((item) => item?.from === "me");
  const isInputDisabled = answers.length >= formatedQuestions.length;

  const SaveAnswers = (prevAns) => {
    axios
      .post(`${URL}/save-answers`, { answers: prevAns, ...data })
      .then((res) => {
        console.log("save answers  is", res.data());
      })
      .catch((err) => {
        console.log("error is", err);
      });
  };
  const handleSendMessage = () => {
    let previousAnswers = [...answers];
    // extra validation if disable button is removed
    if (answers.length >= formatedQuestions.length) {
      return setMessages((old) => [
        ...old,
        { from: "Computer", text: "Thank you for filling this survey" },
      ]);
    }

    if (!inputMessage.trim().length) {
      return;
    }

    setMessages((old) => [...old, { from: "me", text: inputMessage }]);
    setInputMessage("");

    // automaticly send computer message after 1 minute interval
    setTimeout(() => {
      if (answers.length < formatedQuestions.length-1) {
        setMessages((old) => [...old, formatedQuestions[answers.length + 1]]);
      }
      // checks for last answer, answers array starts from 0
      if (answers.length === formatedQuestions.length-1) {
        previousAnswers.push({ from: "me", text: inputMessage });
        SaveAnswers(previousAnswers);
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
        disable={isInputDisabled}
      />
    </Box>
  );
}

export default Chatbot;
