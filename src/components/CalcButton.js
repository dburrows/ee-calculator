import React from "react";
import "styled-components/macro";
import { colors } from "../constants/colors";

export const CalcButton = ({ onClick, label }) => {
  return (
    <button
      data-test={`btn-${label}`}
      onClick={onClick}
      css={`
        font-size: 9vmin;
        border-radius: 3vmin;
        outline: none;
        border: none;
        color: white;
        background-color: ${colors.eeBlue};
        :hover {
          background-color: #3f9fd0;
        }
        :active {
          background-color: #126e9c;
        }
      `}
    >
      {label}
    </button>
  );
};
