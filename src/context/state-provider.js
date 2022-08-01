import React, {createContext, useContext, useReducer} from 'react'
import {initialState} from './initial-state'

export const stateContext = createContext();

export const StateProvider = ({reducer, intialState, children}) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
)

export const useStateValue = () => useContext(stateContext);