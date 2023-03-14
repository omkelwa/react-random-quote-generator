import {  createContext,  useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext()

export const  GlobalProvider = ({children})=>{

    const intialState = {
        quote : {
            author:"Albert Einstein",
            content:"A man should look for what is, and not for what he thinks should be.",
            tags:""
        }
    }

    const [state, dispatch] = useReducer(GlobalReducer , intialState)
    return(
        <GlobalContext.Provider value={{
            ...state, 
            dispatch
        }} >
                {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext