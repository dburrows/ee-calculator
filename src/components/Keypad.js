import React from "react";
import { CalcButton } from "./CalcButton";

export const Keypad = ({ updateValue, updateOperator }) => {
  return (
    <div>
      <CalcButton label={1} onClick={updateValue.bind(null, 1)} />
      <CalcButton label={2} onClick={updateValue.bind(null, 2)} />
      <CalcButton label={"+"} onClick={updateOperator.bind(null, "+")} />
      <CalcButton label={"="} onClick={updateOperator.bind(null, "=")} />
    </div>
  );
};
