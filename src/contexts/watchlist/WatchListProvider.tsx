import React, { createContext, useReducer, useMemo } from "react";
import watchListReducer, { WatchItem } from "./reducer/watchListReducer";

const initialState = {
  state: [],
  dispatch: () => null,
};

export const WatchListContext = createContext<{
  state: WatchItem[];
  dispatch: React.Dispatch<any>;
}>(initialState);

interface Props {
  children: React.ReactNode;
}

const WatchListProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(watchListReducer, []);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <WatchListContext.Provider value={contextValue}>{children}</WatchListContext.Provider>
  );
};

export default WatchListProvider;
