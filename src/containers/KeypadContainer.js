import { connect } from "react-redux";
import { updateValue, updateOperator } from "../reducers/calculator";
import { Keypad } from "../components/Keypad";

const mapDispatchToProps = {
  updateValue,
  updateOperator
};

export const KeypadContainer = connect(
  null,
  mapDispatchToProps
)(Keypad);
