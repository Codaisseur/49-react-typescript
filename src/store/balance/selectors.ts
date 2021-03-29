// src/store/balance/selectors.ts
import { ReduxState } from "../index";

export const selectBalance = (reduxState: ReduxState) =>
  reduxState.balance.account;
