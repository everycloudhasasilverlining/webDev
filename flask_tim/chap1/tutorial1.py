
from flask import Flask, redirect, url_for, render_template, request, session, flash, get_flashed_messages
from datetime import timedelta

app = Flask(__name__)
app.secret_key = 'hello'
app.permanent_session_lifetime = timedelta(minutes=5)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        session.permanent = True
        user = request.form['nm']
        session['user'] = user
        return redirect(url_for('user'))
    else:
        if 'user' in session:
            return redirect(url_for("user"))
        else:
            return render_template('login.html')

@app.route('/user')
def user():
    if 'user' in session:
        user = session['user']
        return '<h1>{}</h1>'.format(user)
    else:
        return redirect(url_for("login"))

@app.route('/logout')
def logout():
    if "user" in session:
        user = session['user']
        flash('You have been logged out, {}'.format(user), 'info')
    session.pop('user', None)
    return redirect(url_for("login"))




if __name__ == '__main__':
    app.run(debug=True, port=5050)

