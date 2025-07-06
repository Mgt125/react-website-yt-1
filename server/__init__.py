from flask import Flask
from flask_cors import CORS
from .models import db
from flask_jwt_extended import JWTManager

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    db.init_app(app)
    CORS(app)
    JWTManager(app)

    from .routes.auth_routes import auth_bp
    from .routes.booking_routes import booking_bp
    from .routes.game_routes import game_bp

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(booking_bp, url_prefix='/api/bookings')
    app.register_blueprint(game_bp, url_prefix='/api/games')

    return app
