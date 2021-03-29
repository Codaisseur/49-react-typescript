// src/store/balance/actions.ts
import { BalanceAction } from "./types";

export const deposit = (amountToDeposit: number): BalanceAction => ({
  type: "balance/deposit",
  payload: amountToDeposit,
});

export const reset = (): BalanceAction => ({
  type: "balance/reset",
});
