import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const [theme,setTheme] = useState("light");

    const changeTheme = ()=>{

        theme == "light" ? setTheme("dark") : setTheme("light");
    }
    return (
        <AppContext.Provider value={[theme, changeTheme]}>
            <h1>context</h1>
            {children}
        </AppContext.Provider>
    )
}