import React, {  useState } from "react";
import ChatbotFooter from "./Footer";
import Messages from "../components/Messages";
import { Box } from "@chakra-ui/react";

function Chatbot({ questions }) {
  let formatedQuestions = questions.map((item) => ({
    from: "Computer",
    text: item,
  }));

  const [messages, setMessages] = useState([formatedQuestions[0]]); // initialMessage is initial templete message of chatbot
  const [inputMessage, setInputMessage] = useState(""); // input message state manager

  // send button handler
  let answersLength = messages?.filter((item) => item?.from === "me");
  const isInputDisabled = answersLength.length >= formatedQuestions.length - 1;
  const handleSendMessage = () => {
    if (answersLength.length >= formatedQuestions.length - 1) {
      return setMessages((old) => [
        ...old,
        { from: "Computer", text: "Thank you for filling this survey" },
      ]);
    } else {
      if (messages.length == formatedQuestions.length)
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
    }
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
