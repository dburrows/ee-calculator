import {
  calculatorReducer as reducer,
  defaultState,
  updateValue,
  updateOperator
} from "./calculator";

describe("calculator reducer", () => {
  it("should return initial state if no action is passed", () => {
    expect(reducer(defaultState, {})).toEqual(defaultState);
  });

  it("should add", () => {
    let state;
    state = reducer(defaultState, updateValue("1"));
    state = reducer(state, updateOperator("+"));
    state = reducer(state, updateValue("2"));
    state = reducer(state, updateOperator("="));

    expect(state.value).toBe(3);
  });
});
