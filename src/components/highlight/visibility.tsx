import React from "react";
import "./highlight.scss";
import { connect } from "react-redux";
import { State } from "../../store/reducer";
import HighLight from "./highlight";

interface Props {
  visibilty?: number;
}

export const Visibility: React.FC<Props> = (props) => {
  return (
    <HighLight classname="visibility">
      <p>Visibility</p>
      <p>
        {props.visibilty} <span>miles</span>
      </p>
    </HighLight>
  );
};

const mapStateToProps = (state: State) => {
  return {
    visibilty: state.visibilty,
  };
};

export default connect(mapStateToProps, null)(Visibility);
