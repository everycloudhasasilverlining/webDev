from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit')
def submit():
    name = request.args.get('name')

    lower_letter = False
    upper_letter = False
    num_end = False

    lower_letter = any(c.islower() for c in name)
    upper_letter = any(c.isupper() for c in name)
    num_end = name[-1].isdigit()

    report = lower_letter and upper_letter and num_end

    return render_template('submit.html', report=report, lower=lower_letter, upper=upper_letter, num_end=num_end)


# @app.route('/')
# def index():
#     return render_template('index.html')


# @app.route('/signup_form')
# def signup_form():
#     return render_template('signup.html')


# @app.route('/thankyou')
# def thankyou():
#     first = request.args.get('first')
#     last = request.args.get('last')
#     return render_template('thankyou.html', first=first, last=last)

# @app.errorhandler(404)
# def page_not_found(e):
#     return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
