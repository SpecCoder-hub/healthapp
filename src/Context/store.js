import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  data: []
};

const StoreContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const reducer = (state, action) => {
  return { ...state, ...action };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
