import React from 'react';
import logo from './logo.svg';
import Weather from './components/weather/weather';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Reducer from './store/reducer';


const store = createStore(Reducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Weather/>
      </Provider>
    </div>
  );
}

export default App;
