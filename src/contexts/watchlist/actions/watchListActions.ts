import { WatchItem } from "../reducer/watchListReducer";

export const setWatchListAction = (watchList: WatchItem[]) => ({
  type: "SET_WATCHLIST",
  watchList,
});

export const addToWatchListAction = (watchItem: WatchItem) => ({
  type: "ADD_TO_WATCHLIST",
  watchItem,
});

export const sortByReleaseDateAction = (sortByReleaseDate: boolean) => ({
  type: "SORT_BY_RELEASE_DATE",
  sortByReleaseDate,
});

export const RemoveFromWatchlistAction = (id: string) => ({
  type: "REMOVE_FROM_WATCHLIST",
  id,
});
