import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const [isHour, setHour] = useState()
  const [isMinute, setMinute] = useState()

  const changetTheDate = (type) => {
    const get = new Date()

    const get_hours = get.getHours();
    const get_minutes = get.getMinutes()

    if(type === 'hour'){
      setHour(get_hours)
    }
    if(type === "minute"){
      setMinute(get_minutes)
    }
  }

  useEffect(()=>{
    setInterval(()=>{
      changetTheDate('hour');
      changetTheDate('minute')
    }, 1000 )
  })
  return (
    <>
    <div className="container effect">
      <div className="clock clock_hour">
        <span>{isHour}</span>
      </div>
      <div className="clock clock_separetor">
        <span>:</span>
      </div>
      <div className="clock clock_minutes">
        <span>{isMinute}</span>
      </div>
    </div>
    </>
  )
}

export default App
