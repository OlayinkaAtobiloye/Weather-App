import DayCard from "../day/day";
import React, { useEffect, useState } from "react";
import "./forecast.scss";
import { connect } from "react-redux";
import { State } from "../../store/reducer";

interface obj {
  air_pressure: number;
  applicable_date: string;
  created: string;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
}

const Forecast: React.FC<{ consolidated_weather: Array<obj> }> = (props) => {
  const today = new Date();
  let oneday: Date = new Date();
  oneday.setDate(today.getDate() + 1);
  let twoday: Date = new Date();
  twoday.setDate(today.getDate() + 2);
  let threeday: Date = new Date();
  threeday.setDate(today.getDate() + 3);
  let fourday: Date = new Date();
  fourday.setDate(today.getDate() + 4);
  let fiveday: Date = new Date();
  fiveday.setDate(today.getDate() + 5);

  return (
    <div className="forecast">
      {props.consolidated_weather !== [] ? (
        <React.Fragment>
          <DayCard
            day={oneday.toLocaleString("default", { weekday: "short" })}
            month={oneday.toLocaleString("default", { month: "short" })}
            tomorrow
            mydate={oneday.getDate()}
            weather_state_abbr={
              props.consolidated_weather[1].weather_state_abbr
            }
            min={
              Math.round(
                (props.consolidated_weather[1].max_temp + Number.EPSILON) * 100
              ) / 100
            }
            max={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[1].max_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
          />
          <DayCard
            day={twoday.toLocaleString("default", { weekday: "short" })}
            month={twoday.toLocaleString("default", { month: "short" })}
            mydate={twoday.getDate()}
            weather_state_abbr={
              props.consolidated_weather[2].weather_state_abbr
            }
            min={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[2].min_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
            max={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[2].max_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
          />
          <DayCard
            day={threeday.toLocaleString("default", { weekday: "short" })}
            month={threeday.toLocaleString("default", { month: "short" })}
            mydate={threeday.getDate()}
            weather_state_abbr={
              props.consolidated_weather[3].weather_state_abbr
            }
            min={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[2].min_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
            max={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[2].max_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
          />
          <DayCard
            day={fourday.toLocaleString("default", { weekday: "short" })}
            month={fourday.toLocaleString("default", { month: "short" })}
            mydate={fourday.getDate()}
            weather_state_abbr={
              props.consolidated_weather[4].weather_state_abbr
            }
            min={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[3].min_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
            max={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[3].max_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
          />
          <DayCard
            day={fiveday.toLocaleString("default", { weekday: "short" })}
            month={fiveday.toLocaleString("default", { month: "short" })}
            mydate={fiveday.getDate()}
            weather_state_abbr={
              props.consolidated_weather[5].weather_state_abbr
            }
            min={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[4].min_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
            max={
              props.consolidated_weather
                ? Math.round(
                    (props.consolidated_weather[4].max_temp + Number.EPSILON) *
                      100
                  ) / 100
                : 0
            }
          />
        </React.Fragment>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    // consolidated_weather: state.consolidated_weather,
  };
};

export default connect(mapStateToProps, null)(Forecast);
