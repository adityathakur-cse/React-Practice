import React, {useState} from 'react'
import ThemeGetter from './ThemeGetter';
export const themeContext = React.createContext(); 
const ThemeProvider = () => {
    const [theme, setTheme] = useState('light');
  return (
    <div>
      <themeContext.Provider value={{theme, setTheme}}>
        <ThemeGetter/>
      </themeContext.Provider>
    </div>
  )
}

export default ThemeProvider
