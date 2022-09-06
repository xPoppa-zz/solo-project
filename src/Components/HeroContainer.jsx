import { Flex, StackDivider, VStack } from '@chakra-ui/react';
import data from '../data';
import Navbar from './Navbar';
import TravelCards from './TravelCards';

const HeroContainer = () => {
  const cards = data.map(item => {
    return <TravelCards key={item.id} {...item} />;
  });

  return (
    <VStack justify={'center'} bg="whiteAlpha.200" spacing={'54px'}>
      <Navbar />
      <VStack
        w="550px"
        h="704"
        divider={<StackDivider borderColor="#F5F5F5" borderWidth={'1px'} />}
        spacing={4}
      >
        {cards}
      </VStack>
    </VStack>
  );
};

export default HeroContainer;
