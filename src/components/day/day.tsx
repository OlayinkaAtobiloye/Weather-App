import React, { useEffect, useState } from "react";
import thunder from '../../Images/HeavyCloud.png';
import './day.scss';
import {State} from'../../store/reducer';
import axios from 'axios';
import { connect } from 'react-redux';
import sn from '../../Images/Snow.png';
import lc from '../../Images/LightCloud.png';
import sl from '../.../Images/Sleet.png';
import hc from '../../Images/HeavyCloud.png';
import t from '../../Images/Thunderstorm.png';
import h from '../../Images/hail.png';
import c from '../../Images/Clear.png';
import s from '../../Images/Shower.png';


const DayCard: React.FC<{date: string, woeid?: number, tomorrow?: boolean, day? :string, month?: string, mydate?: number, celcius?: boolean}> = props => {
    function cToF(celsius: number) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
    return cToFahr;
}

function fToC(fahrenheit: number):number 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
    return fToCel
} 
cToF(60);
fToC(45);

    
    
    const [mintemp, setmintemp] = useState<number>(0);
    const [maxtemp, setmaxtemp] = useState<number>(0);
    const [weather_state_abbr, set_weather_state_abbr] = useState<string>();
    
    // let config = {
    //     headers: {
    //         "X-Requested-With": "XMLHttpRequest"
    //       }
    //   }
      
    useEffect(
        () => {
            // const proxyURL = "https://radiant-plains-61566.herokuapp.com/"
        axios.get(`/api/location/44418/${props.date}`).then(res =>
           {setmintemp(res.data.min_temp)
           setmaxtemp(res.data.max_temp)
           set_weather_state_abbr(res.data.weather_state_abbr)
           }
        )
        }
    )


    useEffect(
        () => {
            props.celcius 
            ? setmintemp(fToC(mintemp))
            : setmaxtemp(cToF(maxtemp))
        },
    [props.celcius])
    return(
        <div className="dayCard">
            <p>{props.tomorrow ? 'Tomorrow' : `${props.day} ${props.mydate} ${props.month}` }</p>
            <img src={weather_state_abbr}/>
            <p><span>{maxtemp}°C</span><span>{mintemp}°C</span></p>
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return{
    woeid: state.woeid,
    celcius: state.celcius
}
}

export default connect(mapStateToProps, null)(DayCard);