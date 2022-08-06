import React from 'react';
import './index.css';
import PropsFunction from './Components/002_props/PropsFunction';

import EventClass from './Components/004-events/EventClass'

const title = "React";

function App() {
  return (
    <div className>
      <h1>Hello {title}</h1>

      <label htmlFor="search"> Search </label>
      <input id="search" type="text"></input >
      <PropsFunction firstName = "Petr" lastName= "Stepanov"/>
      <EventClass></EventClass>
    </div>
  );
}

export default App;
