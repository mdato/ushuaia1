/*
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  Stack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems={{ base: 'stretch', md: 'center' }}
      w="full"
    >
      <Button leftIcon={<IoIosArrowBack />} variant="outline" rounded="full">
        Go home
      </Button>
      <Breadcrumb
        spacing={2}
        separator={<IoIosArrowForward size={18} color="gray.500" />}
        color="gray.500"
        fontWeight="semibold"
      >
        <BreadcrumbItem>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Apartments</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Serbia</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="brand.500">Belgrade</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Stack>
  );
};

export default Header;
*/

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  Stack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems={{ base: 'stretch', md: 'center' }}
      w="full"
    >
      <Button leftIcon={<IoIosArrowBack />} variant="outline" rounded="full">
        Go home
      </Button>
      <Breadcrumb
        spacing={2}
        separator={<IoIosArrowForward size={18} color="gray.500" />}
        color="gray.500"
        fontWeight="semibold"
      >
        <BreadcrumbItem>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Apartments</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Argentina</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="brand.500">Ushuaia</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Stack>
  );
};

export default Header;

