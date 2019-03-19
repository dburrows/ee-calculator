import React from "react";
import "styled-components/macro";
import { colors } from "../constants/colors";
import { fontStacks } from "../constants/fontStacks";
export const Readout = props => {
  return (
    <div
      css={`
        font-family: ${fontStacks.mono};
        font-size: 8vmin;
        text-align: right;
        background-color: ${colors.eeYellow};
        padding: 2vh 2vh;
      `}
    >
      {props.value}
    </div>
  );
};
