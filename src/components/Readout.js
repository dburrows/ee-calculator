import React from "react";
import "styled-components/macro";
import { colors } from "../constants/colors";

export const Readout = props => {
  return (
    <div
      css={`
        font-size: 9vmin;
        text-align: right;
        background-color: ${colors.eeYellow};
      `}
    >
      {props.value}
    </div>
  );
};
