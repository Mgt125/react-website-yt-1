from flask import Blueprint, jsonify
from models import Game

game_bp = Blueprint("game", __name__, url_prefix="/api/games")

@game_bp.route("/")
def get_games():
    games = Game.query.all()
    result = {}
    for game in games:
        result.setdefault(game.game_type, []).append({
            "id": game.id,
            "name": game.name
        })
    return jsonify(result)
