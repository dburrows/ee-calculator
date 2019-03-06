import { createSlice } from "redux-starter-kit";

const defaultState = {
  operations: [],
  value: 0
};

const calculatorSlice = createSlice({
  slice: "calculator",
  initialState: defaultState,
  reducers: {
    updateValue(state, { payload: value }) {
      state.operations.push(value);
    },
    updateOperator(state, { payload: value }) {
      state.operations.push(value);
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = calculatorSlice;
// Extract and export each action creator by name
export const { updateValue, updateOperator } = actions;
// Export the reducer, either as a default or named export
export const calculatorReducer = reducer;
