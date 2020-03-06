from flask import Flask

def create_app():
    app = Flask(__name__)

    from app.test import bp as test_bp
    app.register_blueprint(test_bp, url_prefix='/api')

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    return app
