import {
    Box,
    Flex,
    Image,
    Stack,
    Heading,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
];

export default function LatestProject({title, subtitle, image, description, githubUrl}) {
    return(
        <Stack
            direction={{ base: 'column', md: 'row' }}
            marginTop={8}
        >
            <Box
                w={{ base: '100%', md: '50%' }}
                p={{ base: '0', md: '5' }}
            >
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    direction={'column'}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        BBVA <br />
                        <Text as={'span'} color={'green.400'}>
                        Ticketing System
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Monetize your content by charging your most loyal readers and reward
                        them loyalty points. Give back to your loyal readers by granting
                        them access to your pre-releases and sneak-peaks.
                    </Text>
                </Stack>
            </Box>

            <Box
                w={{ base: '100%', md: '50%' }}
                p={{ base: '0', md: '5' }}
            >
                <Flex
                    boxShadow={'lg'}
                    maxW={'640px'}
                    direction={{ base: 'column-reverse', md: 'row' }}
                    width={'full'}
                    rounded={'xl'}
                    p={{ base: '0', md: '8' }}
                    justifyContent={'space-between'}
                    position={'relative'}
                    bg={useColorModeValue('white', 'gray.800')}
                    _after={{
                        content: '""',
                        position: 'absolute',
                        height: '21px',
                        width: '29px',
                        left: '35px',
                        top: '-10px',
                        backgroundSize: 'cover',
                    }}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        zIndex: '-1',
                        height: 'full',
                        maxW: '640px',
                        width: 'full',
                        filter: 'blur(40px)',
                        transform: 'scale(0.98)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        top: 0,
                        left: 0,
                        backgroundImage: backgrounds[0],
                    }}
                >
                        <Box
                            w={'100%'}
                            align={'center'}
                        >
                        <Image
                            objectFit='cover'
                            src='https://blog.digimind.com/hs-fs/hubfs/Imported_Blog_Media/giphy-202.gif?width=500&height=375&name=giphy-202.gif'
                            alt='Best of the best'
                        />
                        </Box>
                    
                </Flex>
            </Box>
        </Stack>
    )
}