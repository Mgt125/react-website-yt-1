from flask import Flask
from flask_cors import CORS
from models import db
from routes.auth_routes import auth_bp  # Make sure the import path is correct
from routes.booking_routes import booking_bp

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.secret_key = "supersecret"
CORS(app, supports_credentials=True)

db.init_app(app)

# This line registers the auth routes under /api/auth
app.register_blueprint(auth_bp)
app.register_blueprint(booking_bp)

# Optional route to test if backend works
@app.route("/")
def home():
    return "Backend is running"

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

