import { isBefore, isAfter } from "date-fns";

const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
const SORT_BY_RELEASE_DATE = "SORT_BY_RELEASE_DATE";
const SET_AS_WATCHED = "SET_AS_WATCHED";
const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";

interface AddToWatchListAction {
  type: typeof ADD_TO_WATCHLIST;
  watchItem: WatchItem;
}

interface SortByReleaseDateAction {
  type: typeof SORT_BY_RELEASE_DATE;
  sortByReleaseDate: boolean;
}

interface SetAsWatchedAction {
  type: typeof SET_AS_WATCHED;
  id: number;
}

interface RemoveFromWatchListAction {
  type: typeof REMOVE_FROM_WATCHLIST;
  id: number;
}

type WatchListActions =
  | AddToWatchListAction
  | SortByReleaseDateAction
  | RemoveFromWatchListAction
  | SetAsWatchedAction;

export interface WatchItem {
  id: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  addedDate: Date;
  mediaType: string;
  genres: string;
  isWatched: boolean;
}

const watchListReducer = (state: WatchItem[], action: WatchListActions) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return [action.watchItem, ...state];

    case "SORT_BY_RELEASE_DATE":
      if (action.sortByReleaseDate) {
        return state.sort((a, b) => (isBefore(a.releaseDate, b.releaseDate) ? -1 : 1));
      } else {
        return state.sort((a, b) => (isAfter(a.addedDate, b.addedDate) ? -1 : 1));
      }

    case "SET_AS_WATCHED":
      return state.map((watchItem) => {
        const previousWatchedState = watchItem.isWatched;

        if (watchItem.id === action.id) {
          return {
            ...watchItem,
            isWatched: !previousWatchedState,
          };
        }

        return watchItem;
      });

    case "REMOVE_FROM_WATCHLIST":
      return state.filter((watchItem) => watchItem.id !== action.id);

    default:
      return state;
  }
};

export default watchListReducer;
