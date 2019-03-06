import { connect } from "react-redux";
import { updateValue, updateOperator, clearAll } from "../reducers/calculator";
import { Keypad } from "../components/Keypad";

const mapDispatchToProps = {
  updateValue,
  updateOperator,
  clearAll: () => clearAll()
};

export const KeypadContainer = connect(
  null,
  mapDispatchToProps
)(Keypad);
