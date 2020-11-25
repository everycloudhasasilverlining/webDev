from flask import Blueprint, render_template

second = Blueprint("second", __name__, static_folder='static', template_folder='templates')

@second.route('/second')
@second.route('/')
def scnd():
    return render_template('home.html')


