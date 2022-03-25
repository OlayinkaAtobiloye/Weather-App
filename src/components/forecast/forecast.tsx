import DayCard from "../day/day";
import React from "react";
import './forecast.scss';
import { Dispatch } from "redux";


const Forecast: React.FC<{}> = props => {
    const today = new Date();
    let oneday : Date = new Date()
    oneday.setDate(today.getDate() + 1)
    let twoday : Date = new Date()
    twoday.setDate(today.getDate() + 2)
    let threeday : Date = new Date()
    threeday.setDate(today.getDate() + 3)
    let fourday : Date = new Date()
    fourday.setDate(today.getDate() + 4)
    let fiveday : Date = new Date()
    fiveday.setDate(today.getDate() + 5)
    console.log(oneday.getDay())

    return(
        <div className="forecast">
        <DayCard date={`${oneday.getFullYear()}/${oneday.getMonth()}/${oneday.getDay()}`} tomorrow/>
        <DayCard date={`${twoday.getFullYear()}/${twoday.getMonth()}/${twoday.getDay()}`} day={twoday.toLocaleString('default', {weekday: 'short'})} month={twoday.toLocaleString('default', {month: 'short'})} mydate={twoday.getDate()}/>
        <DayCard date={`${threeday.getFullYear()}/${threeday.getMonth()}/${threeday.getDay()}`} day={threeday.toLocaleString('default', {weekday: 'short'})} month={threeday.toLocaleString('default', {month: 'short'})} mydate={threeday.getDate()}/>
        <DayCard date={`${fourday.getFullYear()}/${fourday.getMonth()}/${fourday.getDay()}`} day={fourday.toLocaleString('default', {weekday: 'short'})} month={fourday.toLocaleString('default', {month: 'short'})} mydate={fourday.getDate()}/>
        <DayCard date={`${fiveday.getFullYear()}/${fiveday.getMonth()}/${fiveday.getDay()}`} day={fiveday.toLocaleString('default', {weekday: 'short'})} month={fiveday.toLocaleString('default', {month: 'short'})} mydate={fiveday.getDate()}/>
       </div>
    )
}


export default Forecast;