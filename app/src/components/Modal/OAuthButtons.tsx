import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button>Continue with Google</Button>
      <Button>Some othe providers</Button>
    </Flex>
  );
};
export default OAuthButtons;
