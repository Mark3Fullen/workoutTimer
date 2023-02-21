import { Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null)
  
    useEffect(() => {
    if (isRunning) {

        intervalRef.current = setInterval(() => {
            if (seconds === 59) {
            setSeconds(0);
            setMinutes(minutes + 1);
            } else {
            setSeconds(seconds + 1);
            }
        }, 1000);

    }
      return () => clearInterval(intervalRef.current);
    }, [isRunning, seconds, minutes]);
  
    return (
      <div>
        <h1>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
        <Button variant="contained" onClick={() => setIsRunning(!isRunning)}>{!isRunning ? "Start" : "Stop"}</Button>
        <Button variant="contained" onClick={() => {
            setSeconds(0);
            setMinutes(0);
        }}>Restart</Button>
      </div>
    );
  }
  
  export default Timer;
  