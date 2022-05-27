import {
  AspectRatio,
  GridItem,
  Image,
  Grid,
  Text,
  Button,
} from '@chakra-ui/react';

const Gallery = () => {
  const images = [1, 2, 3, 4].map(
    (index) => `/images/${index}.jpg`
  );

  const first = images[0];
  const nextTwo = [images[1], images[2], images[3]];

  return (
    <Grid
      templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
      templateRows={{ base: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={3}
    >
      <GridItem colSpan={3} rowSpan={3}>
        <AspectRatio ratio={1}>
          <Image
            objectFit="cover"
            rounded={{ base: 'xl', md: '3xl' }}
            src={first}
            alt="Beach House Photo"
          />
        </AspectRatio>
      </GridItem>
      {nextTwo.map((image, index) => (
        <GridItem
          key={image}
          colSpan={1}
          rowSpan={1}
          colStart={{ base: index + 1, md: 4 }}
          rowStart={{ base: 4, md: index + 1 }}
        >
          <AspectRatio ratio={1}>
            <Image
              rounded={{ base: 'xl', md: '3xl' }}
              src={image}
              alt="Beach House Photo"
            />
          </AspectRatio>
        </GridItem>
      ))}
      <GridItem
        colSpan={1}
        rowSpan={1}
        colStart={{ base: 3, md: 4 }}
        rowStart={{ base: 4, md: 3 }}
      >
        
      </GridItem>
    </Grid>
  );
};

export default Gallery;
