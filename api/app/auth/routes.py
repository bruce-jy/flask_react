from app.auth import bp

@bp.route('/login')
def login():
    return {'uid': 'jyjung', 'upw': 1234}
