import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";


export default function ThemeProvider({children}){

    const [theme,setTheme] = useState(localStorage.getItem('theme') ?? 'light')

    useEffect(()=>{
        checkTheme();

    },[theme])

    function checkTheme(newTheme){
        document.body.setAttribute('data-theme',theme)
        localStorage.setItem('theme',theme);

    }

    function changeTheme(newTheme){
        setTheme(newTheme)

    }

    return (
        <ThemeContext.Provider value={{theme:theme,changeTheme:changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}