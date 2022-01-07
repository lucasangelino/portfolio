import {
  Flex,
  Text,
  chakra,
  Box,
  useColorModeValue,
  HStack,
  Link
} from '@chakra-ui/react';

import Github from '../icons/Github';
import Gmail from '../icons/Gmail';
import Messenger from '../icons/Messenger';
import Linkedin from '../icons/Linkedin';

export default function Freelance() {
  return (
    // TODO: fix tabulation on this component
    <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
          >
            Freelancer
          </Text>
          <chakra.h2
            py={5}
            fontSize={40}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            Puedes contactarme a través 
          </chakra.h2>
        </Box>
        <HStack 
          justifyContent={'center'} 
          spacing={{ base: '10px', sm: '20px', lg: '30px' }} 
          px={5}
        >
          <Link href="mailto:angelino.n.lucas@gmail.com?subject=Freelance Job">
            <Gmail width={50} />
          </Link>
          <Link href="https://github.com/lucasangelino" isExternal>
            <Github width={50} />
          </Link>
          <Link href="https://www.facebook.com/" isExternal>
            <Messenger width={50} />
          </Link>
            <Link href='https://www.linkedin.com/in/lucas-nicolas-angelino/' isExternal>
              <Linkedin width={50} />
            </Link>
        </HStack>
      </Flex>
  );
}