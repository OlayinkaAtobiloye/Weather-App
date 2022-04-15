import React from "react";
import "./holder.scss";
import Wind from "../highlight/wind";
import Humidity from "../highlight/humidity";
import Visibility from "../highlight/visibility";
import Pressure from "../highlight/pressure";

const Holder: React.FC<{}> = (props) => {
  return (
    <div className="holder">
      <Wind />
      <Humidity />
      <Pressure />
      <Visibility />
    </div>
  );
};

export default Holder;
