// // Home.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { describe, it, expect, vi } from 'vitest';
// import Home from './page';

// describe('Home component', () => {
//   it('renders correctly with given props', () => {
//     const handleChange = vi.fn();

//     render(
//       <Home
//         label="Test Label"
//         placeholder="Test Placeholder"
//         hint="Test Hint"
//         type="text"
//         value="Test Value"
//         onChange={handleChange}
//         error={false}
//       />
//     );

//     const labelElement = screen.getByText(/Test Label/i);
//     const hintElement = screen.getByText(/Test Hint/i);
//     const inputElement = screen.getByPlaceholderText(/Test Placeholder/i);

//     expect(labelElement).toBeInTheDocument();
//     expect(hintElement).toBeInTheDocument();
//     expect(inputElement).toBeInTheDocument();
//   });

//   it('calls onChange handler when input value changes', () => {
//     const handleChange = vi.fn();

//     render(
//       <Home
//         label="Test Label"
//         placeholder="Test Placeholder"
//         hint="Test Hint"
//         type="text"
//         value=""
//         onChange={handleChange}
//         error={false}
//       />
//     );

//     const inputElement = screen.getByPlaceholderText(/Test Placeholder/i);

//     fireEvent.change(inputElement, { target: { value: 'New Value' } });
//     expect(handleChange).toHaveBeenCalled();
//   });
// });
