const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

interface ToggleDarkModeAction {
  type: typeof TOGGLE_DARK_MODE;
}

const darkModeReducer = (state: boolean, action: ToggleDarkModeAction) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return !state;
    default:
      return state;
  }
};

export default darkModeReducer;
