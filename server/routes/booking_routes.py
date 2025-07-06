from flask import Blueprint, request, jsonify, session
from models import db, Booking, Station
from datetime import datetime

booking_bp = Blueprint('booking', __name__, url_prefix='/api/bookings')

@booking_bp.route('/user', methods=['GET'])
def get_user_bookings():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    bookings = Booking.query.filter_by(user_id=user_id).join(Station).all()
    
    booking_list = []
    for booking in bookings:
        station = booking.station
        booking_list.append({
            "station": station.name,
            "game_type": station.game_type,
            "date": booking.date.strftime("%Y-%m-%d"),
            "time": booking.time.strftime("%H:%M"),
            "duration": booking.duration,
            "cost": calculate_cost(booking.duration)
        })

    return jsonify(booking_list)

def calculate_cost(duration):
    rate_per_hour = 50  # example cost in your currency
    return (duration / 60) * rate_per_hour
