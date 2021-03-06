// src/store/something/types.ts
export type BalanceState = {
  account: number;
};

export type BalanceAction =
  | { type: "balance/deposit"; payload: number }
  | { type: "balance/reset" };
