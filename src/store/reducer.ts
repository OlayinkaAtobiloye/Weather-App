import { type } from "os";
import { Action, Reducer } from "redux";

export const initialState: State = {
  showPopup: false,
  celcius: true,
  humidity: 0,
  visibilty: 0,
  air_pressure: 0,
  wind_speed: 0,
  woeid: 0,
  consolidated_weather: false,
  wind_direction_compass: "",
  location: "London",
};

export type State = {
  showPopup: boolean;
  celcius: boolean;
  humidity: number;
  visibilty: number;
  air_pressure: number;
  wind_speed: number;
  woeid?: number;
  consolidated_weather: any;
  wind_direction_compass: string;
  location: string;
};

interface ACTIONTYPE extends Action {
  type: string;
  payload: {
    humidity: number;
    visibilty: number;
    air_pressure: number;
    wind_speed: number;
    bool: boolean;
    wind_direction_compass: string;
  };
  woeid?: number;
  consolidated_weather: any;
  location: string;
}

const reducer = (state: State = initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "TOGGLE_POPUP":
      return {
        ...state,
        showPopup: !state.showPopup,
      };
    case "SET_UNIT":
      return {
        ...state,
        celcius: action.payload.bool,
      };
    case "SET_WOEID":
      return {
        ...state,
        woeid: action.woeid,
      };
    case "SET_WEATHER":
      return {
        ...state,
        humidity: action.payload.humidity,
        visibilty: action.payload.visibilty,
        air_pressure: action.payload.air_pressure,
        wind_speed: action.payload.wind_speed,
        wind_direction_compass: action.payload.wind_direction_compass,
      };
    case "SET_DATA":
      return {
        ...state,
        consolidated_weather: action.consolidated_weather,
      };
    case "SET_LOCATION":
      return {
        ...state,
        location: action.location,
      };
  }
  return state;
};

export default reducer;
