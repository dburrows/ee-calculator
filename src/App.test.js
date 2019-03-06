import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import App from "./App";
import { createStore } from "./store";

describe("Integration Tests", () => {
  it("renders without crashing", () => {
    const wrapper = mount(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );

    expect(wrapper.find(".App").length).toBe(1);
  });
});
