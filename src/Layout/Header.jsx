import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
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

          {/* <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex> */}
        </Flex>
      </Box>
    </>
  );
}
