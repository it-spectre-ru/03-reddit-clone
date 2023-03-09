import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue width Google
      </Button>
      <Button variant="oauth">Some othe providers</Button>
    </Flex>
  );
};
export default OAuthButtons;
