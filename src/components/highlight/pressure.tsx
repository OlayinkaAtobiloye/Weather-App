import React from "react";
import "./highlight.scss";
import { connect } from "react-redux";
import { State } from "../../store/reducer";
import HighLight from "./highlight";

interface Props {
  air_pressure?: number;
}

const Pressure: React.FC<Props> = (props) => {
  return (
    <HighLight classname="pressure">
      <p>Air Pressure</p>
      <p>
        {props.air_pressure} <span>mb</span>{" "}
      </p>
    </HighLight>
  );
};

const mapStateToProps = (state: State) => {
  return {
    air_pressure: state.air_pressure,
  };
};

export default connect(mapStateToProps, null)(Pressure);
