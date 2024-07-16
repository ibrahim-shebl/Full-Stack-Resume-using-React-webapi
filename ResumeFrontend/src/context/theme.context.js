// import { createContext, useState } from "react";

 

// export const ThemeContext = createContext({
//    darkMode: false,
//    toggleDarkMode: () => {},
// });
 

// const ThemeContextProvider = () => {
//    const [darkMode, setDarkMode] = useState(false);

//    const toggleDarkMode = () => {
//       setDarkMode((prevState) => !prevState);
//    };

//    return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}></ThemeContext.Provider>;
// };

// export default ThemeContextProvider;




import { createContext, useState } from "react";

// لا نحتاج إلى تعريف الواجهة في JavaScript
// يمكننا مباشرةً استخدام createContext مع القيم الافتراضية
export const ThemeContext = createContext({
   darkMode: false,
   toggleDarkMode: () => {},
});

// لا نحتاج إلى تعريف أنواع الخصائص في JavaScript
const ThemeContextProvider = ({ children }) => {
   const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setDarkMode((prevState) => !prevState);
   };

   return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider
