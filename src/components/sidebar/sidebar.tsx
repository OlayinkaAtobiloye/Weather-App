import React from "react";
import "./sidebar.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../store/reducer";
import axios from "axios";
import sn from "../../Images/Snow.png";
import lc from "../../Images/LightCloud.png";
import lr from "../../Images/LightRain.png";
import sl from "../../Images/Sleet.png";
import hc from "../../Images/HeavyCloud.png";
import t from "../../Images/Thunderstorm.png";
import h from "../../Images/Hail.png";
import c from "../../Images/Clear.png";
import s from "../../Images/Shower.png";

interface Props {
  togglePopup?: any;
  display?: string;
  setWeather?: any;
  setWOEID?: any;
  celcius?: boolean;
  setData?: any;
  location?: string;
  setLocation: any;
}

interface state {
  temp: number;
  location: string;
  weather_state_abbr: string;
  weather_state_name: string;
  lat: number;
  long: number;
}

class Sidebar extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      temp: 0,
      location: "Location",
      weather_state_abbr: "",
      weather_state_name: "",
      lat: 0,
      long: 0,
    };
  }

  setdata = (opt: any) => {
    this.props.setData(opt);
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
    if (this.state.lat !== prevState.lat) {
      let url = `/api/location/search/?lattlong=${this.state.lat},${this.state.long}`;
      axios.get(url).then((res) => this.props.setLocation(res.data[0].title));
    }
    if (this.props.location !== prevProps.location) {
      axios
        .get(`/api/location/search/?query=${this.props.location}`)
        .then((res) => {
          axios.get(`/api/location/${res.data[0].woeid}/`).then((response) => {
            console.log(response.data.consolidated_weather);
            const data = response.data.consolidated_weather[0];
            console.log(data);
            this.props.setWeather(
              Math.round((data.humidity + Number.EPSILON) * 100) / 100,
              Math.round((data.visibility + Number.EPSILON) * 100) / 100,
              Math.round((data.air_pressure + Number.EPSILON) * 100) / 100,
              Math.round((data.wind_speed + Number.EPSILON) * 100) / 100,
              data.wind_direction_compass
            );
            this.setState(() => {
              return {
                weather_state_abbr: data.weather_state_abbr,
                weather_state_name: data.weather_state_name,
                temp: Math.round((data.the_temp + Number.EPSILON) * 100) / 100,
                location: response.data.title,
              };
            });
            this.setdata(response.data.consolidated_weather);
          });
        });
    }
    if (this.props.celcius != prevProps.celcius) {
      if (this.props.celcius) {
        this.setState({
          temp:
            Math.round((this.fToC(this.state.temp) + Number.EPSILON) * 100) /
            100,
        });
      } else {
        this.setState({
          temp:
            Math.round((this.cToF(this.state.temp) + Number.EPSILON) * 100) /
            100,
        });
      }
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((pos) =>
        this.setState({ lat: pos.coords.latitude, long: pos.coords.longitude })
      );
    }
    axios
      .get(`/api/location/search/?query=${this.props.location}`)
      .then((res) => {
        axios.get(`/api/location/${res.data[0].woeid}/`).then((response) => {
          const data = response.data.consolidated_weather[0];
          this.props.setWeather(
            Math.round((data.humidity + Number.EPSILON) * 100) / 100,
            Math.round((data.visibility + Number.EPSILON) * 100) / 100,
            Math.round((data.air_pressure + Number.EPSILON) * 100) / 100,
            Math.round((data.wind_speed + Number.EPSILON) * 100) / 100,
            data.wind_direction_compass
          );
          this.setState(() => {
            return {
              weather_state_abbr: data.weather_state_abbr,
              weather_state_name: data.weather_state_name,
              temp: Math.round((data.the_temp + Number.EPSILON) * 100) / 100,
              location: response.data.title,
            };
          });
          this.setdata(response.data.consolidated_weather);
        });
      });
    if (this.state.lat) {
      let url = `/api/location/search/?lattlong=${this.state.lat},${this.state.long}`;
      axios.get(url).then((res) => this.props.setLocation(res.data[0].title));
    }
  }

  render() {
    let id = this.state.weather_state_abbr;
    const date = new Date();
    const day = date.toLocaleString("default", { weekday: "short" });
    const month = date.toLocaleString("default", { month: "short" });

    return (
      <nav className="sideBar" style={{ display: this.props.display }}>
        <div className="top">
          <a className="searchTrigger" onClick={this.props.togglePopup}>
            Seach for places
          </a>
        </div>
        <div>
          <img
            src={
              id == "c"
                ? c
                : id == "s"
                ? s
                : id == "lr"
                ? lr
                : id == "c"
                ? c
                : id == "hc"
                ? hc
                : id == "h"
                ? h
                : id == "t"
                ? t
                : id == "lc"
                ? lc
                : id == "sl"
                ? sl
                : sn
            }
            className="weatherImage"
          />
        </div>
        <p className="temp">
          {this.state.temp}
          <span>°{this.props.celcius ? "C" : "F"}</span>
        </p>
        <p className="weatherType">{this.state.weather_state_name}</p>
        <p className="date">
          <span>Today</span>.
          <span>
            {day}, {date.getDate()} {month}
          </span>
        </p>
        <p className="location">{this.props.location}</p>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    togglePopup: () => dispatch({ type: "TOGGLE_POPUP" }),
    setWeather: (
      humidity: Number,
      visibilty: Number,
      air_pressure: Number,
      wind_speed: Number,
      wind_direction_compass: string
    ) =>
      dispatch({
        type: "SET_WEATHER",
        payload: {
          humidity,
          visibilty,
          air_pressure,
          wind_speed,
          wind_direction_compass,
        },
      }),
    setWOEID: (woeid: Number) => dispatch({ type: "SET_WOEID", woeid: woeid }),
    setData: (consolidated_weather: any) =>
      dispatch({
        type: "SET_DATA",
        consolidated_weather: consolidated_weather,
      }),
    setLocation: (location: string) =>
      dispatch({ type: "SET_LOCATION", location: location }),
  };
};

const mapStateToProps = (state: State) => {
  return {
    display: `${state.showPopup ? "none" : "block"}`,
    celcius: state.celcius,
    location: state.location,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
