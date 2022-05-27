/*import {
  Heading,
  HStack,
  Stack,
  Icon,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  HiOutlineLocationMarker,
  HiLocationMarker,
  HiStar,
} from 'react-icons/hi';
import { CgHeart } from 'react-icons/cg';
import { FiShare2, FiMoreHorizontal } from 'react-icons/fi';
import { BsHouseDoorFill } from 'react-icons/bs';

import IconLabel from './icon-label';

const TitleDetails = () => {
  return (
    <VStack spacing={4} alignItems="stretch">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        <Heading fontSize={{ base: '4xl', lg: '5xl' }}>
          Beach House Belgrade
        </Heading>
        <HStack spacing={4}>
          <IconButton
            variant="pill"
            aria-label="Get location"
            icon={<HiOutlineLocationMarker />}
          />
          <IconButton aria-label="Share" variant="pill" icon={<FiShare2 />} />
          <IconButton
            aria-label="Add to favorites"
            variant="pill"
            icon={<CgHeart />}
          />
          <IconButton
            aria-label="More options"
            variant="pill"
            icon={<FiMoreHorizontal />}
          />
        </HStack>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        spacing={6}
        w={{ base: 'auto', md: 'fit-content' }}
      >
        <IconLabel
          icon={<Icon fontSize={24} as={HiStar} color="yellow.400" />}
          separator={
            <Text color="gray.500" fontWeight="bold">
              ·
            </Text>
          }
        >
          <Text size="md">4.96</Text>
          <Text size="md">26 reviews</Text>
        </IconLabel>
        <IconLabel
          icon={<Icon fontSize={24} as={HiLocationMarker} color="gray.500" />}
        >
          <Text size="md">Belgrade, Serbia</Text>
        </IconLabel>
        <IconLabel
          icon={<Icon fontSize={24} as={BsHouseDoorFill} color="gray.500" />}
          separator={
            <Text color="gray.500" fontWeight="bold">
              ·
            </Text>
          }
        >
          <Text size="md">4 guests</Text>
          <Text size="md">1 bedroom</Text>
          <Text size="md">2 beds</Text>
          <Text size="md">1 bath</Text>
        </IconLabel>
      </Stack>
    </VStack>
  );
};

export default TitleDetails;
*/

import {
  Heading,
  HStack,
  Stack,
  Icon,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  HiOutlineLocationMarker,
  HiLocationMarker,
  HiStar,
} from 'react-icons/hi';
import { CgHeart } from 'react-icons/cg';
import { FiShare2, FiMoreHorizontal } from 'react-icons/fi';
import { BsHouseDoorFill } from 'react-icons/bs';

import IconLabel from './icon-label';

const TitleDetails = () => {
  return (
    <VStack spacing={4} alignItems="stretch">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        <Heading fontSize={{ base: '4xl', lg: '5xl' }}>
          Winter House Ushuaia
        </Heading>
        <HStack spacing={4}>
          <IconButton
            variant="pill"
            aria-label="Get location"
            icon={<HiOutlineLocationMarker />}
          />
          <IconButton aria-label="Share" variant="pill" icon={<FiShare2 />} />
          <IconButton
            aria-label="Add to favorites"
            variant="pill"
            icon={<CgHeart />}
          />
          <IconButton
            aria-label="More options"
            variant="pill"
            icon={<FiMoreHorizontal />}
          />
        </HStack>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        spacing={6}
        w={{ base: 'auto', md: 'fit-content' }}
      >
        <IconLabel
          icon={<Icon fontSize={24} as={HiStar} color="yellow.400" />}
          separator={
            <Text color="gray.500" fontWeight="bold">
              ·
            </Text>
          }
        >
          <Text size="md">4.96</Text>
          <Text size="md">26 reviews</Text>
        </IconLabel>
        <IconLabel
          icon={<Icon fontSize={24} as={HiLocationMarker} color="gray.500" />}
        >
          <Text size="md">Ushuaia, Argentina</Text>
        </IconLabel>
        <IconLabel
          icon={<Icon fontSize={24} as={BsHouseDoorFill} color="gray.500" />}
          separator={
            <Text color="gray.500" fontWeight="bold">
              ·
            </Text>
          }
        >
          <Text size="md">4 guests</Text>
          <Text size="md">1 bedroom</Text>
          <Text size="md">2 beds</Text>
          <Text size="md">1 bath</Text>
        </IconLabel>
      </Stack>
    </VStack>
  );
};

export default TitleDetails;

