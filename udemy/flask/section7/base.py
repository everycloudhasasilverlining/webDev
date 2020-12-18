from flask import Flask
app = Flask(__name__)


@app.route('/')
def index():
    return '<h1>Hello World!</h1>'


@app.route('/info')
def info():
    return '<h1>Information about puppies</h1>'


@app.route('/puppy/<name>')
def puppy(name):
    if name[-1].lower() == 'y':
        name = name[:-1] + 'ish'
    else:
        name = name + 'y'
    return '<h1>This is a page for {}</h1>'.format(name.upper())


if __name__ == "__main__":
    app.run(debug=True, port=5000)
