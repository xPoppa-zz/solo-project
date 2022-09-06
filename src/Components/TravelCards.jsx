import { Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';

const TravelCards = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => {
  console.log(imageUrl);
  return (
    <HStack w="470px">
      <Image
        src={imageUrl}
        h="160px"
        w="125px"
        borderRadius={'5px'}
        filter={'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}
      />
      <VStack align={'left'}>
        <HStack spacing="5px">
          <Image src="./images/Maps.png" />
          <Text variant={'travelCardText'}>{location}</Text>
          <Link variant={'maps-link'} href={googleMapsUrl} isExternal>
            View on Google Maps
          </Link>
        </HStack>
        <Heading variant={'Title'}>{title}</Heading>
        <Text variant={'Date'}>
          {startDate} - {endDate}
        </Text>
        <Text variant={'travelCardText'}>{description}</Text>
      </VStack>
    </HStack>
  );
};

export default TravelCards;
