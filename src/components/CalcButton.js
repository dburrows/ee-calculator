import React from "react";
import "styled-components/macro";

export const CalcButton = ({ onClick, label }) => {
  return (
    <button data-test={`btn-${label}`} onClick={onClick}>
      {label}
    </button>
  );
};
