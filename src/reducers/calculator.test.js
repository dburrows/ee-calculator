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

  describe("calculation sequences", () => {
    describe("sequence: 1, +,", () => {
      let state;

      beforeEach(() => {
        state = reducer(defaultState, updateValue("1"));
        state = reducer(state, updateOperator("+"));
      });

      it("should add value and operator to operations array", () => {
        expect(state.operations).toEqual([1, "+"]);
      });

      it("should update value to current total", () => {
        expect(state.value).toBe(1);
      });

      it("equals button should provide correct result", () => {
        state = reducer(state, updateOperator("="));
        expect(state.value).toBe(1);
      });
    });

    describe("sequence: 1, +, 2", () => {
      let state;

      beforeEach(() => {
        state = reducer(defaultState, updateValue("1"));
        state = reducer(state, updateOperator("+"));
        state = reducer(state, updateValue("2"));
      });

      it("should add value and operator to operations array", () => {
        expect(state.operations).toEqual([1, "+"]);
      });

      it("should update value to entered string", () => {
        expect(state.value).toBe("2");
      });

      it("equals button should provide correct result", () => {
        state = reducer(state, updateOperator("="));
        expect(state.value).toBe(3);
      });
    });

    describe("sequence: 1, +, 2, +", () => {
      let state;

      beforeEach(() => {
        state = reducer(defaultState, updateValue("1"));
        state = reducer(state, updateOperator("+"));
        state = reducer(state, updateValue("2"));
        state = reducer(state, updateOperator("+"));
      });

      it("should add value and operator to operations array", () => {
        expect(state.operations).toEqual([3, "+"]);
      });

      it("should update value to current total", () => {
        expect(state.value).toEqual(3);
      });

      it("equals button should provide correct result", () => {
        state = reducer(state, updateOperator("="));
        expect(state.value).toBe(3);
      });
    });

    describe("sequence: 1, +, 2, +, 3", () => {
      let state;

      beforeEach(() => {
        state = reducer(defaultState, updateValue("1"));
        state = reducer(state, updateOperator("+"));
        state = reducer(state, updateValue("2"));
        state = reducer(state, updateOperator("+"));
        state = reducer(state, updateValue("3"));
      });

      it("should add value and operator to operations array", () => {
        expect(state.operations).toEqual([3, "+"]);
      });

      it("should update value to entered string", () => {
        expect(state.value).toEqual("3");
      });

      it("equals button should provide correct result", () => {
        state = reducer(state, updateOperator("="));
        expect(state.value).toBe(6);
      });
    });
  });

  it("should allow the user to ammend entered operator", () => {
    let state;

    state = reducer(defaultState, updateValue("1"));
    state = reducer(state, updateOperator("+"));
    state = reducer(state, updateOperator("-"));

    expect(state.value).toEqual(1);
    expect(state.operations).toEqual([1, "-"]);
  });

  it("should allow user to enter operator as first action", () => {
    let state;
    state = reducer(state, updateOperator("+"));
    state = reducer(state, updateValue("10"));

    expect(state.value).toEqual("10");
    expect(state.operations).toEqual([0, "+"]);
  });

  it("should allow user to press equals multiple times", () => {
    let state;

    state = reducer(state, updateValue("10"));
    state = reducer(state, updateOperator("+"));
    state = reducer(state, updateValue("10"));
    state = reducer(state, updateOperator("="));
    state = reducer(state, updateOperator("="));
    state = reducer(state, updateOperator("="));

    expect(state.value).toEqual(20);
    expect(state.operations).toEqual([]);
  });
});
