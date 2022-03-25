import React from "react";
import './highlight.scss';
import { connect } from "react-redux";
import { State } from "../../store/reducer";


interface Props {
    humidity?: Number, visibilty?: Number, air_pressure? : Number, wind_speed? : Number
}

const HighLight : React.FC<{classname: string}> = props => {
    return(
        <div className={`highlight ${props.classname}`}>
            {props.children}
        </div>
    )
}

export const Wind: React.FC<Props> = props => {
    return(
        <HighLight classname="wind">
            <p>Wind status</p>
            <p>{props.wind_speed}<span>mph</span></p>
            <div style={{'display': 'flex', 'alignItems': 'center'}}>
            <span className="material-icons-outlined" style={{'marginRight': '5px'}}>
play_circle
</span>
<p>WSW</p>
            </div>
            
        </HighLight>
    )
}


export const Humidity: React.FC<Props> = props => {
    return(
        <HighLight classname="humidity">
            <p>Humidity</p>
            <p>{props.humidity}<span>%</span></p>
            <div className="displayVal">
                <p>0</p>
                <p>50</p>
                <p>100</p>
            </div>
            <div className="progress">
                <div className="value" style={{'width': '80%'}}></div>
            </div>
            <p style={{'textAlign': 'right', 'fontSize': '12px', 'width': '80%'}}>%</p>
        </HighLight>
    )
}



export const Visibility: React.FC<Props> = props => {
    return(
        <HighLight classname="visibility">
            <p>Visibility</p>
            <p>{props.visibilty} <span>miles</span></p>
        </HighLight>
    )
}

export const Pressure: React.FC<Props> = props => {
    return(
        <HighLight classname="pressure">
            <p>Air Pressure</p>
            <p>{props.air_pressure} <span>mb</span> </p>
        </HighLight>
    )
}



const mapStateToProps = (state: State) => {
    return{
        humidity: state.humidity, visibilty: state.visibilty, air_pressure : state.air_pressure, wind_speed : state.wind_speed
}
}

export default HighLight;