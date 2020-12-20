from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from view import views

app = Flask(__name__)
app.register_blueprint(views)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
