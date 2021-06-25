import React, {createContext,useContext,useReducer} from 'react'

export const AuthContext = createContext() 

export const Auth = ({reducer,initialState,children})=>(
    <AuthContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AuthContext.Provider>
)
export const useStateValue = () => useContext(AuthContext)