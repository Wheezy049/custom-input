// src/pages/index.tsx

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



// import Image from "next/image";


// export default function Home() {
//   return (
//     <div></div>
//   );
// }

// "use client";

// interface HomeProps {
//   label: string;
//   placeholder: string;
//   hint: string;
//   type?: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   error?: boolean;
//   showPassword?: boolean;
// }

// export default function Home({
//   label,
//   placeholder,
//   hint,
//   type = "text",
//   value,
//   onChange,
//   error,
//   showPassword = false,
// }: HomeProps) {
//   return (
//     <div className="mb-4">
//       <label className="block text-white mb-2">{label}</label>
//       <div className="relative">
//         <input
//           type={showPassword && type === "password" ? "text" : type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className={`w-full px-4 py-3 md:py-5 text-sm md:text-base border rounded-lg focus:outline-none ${
//             error ? "border-red-500" : "border-[#4D4E51]"
//           } focus:border-[#F97316] text-white`}
//         />
//         {type === "password" && (
//           <span className="absolute right-3 top-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="cursor-pointer"
//               onClick={() => {}}
//             >
//               <path
//                 d="M9.87988 9.87988C9.58514 10.1545 9.34873 10.4857 9.18476 10.8537C9.02079 11.2217 8.93262 11.619 8.92552 12.0218C8.91841 12.4246 8.99251 12.8247 9.14339 13.1983C9.29428 13.5718 9.51885 13.9112 9.80373 14.196C10.0886 14.4809 10.4279 14.7055 10.8015 14.8564C11.175 15.0073 11.5752 15.0814 11.978 15.0742C12.3808 15.0671 12.778 14.979 13.146 14.815C13.514 14.651 13.8452 14.4146 14.1199 14.1199"
//                 stroke="#FFFAF7"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68"
//                 stroke="#FFFAF7"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M6.61 6.60986C4.62125 7.96449 3.02987 9.82512 2 11.9999C2 11.9999 5 18.9999 12 18.9999C13.9159 19.005 15.7908 18.445 17.39 17.3899"
//                 stroke="#FFFAF7"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M2 2L22 22"
//                 stroke="#FFFAF7"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//         )}
//       </div>
//       <p className="text-gray-400 mt-2">{hint}</p>
//       {error && <p className="text-red-500 mt-2">Enter correct email format</p>}
//     </div>
//   );
// }

