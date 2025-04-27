// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [targetNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num)) {
      setMessage('Please enter a valid number.');
    } else if (num === targetNumber) {
      setMessage('🎯 Correct! You guessed the number!');
    } else if (num < targetNumber) {
      setMessage('📈 Too low! Try a higher number.');
    } else {
      setMessage('📉 Too high! Try a lower number.');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 10</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <br /><br />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
