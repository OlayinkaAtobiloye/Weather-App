import React from "react";
import './sidebar.scss';
import thunder from '../../Images/Shower.png';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import {State} from'../../store/reducer';
import axios from 'axios';
import sn from '../../Images/Snow.png';
import lc from '../../Images/LightCloud.png';
import sl from '../.../Images/Sleet.png';
import hc from '../../Images/HeavyCloud.png';
import t from '../../Images/Thunderstorm.png';
import h from '../../Images/hail.png';
import c from '../../Images/Clear.png';
import s from '../../Images/Shower.png';
import { ServerResponse } from "http";

interface Props{
togglePopup?: any,
display?: string,
setWeather?: any,
setWOEID?: any
}

interface state {
temp: Number,
location: string,
weather_state_abbr: string,
weather_state_name: string
}


class Sidebar extends React.Component<Props, state>{
    constructor(props: Props){
        super(props);
        this.state  = {
            temp: 0,
            location: 'London',
            weather_state_abbr: '',
            weather_state_name: ''
        }
    }

    componentDidMount(){
        let config = {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
              },
          }
          
        const proxyURL = "https://radiant-plains-61566.herokuapp.com/"
        axios.get(`/api/location/search/?query=london`).then(res => {
            console.log('data', res)
            axios.get(`/api/location/44418/`).then(
                (response) =>
                {
                    console.log(response)
                    const data = response.data.consolidated_weather;
                    this.props.setWeather(data.humidity, data.visibilty, data.air_pressure, data.wind_speed)
                    this.setState({weather_state_abbr: res.data.weather_state_abbr, weather_state_name: res.data.weather_state_name})
                },
                // this.setState(
                //     () => {return{
                //         location: response.data.title,
                //         temp: response.data.consolidated_weather.the_temp
                //     }
                // }
                // )
            )
        })
    }

    render(){
        return(
            <nav className="sideBar" style={{'display': this.props.display}}>
                <div className="top">
                <a className="searchTrigger" onClick={this.props.togglePopup}>Seach for places</a>
                </div>
                <div>
                    <img src={this.state.weather_state_abbr} className='weatherImage'/>
                </div>
                <p className="temp">{this.state.temp}<span>℃</span></p>
                <p className="weatherType">{this.state.weather_state_name}</p>
                <p className="date"><span>Today</span>.<span>Fri, 5 Jun</span></p>
                <p className="location">{this.state.location}</p>
            </nav>
        )
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
    togglePopup: (humidity: Number, visibilty: Number, air_pressure : Number, wind_speed : Number) => dispatch({type: 'TOGGLE_POPUP', payload: {humidity, visibilty, air_pressure, wind_speed}}),
    setWeather: () => dispatch({type: 'SET_WEATHER'}),
    setWOEID: (woeid: Number) => dispatch({type: 'SET_WOEID', woeid: woeid})
}
}

const mapStateToProps = (state: State) => {
    return{
    display: `${state.showPopup ? 'none' : 'block'}`
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);