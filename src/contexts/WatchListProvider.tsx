import React, { createContext, useReducer, useMemo } from "react";

const reducer = (state: WatchItem[], action: WatchListActions) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return [...state, action.watchItem];
    case "FILTER":
      return state.filter((watchItem) => watchItem.media_type === action.mediaType);
    default:
      return state;
  }
};

const initialState = {
  state: [],
  dispatch: () => null,
};

export const WatchListContext = createContext<{
  state: WatchItem[];
  dispatch: React.Dispatch<any>;
}>(initialState);

interface WatchItem {
  id: string;
  title: string;
  overview: string;
  poster_url: string;
  release_date: Date;
  added_date: number;
  media_type: string;
  genres: string;
}

const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
const FILTER = "FILTER";

interface AddToWatchListAction {
  type: typeof ADD_TO_WATCHLIST;
  watchItem: WatchItem;
}

interface FilterAction {
  type: typeof FILTER;
  mediaType: string;
}

type WatchListActions = AddToWatchListAction | FilterAction;

interface Props {
  children: React.ReactNode;
}

const WatchListProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, []);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <WatchListContext.Provider value={contextValue}>{children}</WatchListContext.Provider>
  );
};

export default WatchListProvider;
