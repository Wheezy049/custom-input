// src/components/CustomInputField.tsx
"use client"
import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface CustomInputFieldProps {
  type: 'text' | 'password' | 'email';
  label: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({ type, label }) => {
  const [input, setInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (type === 'email' && !e.target.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      setError('Enter correct email format');
    } else {
      setError('');
    }
  };

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a1a', color: 'white', borderRadius: '8px', width: '300px' }}>
      <FormControl isInvalid={error !== ''}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          <Input
            type={type === 'password' && showPassword ? 'text' : type}
            value={input}
            onChange={handleInputChange}
            placeholder={`Enter your ${label.toLowerCase()}`}
            backgroundColor={error ? '#2d2d2d' : '#3d3d3d'}
            borderColor={error ? '#ff4d4d' : '#525252'}
            focusBorderColor={error ? '#ff4d4d' : '#6d6d6d'}
            _hover={{ borderColor: error ? '#ff4d4d' : '#525252' }}
          />
          {type === 'password' && (
            <InputRightElement>
              <button onClick={handleClick}>
                {showPassword ? <ViewOffIcon color="gray.300" /> : <ViewIcon color="gray.300" />}
              </button>
            </InputRightElement>
          )}
        </InputGroup>
        <FormHelperText>This is a hint</FormHelperText>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </div>
  );
};

export default CustomInputField;
