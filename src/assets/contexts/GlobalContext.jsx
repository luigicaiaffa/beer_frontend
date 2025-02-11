import { useContext, createContext } from "react";

const GlobalContext = createContext() 
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
    return <GlobalContext.Provider value={"data"}>{children}</GlobalContext.Provider>;
}