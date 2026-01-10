from flask import Flask, render_template, request, session
from flask_cors import CORS

app = Flask (__name__)
CORS(app)

@app.route("/meow")
def home():
    return {"Cats": "Meow" }

@app.route("/")
def main_page():
    render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)