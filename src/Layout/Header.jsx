import {
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Nav() {
  return (
    <>
      <Box
        bg={useColorModeValue("white.100", "white.900")}
        px={4}
        sx={{ boxShadow: "1px 2px 9px #b9b9b9", zIndex: 9, top: 0 }}
        position={"sticky"}
        top={0}
        background={"white"}
      >
        <Flex
          bg={useColorModeValue("white.100", "white.900")}
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          position={"sticky"}
          top={0}
        >
          <Box>The Info Tech</Box>
        </Flex>
      </Box>
    </>
  );
}
