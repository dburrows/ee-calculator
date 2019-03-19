import React from "react";
import "styled-components/macro";
import { colors } from "../constants/colors";

export const CalcButton = ({ onClick, label }) => {
  return (
    <button
      data-test={`btn-${label}`}
      onClick={onClick}
      css={`
        cursor:pointer
        font-size: 6vmin;
        border-radius: 3vmin;
        outline: none;
        border: none;
        color: white;
        background: rgb(31, 56, 125);
        background: linear-gradient(
          180deg,
          rgba(31, 56, 125, 1) 0%,
          rgba(13, 31, 80, 1) 100%
        );
        box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.45);
        :active {
          box-shadow: none;
        }
      `}
    >
      {label}
    </button>
  );
};
