import React, { createContext, useReducer, useMemo } from "react";

import darkModeReducer from "./darkModeReducer";

const initialState = {
  state: false,
  dispatch: () => null,
};

export const DarkModeContext = createContext<{
  state: boolean;
  dispatch: React.Dispatch<any>;
}>(initialState);

interface Props {
  children: React.ReactNode;
}

const DarkModeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(darkModeReducer, false);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
