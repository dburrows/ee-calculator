import { connect } from "react-redux";
import { Readout } from "../components/Readout";

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    value: state.calculator.value
  };
};
export const ReadoutContainer = connect(mapStateToProps)(Readout);
