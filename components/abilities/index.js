import { Image } from '@chakra-ui/react'
import { Wrap, Container, WrapItem, Text, Center } from "@chakra-ui/layout";
import Angular from '../icons/Angular'
import JavaScript from '../icons/JavaScript'
import React from '../icons/React'
import Css from '../icons/Css'
import Docker from '../icons/Docker'
import Firebase from '../icons/Firebase'
import Git from '../icons/Git'
import Html from '../icons/Html'
import Jest from '../icons/Jest'
import Mongo from '../icons/Mongo'
import Npm from '../icons/Npm'
import Redis from '../icons/Redis'

// styles
import { brandColor } from "../../theme/constants";

export default function Abilities() {
  const { BRAND_500 } = brandColor;

  return (
    <Container maxW={"7xl"} my={{base: 10, md: 50}} >
      <Text fontSize="6xl" color={BRAND_500} mb={20} align={'center'}>
        Mis habiliades 🐱‍🏍
      </Text>
      <Center>
      <Wrap spacing='60px' justify='center'>

        {/* Javascript */}
        <WrapItem>
          <JavaScript width={100} height={100} />
        </WrapItem>

        {/* Angular */}
        <WrapItem>
          <Angular width={100} height={100} />
        </WrapItem>

        {/* React */}
        <WrapItem>
          <React width={100} height={100} />
        </WrapItem>

        {/* Css */}
        <WrapItem>
          <Css width={100} height={100} />
        </WrapItem>

        {/* Docker */}
        <WrapItem>
          <Docker width={100} height={100} />
        </WrapItem>

        {/* Firebase */}
        <WrapItem>
          <Firebase width={100} height={100} />
        </WrapItem>

        {/* Git */}
        <WrapItem>
          <Git width={100} height={100} />
        </WrapItem>

        {/* Html */}
        <WrapItem>
          <Html width={100} height={100} />
        </WrapItem>

        {/* Jest */}
        <WrapItem>
          <Jest width={100} height={100} />
        </WrapItem>

        {/* Mongo */}
        <WrapItem>
          <Mongo width={100} height={100} />
        </WrapItem>

        {/* Npm */}
        <WrapItem>
          <Npm width={100} height={100} />
        </WrapItem>

        {/* Redis */}
        <WrapItem>
          <Redis width={100} height={100} />
        </WrapItem>
        
      </Wrap>
      </Center>
    </Container>
  );
}
