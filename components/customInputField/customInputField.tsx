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
      <FormControl isInvalid={error !== ''}>
        <FormLabel className='text-[#0E0E10] text-xl mb-2'>{label}</FormLabel>
        <InputGroup>
          <Input
            type={type === 'password' && showPassword ? 'text' : type}
            value={input}
            onChange={handleInputChange}
            placeholder={`Enter your ${label.toLowerCase()}`}
            backgroundColor={error ? '#fff' : '#fff'}
            borderColor={error ? '#ff4d4d' : '#E9E9E9'}
            focusBorderColor={error ? '#ff4d4d' : '#F97316'}
            _hover={{ borderColor: error ? '#ff4d4d' : '#F97316' }}
            className='px-4 py-3 md:py-5 text-sm md:text-base'
          />
          {type === 'password' && (
            <InputRightElement>
              <button onClick={handleClick}>
                {showPassword ? <ViewOffIcon color="gray.300" /> : <ViewIcon color="gray.300" />}
              </button>
            </InputRightElement>
          )}
        </InputGroup>
        <FormHelperText className='text-[#4D4E51] text-base mt-2'>This is a hint</FormHelperText>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
  );
};

export default CustomInputField;
