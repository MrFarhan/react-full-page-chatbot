import React, { useEffect, useRef } from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

const Messages = ({ messages, setMessages }) => {
  // always scroll to bottom
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  const badgeChangeHandler = (value) => {
    setMessages((old) => [
      ...old,
      { from: "me", text: value, isQuickReply: true },
    ]);
  };

  return (
    <Flex
      w="100%"
      // h={"360px"}
      // overflowY="scroll"
      flexDirection="column"
      p="3"
      mt="5"
      display={"flex"}
      align={"center"}
      justifyContent={"center"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "410px",
      }}
    >
      {messages.map((item, index) => {
        if (item?.from === "Computer") {
          return (
            <Flex
              key={index}
              w="100%"
              mt={"5px"}
              sx={{ alignItems: "flex-end" }}
            >
              <Avatar
                name="Computer"
                src={
                  "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                }
                bg="blue.300"
                mr={5}
              ></Avatar>
              <Box>
                <Flex
                  bg="white"
                  // bg="gray.100"
                  // color="#65151e"
                  minW="100px"
                  maxW="350px"
                  my="1"
                  p="3"
                  borderRadius={"16px"}
                >
                  <Flex display={"block"} align={"center"}>
                    <Box>
                      {/*  {Text messages from Computer / chatbot} */}
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: String(item.text).replaceAll(/\n/g, "<br />"),
                        }}
                      ></Text>
                    </Box>
                  </Flex>
                </Flex>
                {/* {Chatbot Quick replies} */}
                {item?.quickReplies && (
                  <Box>
                    {item?.quickReplies?.map((value, index) => (
                      <Badge
                        key={index}
                        cursor={"pointer"}
                        mr={2}
                        mb={2}
                        background={"white"}
                        padding={"8px"}
                        borderRadius={"5px"}
                        onClick={() => badgeChangeHandler(value)}
                      >
                        {value}
                      </Badge>
                    ))}
                  </Box>
                )}
              </Box>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="#8756ff"
                borderRadius={"5px"}
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
              >
                {/* {Audio is added in case of future feature of audio player} */}
                {item.type === "inputAudio" ? (
                  <audio src={item?.inputAudio?.blobURL} controls />
                ) : (
                  // {Text messages from opposit user}
                  <Text sx={{ wordBreak: "break-all" }}>{item.text}</Text>
                )}
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
