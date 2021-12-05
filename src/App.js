import React, { useState } from 'react';
import User from './components/User';
import Report from './components/Report';
import './App.css';
// import dot from './images/icon-ellipsis.svg';
// import data from './data.json';
function App() {
  const [timeFrame, setTimeFrame] = useState({ 'daily': false, 'weekly': true, 'monthly': false });
  const timeFrameHandler = (daily, weekly, monthly) => {
    setTimeFrame({ 'daily': daily, 'weekly': weekly, 'monthly': monthly });
  }
  return (
    <div class="container">
      <User onTimeFrameClick={timeFrameHandler} timeFrame={timeFrame} />
      <Report timeFrame={timeFrame} />
    </div>
  );
}

export default App;
