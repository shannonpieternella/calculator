import React, { createContext, useReducer, useContext } from 'react';

// Define your initial state and reducer function
const initialState = {
  formOne: {}, // Initial state for form one answers
  formTwo: {}, // Initial state for form two answers
  savedAnswers: {}, // Initial state for saved answers
};

const GlobalStateContext = createContext();

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_ANSWER_FORM_ONE':
      return {
        ...state,
        formOne: { ...state.formOne, [action.payload.questionId]: action.payload.answer },
        savedAnswers: { ...state.savedAnswers, [action.payload.questionId]: action.payload.answer },
      };

    case 'SAVE_ANSWER_FORM_TWO':
      return {
        ...state,
        formTwo: { ...state.formTwo, [action.payload.questionId]: action.payload.answer },
        savedAnswers: { ...state.savedAnswers, [action.payload.questionId]: action.payload.answer },
      };

    default:
      return state;
  }
};

// Create a custom provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to use the global state in components
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
