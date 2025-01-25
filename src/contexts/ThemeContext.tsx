// import React, {
//   createContext,
//   useState,
//   ReactNode,
//   FC,
//   useEffect,
// } from 'react';

// interface ThemeContextType {
//   theme: string;
//   toggleTheme: () => void;
//   // setTheme: React.Dispatch<React.SetStateAction<string>>;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
//   const [theme, setTheme] = useState<string>('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={theme}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeContext, ThemeProvider };
