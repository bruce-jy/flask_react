import time
from app.test import bp

@bp.route('/time')
def get_current_time():
    return {'time': time.time()}
