import Sidebar from "../sidebar/sidebar";
import React, { useState } from "react";
import Container from "../container/container";
import "./weather.scss";
import PopUp from "../popup/popup";

const Weather: React.FC<{}> = (props) => {
  return (
    <div className="weather">
      <Sidebar />
      <PopUp />
      <Container name="" />
    </div>
  );
};

export default Weather;
