// src/store/index.ts
import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";

const rootReducer = combineReducers({
  balance: balanceReducer,
});

const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const store = createStore(rootReducer, enhancer);

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
