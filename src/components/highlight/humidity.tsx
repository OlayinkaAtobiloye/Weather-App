import React from "react";
import "./highlight.scss";
import { connect } from "react-redux";
import { State } from "../../store/reducer";
import HighLight from "./highlight";

interface Props {
  humidity?: number;
}
const Humidity: React.FC<Props> = (props) => {
  return (
    <HighLight classname="humidity">
      <p>Humidity</p>
      <p>
        {props.humidity}
        <span>%</span>
      </p>
      <div className="displayVal">
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className="progress">
        <div className="value" style={{ width: `${props.humidity}%` }}></div>
      </div>
      <p style={{ textAlign: "right", fontSize: "12px", width: "80%" }}>%</p>
    </HighLight>
  );
};

const mapStateToProps = (state: State) => {
  return {
    humidity: state.humidity,
  };
};

export default connect(mapStateToProps, null)(Humidity);
