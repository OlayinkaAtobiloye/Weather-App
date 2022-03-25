import React from "react";
import { Wind, Humidity, Pressure, Visibility } from "../highlight/highlight";
import './holder.scss';



const Holder: React.FC<{}>  = props => {
    return(
<div className="holder">
      <Wind/>
      <Humidity/>
      <Pressure/>
      <Visibility/>
      </div>
    )
}


export default Holder;