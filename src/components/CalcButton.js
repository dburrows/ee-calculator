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
      `}
    >
      {label}
    </button>
  );
};
