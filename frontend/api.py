from flask import Flask, render_template, request, session
from flask_cors import CORS

app = Flask (__name__)
cors = CORS(app)

@app.route("/meow")
def home():
    return {"Dogs": "Bark" }


if __name__ == '__main__':
    app.run(debug=True)