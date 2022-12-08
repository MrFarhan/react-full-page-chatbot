import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Text>© 2022 MrFarhan. All rights reserved</Text>
    </Box>
  );
}
