import React, { useEffect, useState } from 'react';
import './UserBookings.css';

function UserBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const userEmail = 'mogomotsithateng@gmail.com';
            const res = await fetch(`http://localhost:5016/api/bookings/user?userId=${userEmail}`);
            const data = await res.json();

            if (res.ok) {
                setBookings(data.bookings);
            } else {
                alert(data.error || 'Failed to load bookings');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (booking) => {
        setSelectedBooking({ ...booking });
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this booking?")) return;
        try {
            const res = await fetch(`http://localhost:5016/api/bookings/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setBookings(bookings.filter(b => b.id !== id));
            } else {
                alert('Failed to delete booking');
            }
        } catch (err) {
            console.error('Delete error:', err);
            alert('Something went wrong');
        }
    };

    const handleModalChange = (e) => {
        setSelectedBooking({ ...selectedBooking, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const res = await fetch(`http://localhost:5016/api/bookings/${selectedBooking.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selectedBooking)
            });
            if (res.ok) {
                setShowModal(false);
                fetchBookings();
            } else {
                alert('Failed to update booking');
            }
        } catch (err) {
            console.error('Update error:', err);
            alert('Something went wrong');
        }
    };

    if (loading) return <p>Loading your bookings...</p>;
    if (bookings.length === 0) return <p>You have no bookings yet.</p>;

    return (
        <div className="user-bookings-container">
            <h1>Your Bookings</h1>
            <div className="bookings-grid">
                {bookings.map((booking) => (
                    <div key={booking.id} className="booking-card">
                        <h3>{booking.station}</h3>
                        <p><strong>Game Type:</strong> {booking.gameType}</p>
                        <p><strong>Date:</strong> {booking.date}</p>
                        <p><strong>Time:</strong> {booking.time}</p>
                        <p><strong>Duration:</strong> {booking.durationMinutes} minutes</p>
                        <p><strong>Total:</strong> R{booking.cost}</p>
                        <button onClick={() => handleEdit(booking)}>Edit</button>
                        <button onClick={() => handleDelete(booking.id)}>Delete</button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && selectedBooking && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Edit Booking</h2>
                        <label>
                            Game Type:
                            <input name="gameType" value={selectedBooking.gameType} onChange={handleModalChange} />
                        </label>
                        <label>
                            Date:
                            <input name="date" type="date" value={selectedBooking.date.slice(0, 10)} onChange={handleModalChange} />
                        </label>
                        <label>
                            Time:
                            <input name="time" type="time" value={selectedBooking.time} onChange={handleModalChange} />
                        </label>
                        <label>
                            Duration (minutes):
                            <input name="durationMinutes" type="number" value={selectedBooking.durationMinutes} onChange={handleModalChange} />
                        </label>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserBookings;
