import os

from flask import Flask, send_from_directory

from extensions import db
from routes.api import api_bp  # Import the Blueprint


app = Flask(__name__, static_folder="../frontend/dist", static_url_path="/")

# Use SQLite for local development, PostgreSQL for production (Heroku)
db_path = os.path.join(os.getcwd(), 'test.db')  # SQLite file in current directory
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{db_path}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Avoid warnings

db.init_app(app)

# Register the blueprint
app.register_blueprint(api_bp)

@app.route("/")
def serve_react():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == '__main__':
    app.run(debug=True)