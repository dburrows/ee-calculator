import React from "react";
import styled from "styled-components/macro";
import { CalcButton } from "./CalcButton";
import { colors } from "../constants/colors";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  background-color: ${colors.eeGrey};
  padding: 10px;
`;

const Fns = styled.div`
  grid-column: 1/4;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const Operators = styled.div`
  grid-column: 4;
  grid-row: 1/6;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
`;

const Numbers = styled.div`
  grid-column: 1/4;
  grid-row: 2/6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
`;

export const Keypad = ({ updateValue, updateOperator, clearAll }) => {
  return (
    <Wrapper>
      <Fns>
        {[["ac", clearAll]].map(([key, handler]) => {
          return <CalcButton key={key} label={key} onClick={handler} />;
        })}
      </Fns>
      <Operators>
        {" "}
        {["÷", "x", "-", "+", "="].map(key => {
          return (
            <CalcButton
              key={key}
              label={key}
              onClick={updateOperator.bind(null, key)}
            />
          );
        })}
      </Operators>
      <Numbers>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0].map(key => {
          return (
            <CalcButton
              key={key}
              label={key}
              onClick={updateValue.bind(null, key)}
            />
          );
        })}
      </Numbers>
    </Wrapper>
  );
};
