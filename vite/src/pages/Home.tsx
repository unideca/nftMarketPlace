import { Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return ( 
    <Flex width="full" flexDir="column" >
      <Flex flexDir="column" alignItems="center">
        <Flex alignItems="center" mt={100}>
          <Text 
          width={100}
          fontSize="4xl"
          >SLIM
          </Text>
        </Flex>
        <Text 
        width="250px"
        fontSize="2xl"
        mt={4}
        >Don't miss your chance to own the world's best slime meme coin!
        </Text>
      </Flex>
      <Flex gap={10} mt={14} justifyContent="center">
        <Link to="https://x.com/home">
          <Image width={12} height={12} src="https://static.wixstatic.com/media/1f3f2b_8eaff3e5f42b45f88cf11d418e25d5e6~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twitter%20(2).png"/>
        </Link>
        <Link to="https://web.telegram.org/k/">
        <Image width={12} height={12} src="https://static.wixstatic.com/media/1f3f2b_0078029a112449e5b8d712401bfbd5ac~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/telgrrgrgrgr.png"/>
        </Link>
        <Link to="https://etherscan.io/">
        <Image width={12} height={12} src="https://static.wixstatic.com/media/1f3f2b_95d714edb8484668b50ec07fb8b4f394~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/etherscan.png"/>
        </Link>
        <Link to="https://uniswap.org/">
        <Image width={12} height={12} src="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/uniswap%20(2).png"/>
        </Link>
      </Flex>
      <Flex mt={14} justifyContent="center">
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
          height={120}
          width={600}
          gap={4}>
            <Link to="https://www.gemini.com/">
              <Button fontSize="xl" w="100%" h="100%">gemini</Button>
            </Link>
            <Link to="https://www.binance.com/en">
              <Button fontSize="xl" w="100%" h="100%">binance</Button>
            </Link>
            <Link to="https://crypto.com/">
              <Button fontSize="xl" w="100%" h="100%">crypto.com</Button>
            </Link>
            <Link to="https://www.bybit.com/en">
              <Button fontSize="xl" w="100%" h="100%">bybit</Button>
            </Link>
            <Link to="https://www.okx.com/">
              <Button fontSize="xl" w="100%" h="100%">okx</Button>
            </Link>
            <Link to="https://www.kucoin.com/">
              <Button fontSize="xl" w="100%" h="100%">kucoin</Button>
            </Link>
        </Grid>
      </Flex>
    </Flex>
    );
};

export default Home;