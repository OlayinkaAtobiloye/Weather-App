import React from "react";
import "./container.scss";
import Forecast from "../forecast/forecast";
import Holder from "../holder/holder";
import TempUnit from "../tempunit";
import { connect } from "react-redux";
import { State } from "../../store/reducer";

interface Props {
  name: string;
  consolidated_weather?: any;
}

const Container: React.FC<Props> = (props) => {
  return (
    <main>
      <TempUnit />
      {props.consolidated_weather && (
        <Forecast consolidated_weather={props.consolidated_weather} />
      )}
      <h1>Today’s Hightlights </h1>
      <Holder />
    </main>
  );
};

const mapStateToProps = (state: State) => {
  return {
    consolidated_weather: state.consolidated_weather,
  };
};

export default connect(mapStateToProps, null)(Container);

// {air_pressure: 1022,
//   applicable_date: "2022-04-14",
//   created: "2022-04-14T12:59:03.353449Z",
//   humidity: 64,
//   id: 5202915238084608,
//   max_temp: 18.465000000000003,
//   min_temp: 8.485,
//   predictability: 71,
//   the_temp: 17.955,
//   visibility: 9.078233118587448,
//   weather_state_abbr: "hc",
//   weather_state_name: "Heavy Cloud",
//   wind_direction: 242.499427851198,
//   wind_direction_compass: "WSW",
//     wind_speed: 3.1646283235372095},
