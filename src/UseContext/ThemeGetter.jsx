import React, { useContext } from 'react'
import { themeContext } from './ThemeProvider'

const ThemeGetter = () => {
    const {theme, setTheme} = useContext(themeContext);
    const changeTheme = () => {
        setTheme((toggle) => toggle === "light" ? 'dark' : 'light')
    }
  return (
    <div style={{
            backgroundColor : `${theme === 'light' ? 'white' : 'black'}`,
            color : `${theme === 'light' ? 'black' : 'white'}`,
            padding : 4
        }}>
        
        <div >
            <h2>Mode : {theme}</h2>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default ThemeGetter
