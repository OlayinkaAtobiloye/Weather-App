import React from "react";
import "./highlight.scss";
import { connect } from "react-redux";
import { State } from "../../store/reducer";
import HighLight from "./highlight";

interface Props {
  wind_speed?: Number;
  wind_direction_compass?: string;
}

const Wind: React.FC<Props> = (props) => {
  return (
    <HighLight classname="wind">
      <p>Wind status</p>
      <p>
        {props.wind_speed}
        <span>mph</span>
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          className="material-icons-outlined"
          style={{ marginRight: "5px" }}
        >
          play_circle
        </span>
        <p>{props.wind_direction_compass}</p>
      </div>
    </HighLight>
  );
};

const mapStateToProps = (state: State) => {
  return {
    wind_speed: state.wind_speed,
    wind_direction_compass: state.wind_direction_compass,
  };
};

export default connect(mapStateToProps, null)(Wind);
