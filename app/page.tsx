import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import CustomInputField from '@/components/customInputField/customInputField';

const Home: React.FC = () => {
  return (
    <ChakraProvider>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to My Next.js App</h1>
        <CustomInputField type="email" label="Email" />
        <CustomInputField type="password" label="Password" />
        <CustomInputField type="text" label="Username" />
      </div>
    </ChakraProvider>
  );
};

export default Home;