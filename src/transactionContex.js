
import react, { createContext, useReducer } from "react"

import TransactionReducer from "./transReduser"

// export function deltrcord(transobj){
//     dispatch({
//         type:"DELETE_TRANSACTION",
//         payload :transobj.id,
//     })
// }


const initialTransactions = [


];
export const TransactionContex = createContext(initialTransactions)


export const TransactionProvider =  ({children})=>{
    let [state ,dispatch] = useReducer(TransactionReducer ,initialTransactions)

function addTransaction(transobj){
    dispatch({
        type:"ADD_TRANSACTION",
        payload :{
            amount: transobj.amount,
             desc : transobj.desc,
             id: transobj.id
        },
    })
}


return(
    <TransactionContex.Provider value={{
        transactions :state,
        addTransaction,
        dispatch
    }}>
{children}
    </TransactionContex.Provider>
)





}

