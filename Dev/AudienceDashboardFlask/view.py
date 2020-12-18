from flask import Flask, render_template, url_for, request, redirect, Blueprint

views = Blueprint("views", __name__, template_folder='templates')


@views.route('/')
def pageMain():
    return render_template("index.html")


@views.route('/segment')
def pageSegment():
    return render_template("segment.html")
