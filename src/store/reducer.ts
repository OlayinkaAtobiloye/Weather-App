import {Action, Reducer} from 'redux';

export const initialState:State = {
    showPopup: false,
    celcius: true,
    humidity: new Number, 
    visibilty: new Number, 
    air_pressure : new Number, 
    wind_speed : new Number,
    woeid: new Number
}

export type State = {
    showPopup: boolean,
    celcius: boolean,
    humidity: Number, visibilty: Number, air_pressure : Number, wind_speed : Number, woeid: Number
}



interface ACTIONTYPE extends Action {
    type: string,
    payload: {humidity: Number, visibilty: Number, air_pressure : Number, wind_speed : Number},
    woeid: Number
}


const reducer = (state: State = initialState, action: ACTIONTYPE) => {
    switch(action.type){
        case 'TOGGLE_POPUP':
            return{
                ...state,
                showPopup: !state.showPopup
            }
            case 'SET_UNIT':
                return{
                    ...state,
                    celcius: !state.celcius
                }
                case 'SET_WOEID':
                    return{
                        ...state,
                        woeid: action.woeid
                    }
                case 'SET_WEATHER':
                    return{
                        ...state,
                        humidity: action.payload.humidity, visibilty: action.payload.visibilty, air_pressure : action.payload.air_pressure, wind_speed : action.payload.wind_speed
                    }
    }
    return state
}

export default reducer;