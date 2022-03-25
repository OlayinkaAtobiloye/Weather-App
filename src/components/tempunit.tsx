import React from 'react';
import { Dispatch } from "redux";
import {State} from'../store/reducer';
import { connect } from 'react-redux';


interface Props {
    celcius?: boolean,
    setUnit?: any
    }

    
const Temp: React.FC<Props> = props => {
return(
    <div style={{'width': '100%', 'display': 'flex', 'justifyContent': 'flex-end', 'marginBottom': '48px'}}>
        <p style={props.celcius ? {'backgroundColor': '#E7E7EB', 'marginRight': '16px', 'color': '#110E3C'} : {'marginRight': '16px'}} className='tempUnit' onClick={props.setUnit}>℃</p>
        <p style={!props.celcius ? {'backgroundColor': '#E7E7EB', 'color': '#110E3C'} : {'backgroundColor': ''}} className='tempUnit' onClick={props.setUnit}>℉</p>
    </div>
)
}

const mapStateToProps = (state: State) => {
    return{
    celcius: state.celcius
}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
    setUnit: () => dispatch({type: 'SET_UNIT'})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Temp);