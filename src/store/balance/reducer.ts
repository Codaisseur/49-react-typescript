// src/store/Balance/reducer.ts
import { BalanceState, BalanceAction } from "./types";

const initialState: BalanceState = {
  account: 0,
};

export default function reducer(state = initialState, action: BalanceAction) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
