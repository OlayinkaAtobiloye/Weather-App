import React, { useEffect, useState, useRef } from "react";
import thunder from "../../Images/HeavyCloud.png";
import "./day.scss";
import { State } from "../../store/reducer";
import axios from "axios";
import { connect } from "react-redux";
import sn from "../../Images/Snow.png";
import lc from "../../Images/LightCloud.png";
import sl from "../../Images/Sleet.png";
import hc from "../../Images/HeavyCloud.png";
import t from "../../Images/Thunderstorm.png";
import h from "../../Images/Hail.png";
import c from "../../Images/Clear.png";
import s from "../../Images/Shower.png";
import lr from "../../Images/LightRain.png";

interface Props {
  woeid?: number;
  tomorrow?: boolean;
  day?: string;
  month?: string;
  mydate?: number;
  celcius?: boolean;
  min: number;
  max: number;
  weather_state_abbr: string;
}

interface state {
  mintemp: number;
  maxtemp: number;
  weather_state_abbr: string;
}

class DayCard extends React.Component<Props, state> {
  state = {
    mintemp: this.props.min,
    maxtemp: this.props.max,
    weather_state_abbr: "",
  };

  cToF = (celsius: number) => {
    var cTemp = celsius;
    var cToFahr = (cTemp * 9) / 5 + 32;
    return cToFahr;
  };

  fToC = (fahrenheit: number): number => {
    var fTemp = fahrenheit;
    var fToCel = ((fTemp - 32) * 5) / 9;
    return fToCel;
  };

  componentDidUpdate(prevProps: Props, prevState: state) {
    if (this.props.celcius != prevProps.celcius) {
      if (this.props.celcius) {
        this.setState({
          maxtemp:
            Math.round((this.fToC(this.state.maxtemp) + Number.EPSILON) * 100) /
            100,
        });
        this.setState({
          mintemp:
            Math.round((this.fToC(this.state.mintemp) + Number.EPSILON) * 100) /
            100,
        });
      } else {
        this.setState({
          maxtemp:
            Math.round((this.cToF(this.state.maxtemp) + Number.EPSILON) * 100) /
            100,
        });
        this.setState({
          mintemp:
            Math.round((this.cToF(this.state.mintemp) + Number.EPSILON) * 100) /
            100,
        });
      }
    }
  }

  render() {
    return (
      <div className="dayCard">
        <p>
          {this.props.tomorrow
            ? "Tomorrow"
            : `${this.props.day} ${this.props.mydate} ${this.props.month}`}
        </p>
        <img
          src={
            this.props.weather_state_abbr == "c"
              ? c
              : this.props.weather_state_abbr == "s"
              ? s
              : this.props.weather_state_abbr == "lr"
              ? lr
              : this.props.weather_state_abbr == "c"
              ? c
              : this.props.weather_state_abbr == "hc"
              ? hc
              : this.props.weather_state_abbr == "h"
              ? h
              : this.props.weather_state_abbr == "t"
              ? t
              : this.props.weather_state_abbr == "lc"
              ? lc
              : this.props.weather_state_abbr == "sl"
              ? sl
              : sn
          }
        />
        <p>
          <span>
            {this.state.maxtemp}°{this.props.celcius ? "C" : "F"}
          </span>
          <span>
            {this.state.mintemp}°{this.props.celcius ? "C" : "F"}
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    woeid: state.woeid,
    celcius: state.celcius,
    consolidated_weather: state.consolidated_weather,
  };
};

export default connect(mapStateToProps, null)(DayCard);
