import React,{useReducer} from 'react'
import { uiReducer } from './../reducers/uiReducer';
import { types } from './../types/types';
import uiContext from './../context/uiContext';

const UiState = (props) => {
  const initialState={
    darkMode:JSON.parse(localStorage.getItem('darkMode')) || false,
  }
  const [state, dispatch] = useReducer(uiReducer,initialState)
  const setDarkMode=()=>{
      localStorage.setItem('darkMode',JSON.stringify(!state.darkMode))
      dispatch({
          type:types.TOGGLE_DARK,
      })
  }

  return <uiContext.Provider value={{ 
    darkMode:state.darkMode,
    setDarkMode
   }}>
        {props.children}
  </uiContext.Provider>
}

export default UiState