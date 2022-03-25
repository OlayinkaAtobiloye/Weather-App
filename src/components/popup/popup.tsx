import React from "react";
import './popup.scss';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import {State} from'../../store/reducer';



interface Props{
    visibility?: string,
    togglePopup?: any
}


const PopUp : React.FC<Props> = props => {
    return(
        <div className="popup" style={{'display': props.visibility}}>
            <span className="material-icons-outlined close" onClick={props.togglePopup}>
close
</span>
            <div>
            <span className="material-icons-outlined search" style={{'marginRight': '-16px'}}>
search
</span>
            <input type="text" placeholder="search location"/>
            <input type="search" value="Search"/>
            </div>
            <ul>
                <li className="city">
                    London<span className="material-icons-outlined">
chevron_right
</span>
                </li>
                <li className="city">
                Barcelona<span className="material-icons-outlined">
chevron_right
</span>
                </li>
                <li className="city">
                    Long Beach<span className="material-icons-outlined">
chevron_right
</span>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return{
    visibility: `${state.showPopup ? 'block' : 'none'}`
}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
    togglePopup: () => dispatch({type: 'TOGGLE_POPUP'})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);