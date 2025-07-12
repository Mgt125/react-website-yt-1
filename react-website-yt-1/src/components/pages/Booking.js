import React, { useState } from 'react';
import './Booking.css';

function Booking() {
    const [gameType, setGameType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('60');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingDetails = {
            userId: email, // Maps to Booking.UserId
            gameType,
            station: 'Station A', // It's fixed for now, I'll make it dynamic later
            date,
            time,
            durationMinutes: parseInt(duration),
            cost: parseInt(duration) * 1.5,
        };

        try {
            const res = await fetch('http://localhost:5016/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingDetails),
            });

            if (!res.ok) {
                const error = await res.json();
                console.error('Booking failed:', error);
                alert('Something went wrong while submitting the booking.');
                return;
            }

            const data = await res.json();
            alert('Booking successful! ID: ' + data.booking.id);
        } catch (err) {
            console.error('Error submitting booking:', err);
            alert('Something went wrong');
        }
    };

    return (
        <div className="booking-container">
            <h1>Book Your Game Session</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </label>
                <label>
                    Last Name:
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
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
