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

  it("should subtract", () => {
    let state;
    state = reducer(defaultState, updateValue("1000"));
    state = reducer(state, updateOperator("-"));
    state = reducer(state, updateValue("200"));
    state = reducer(state, updateOperator("="));

    expect(state.value).toBe(800);
  });

  it("should multiply", () => {
    let state;
    state = reducer(defaultState, updateValue("9"));
    state = reducer(state, updateOperator("x"));
    state = reducer(state, updateValue("12"));
    state = reducer(state, updateOperator("="));

    expect(state.value).toBe(108);
  });

  it("should divide", () => {
    let state;
    state = reducer(defaultState, updateValue("13"));
    state = reducer(state, updateOperator("/"));
    state = reducer(state, updateValue("7"));
    state = reducer(state, updateOperator("="));

    expect(state.value).toBe(1.8571428571428572);
  });
});
