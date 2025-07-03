import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  // Booking state
  const [gameType, setGameType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('60');

  // User info state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      firstName,
      lastName,
      email,
      gameType,
      date,
      time,
      duration,
    };
    console.log('Booking submitted:', bookingDetails);
    // TODO: Send to backend via POST request
  };

  return (
    <div className='booking-container'>
      <h1>Book Your Game Session</h1>
      <form onSubmit={handleSubmit}>
        {/* User Information */}
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {/* Booking Details */}
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