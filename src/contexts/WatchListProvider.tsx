import React, { createContext, useReducer, useMemo } from "react";
import { getUnixTime } from "date-fns";

const reducer = (state: WatchItem[], action: WatchListActions) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return [action.watchItem, ...state];
    case "SORT":
      if (action.sortByRelease) {
        return state.sort((a, b) =>
          getUnixTime(a.releaseDate) < getUnixTime(b.releaseDate) ? -1 : 1
        );
      } else {
        return state.sort((a, b) => (a.addedDate > b.addedDate ? -1 : 1));
      }
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
  id: number;
  title: string;
  sinopsis: string;
  posterUrl: string;
  releaseDate: Date;
  addedDate: number;
  mediaType: string;
  genres: string;
}

const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
const SORT = "SORT";

interface AddToWatchListAction {
  type: typeof ADD_TO_WATCHLIST;
  watchItem: WatchItem;
}

interface SortAction {
  type: typeof SORT;
  sortByRelease: boolean;
}

type WatchListActions = AddToWatchListAction | SortAction;

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
