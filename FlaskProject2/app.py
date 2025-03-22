from flask import Flask, render_template

app = Flask(__name__)

# Home Page
@app.route('/')
def home():
    return render_template('login.html')

# About Page
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/register')
def register():
    return render_template('register.html')
# Contact Page
# @app.route('/contact')
# def contact():
#     return render_template('contact.html')
#
# # Dashboard Page
# @app.route('/dashboard')
# def dashboard():
#     return render_template('dashboard.html')

if __name__ == '_main_':
    app.run(debug=True)