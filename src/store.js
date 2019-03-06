import { configureStore } from "redux-starter-kit";
import { calculatorReducer } from "./reducers/calculator";

export const createStore = () => {
  return configureStore({
    reducer: {
      calculator: calculatorReducer
    }
  });
};
