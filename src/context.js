import React, { useReducer, useContext } from 'react';
import { initialState } from './Reducer/initialState';
import { reducer } from './Reducer/reducer';
import { OPEN_MODAL, CLOSE_MODAL } from './Reducer/actions';
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };
  const closeModal = () => {
    console.log('hi');
    dispatch({ type: CLOSE_MODAL });
  };
  return (
    <AppContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
