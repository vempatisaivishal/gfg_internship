import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [errInfo, setErrInfo] = useState({});
    const [critetia, setCriteria] = useState({});
    const [additonal, setAdditional] = useState({});

    const value = {
        errInfo, 
        setErrInfo,
        critetia, 
        setCriteria,
        additonal, 
        setAdditional
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}