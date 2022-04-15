import React from "react";
import "./highlight.scss";
import { connect } from "react-redux";
import { State } from "../../store/reducer";

const HighLight: React.FC<{ classname: string }> = (props) => {
  return <div className={`highlight ${props.classname}`}>{props.children}</div>;
};

export default HighLight;
