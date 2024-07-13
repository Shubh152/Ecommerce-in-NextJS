import { Box, Image } from "@chakra-ui/react";

export default function ThumbNail({ handler,imgUrl }) {
  return (
    <button onClick={handler}>
      <Box
        maxWidth="200px"
        minWidth="100px"
        height="100px"
        borderRadius="md"
        borderWidth="1px"
        borderColor="brand.600"
      >
        <Image src={imgUrl} />
      </Box>
    </button>
  );
}
