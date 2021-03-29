// src/store/Balance/reducer.ts
import { BalanceState, BalanceAction } from "./types";

const initialState: BalanceState = {
  account: 0,
};

export default function reducer(state = initialState, action: BalanceAction) {
  switch (action.type) {
    case "balance/deposit": {
      return {
        ...state,
        account: state.account + action.payload,
      };
    }
    case "balance/reset": {
      return {
        ...state,
        account: initialState.account,
      };
    }
    default: {
      return state;
    }
  }
}
