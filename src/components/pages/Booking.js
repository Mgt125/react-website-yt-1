import React, { useState, useEffect } from 'react';
import './Booking.css';

function Booking() {
  const [gameType, setGameType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('60');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = { gameType, date, time, duration };
    console.log('Booking submitted:', bookingDetails);
    // TODO: Send to backend via POST request
  };


  return (
    <div className='booking-container'>
      <h1>Book Your Game Session</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Game Type:
          <select value={gameType} onChange={(e) => setGameType(e.target.value)} required>
            <option value="">-- Select game type --</option>
            <option value="VR Gaming">VR Gaming</option>
            <option value="Esports">Esports</option>
            <option value="Party Games">Party Games</option>
            <option value="Solo Play">Solo Play</option>
            <option value="Board Games">Board Games</option>
          </select>
        </label>

        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>

        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>

        <label>
          Duration (minutes):
          <select value={duration} onChange={(e) => setDuration(e.target.value)} required>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="120">120</option>
          </select>
        </label>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;
