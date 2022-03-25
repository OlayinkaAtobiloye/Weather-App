import React from "react";
import "./container.scss";
import Forecast from "../forecast/forecast";
import {Wind, Humidity} from '../highlight/highlight';
import Holder from '../holder/holder';
import TempUnit from '../tempunit';

interface Props {
name: string
}

const Container: React.FC<Props> = props => {
  return (
    <main>
      <TempUnit/>
      <Forecast/>
      <h1>Today’s Hightlights </h1>
      <Holder/>
    </main>
  );
};

export default Container;



