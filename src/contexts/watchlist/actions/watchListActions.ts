import { WatchItem } from "../reducer/watchListReducer";

export const addAction = (watchItem: WatchItem) => ({
  type: "ADD_TO_WATCHLIST",
  watchItem,
});

export const sortByReleaseDateAction = (sortByReleaseDate: boolean) => ({
  type: "SORT_BY_RELEASE_DATE",
  sortByReleaseDate,
});

export const RemoveFromWatchlistAction = (id: number) => ({
  type: "REMOVE_FROM_WATCHLIST",
  id,
});
