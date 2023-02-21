import { useState } from 'react';
import { Button } from "@mui/material";
import './App.css';
import Timer from './Comp/Timer';

function App() {

  const [reps, setReps] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Workout Timer</h2>
      </header>

      <Timer/>

      <br/>

      <p>Reps:</p>
      <Button variant="contained" onClick={() => setReps(reps + 1)}>{reps}</Button>
      <Button variant="contained" onClick={() => setReps(0)}>Reset Reps</Button>

    </div>
  );
}

export default App;
