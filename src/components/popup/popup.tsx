import React, { useState } from "react";
import "./popup.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../store/reducer";

interface Props {
  visibility?: string;
  togglePopup?: any;
  setLocation?: any;
}

const PopUp: React.FC<Props> = (props) => {
  const [loc, setLoc] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLoc(event.currentTarget.value);
  };

  return (
    <div className="popup" style={{ display: props.visibility }}>
      <span
        className="material-icons-outlined close"
        onClick={props.togglePopup}
      >
        close
      </span>
      <div>
        <span
          className="material-icons-outlined search"
          style={{ marginRight: "-16px" }}
        >
          search
        </span>
        <input
          type="text"
          placeholder="search location"
          onChange={handleChange}
        />
        <button className="search" onClick={() => props.setLocation(loc)}>
          Search
        </button>
      </div>
      <ul>
        <li className="city" onClick={() => props.setLocation("London")}>
          London<span className="material-icons-outlined">chevron_right</span>
        </li>
        <li className="city" onClick={() => props.setLocation("Barcelona")}>
          Barcelona
          <span className="material-icons-outlined">chevron_right</span>
        </li>
        <li className="city" onClick={() => props.setLocation("Long Beach")}>
          Long Beach
          <span className="material-icons-outlined">chevron_right</span>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    visibility: `${state.showPopup ? "block" : "none"}`,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    togglePopup: () => dispatch({ type: "TOGGLE_POPUP" }),
    setLocation: (location: string) =>
      dispatch({ type: "SET_LOCATION", location: location }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
