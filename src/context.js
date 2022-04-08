import React, { useReducer, useContext } from 'react';
import { initialState } from './Reducer/initialState';
import { reducer } from './Reducer/reducer';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  HANDLE_CHANGE,
  HANDLE_SUBMIT,
} from './Reducer/actions';
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    localStorage.setItem('note', JSON.stringify(state.notes));
  }, [state.notes]);

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = Object.values(state.note).includes('');
    if (!val) {
      dispatch({ type: HANDLE_SUBMIT });
    }
  };
  return (
    <AppContext.Provider
      value={{ ...state, openModal, closeModal, handleChange, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
