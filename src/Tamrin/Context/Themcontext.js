
import { createContext, useReducer} from "react";
export const Them = createContext()
const initstate={
    color:"rgb(26, 24, 65)",
    mode:"dark"
}

const user =(state,option)=>{
    switch (option.type) {
        case "change":
            return {...state,color:option.color};
        case "mode":
            return {...state,mode:option.mode};
        default:
            return state
    }
}
export function Themppp({children}) {
    const [state,dispatch]=useReducer(user,initstate)
    function change(params) {
        dispatch({type:"change",color:params})
    }
    function changemode(params) {
        dispatch({type:"mode",mode:params})
    }

    return(
        <Them.Provider value={{...state,change,changemode}} > 
            {children}
        </Them.Provider>
    )
    }

