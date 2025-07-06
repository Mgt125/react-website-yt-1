// src/components/pages/UserBookings.js
import React, { useEffect, useState } from 'react';
import './UserBookings.css';

function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/bookings/user', {
          credentials: 'include',
        });
        const data = await res.json();
        if (res.ok) {
          setBookings(data.bookings);
        } else {
          alert(data.error || 'Failed to load bookings');
        }
      } catch (err) {
        console.error(err);
        alert('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading your bookings...</p>;

  if (bookings.length === 0) {
    return <p>You have no bookings yet.</p>;
  }

  return (
    <div className="user-bookings-container">
      <h1>Your Bookings</h1>
      <div className="bookings-grid">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3>{booking.station_name}</h3>
            <p><strong>Game Type:</strong> {booking.game_type}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Duration:</strong> {booking.duration} minutes</p>
            <p><strong>Total:</strong> R{booking.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserBookings;
