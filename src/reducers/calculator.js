import { createSlice } from "redux-starter-kit";

export const defaultState = {
  operations: [],
  value: 0,
  waitingForValue: true
};

const calculateValue = ([val1, operator, val2]) => {
  switch (operator) {
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "÷":
    case "/":
      return val1 / val2;
    case "x":
    case "X":
    case "*":
      return val1 * val2;
    default:
      throw new Error("unknown operator");
  }
};

const calculatorSlice = createSlice({
  slice: "calculator",
  initialState: defaultState,
  reducers: {
    updateValue(state, { payload: value }) {
      if (state.waitingForValue) {
        state.value = value;
        state.waitingForValue = false;
      } else {
        state.value = `${state.value}${value}`;
      }
    },
    updateOperator(state, { payload: operator }) {
      if (state.waitingForValue) {
        state.operations = [Number(state.value), operator];
      } else {
        state.operations.push(Number(state.value));
        state.operations.push(operator);
        state.waitingForValue = true;

        // commit fully entered calculations
        if (state.operations.length > 3) {
          state.operations = [
            calculateValue(state.operations),
            state.operations[3]
          ];
        }

        // show running total while waiting for input
        state.value = state.operations[0];
      }

      // if received equals operator commit all outstanding calculations and clear operations
      if (state.operations[state.operations.length - 1] === "=") {
        state.value = state.operations[0];
        state.operations = [];
        state.waitingForValue = true;
      }
    },
    clearAll() {
      return defaultState;
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = calculatorSlice;
// Extract and export each action creator by name
export const { updateValue, updateOperator, clearAll } = actions;
// Export the reducer, either as a default or named export
export const calculatorReducer = reducer;
