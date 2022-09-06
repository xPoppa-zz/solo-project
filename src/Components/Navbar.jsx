import { Flex, HStack, Image, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      bg="#F55A5A"
      h="55px"
      w="550px"
      justifyContent={'center'}
      borderRadius="1px"
    >
      <HStack paddingTop={'30px'}>
        <Image src="./images/Planet.png" />
        <Text padding={'0px'} fontSize="14px" color={'white'}>
          my travel journal.
        </Text>
      </HStack>
    </Flex>
  );
};

export default Navbar;
