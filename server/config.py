import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///gameroom.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = 'your-secret-key'  # Replace with something strong
