from flask import Flask, request
from flask_cors import CORS
import sys
import os
SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))
import re

from backend.database import *
from backend.agent import *

def clean_string_pre_query(string):
    str_output = re.sub(r"'", "’", string)
    return str_output

app = Flask (__name__)
CORS(
    app,
)

@app.route("/", methods = ["GET"])
def get_response():
    return get_all_responses("db839f92-dac3-457f-ae6c-11e7fb7d653c").tail(1).to_json(orient="records")

@app.route("/post", methods = ["POST"])
def give_input():
    user_input = request.get_json()
    print("!RESPONSE!!!!!!!!!!!"+user_input)
    #res = response(thread_id="db839f92-dac3-457f-ae6c-11e7fb7d653c", content=user_input)
    res = "DEFAULT RESPONSE FOR DEBUGGING"
    add_thread_and_response(thread_id="db839f92-dac3-457f-ae6c-11e7fb7d653c", response=res)
    return res



if __name__ == '__main__':
    #print(clean_string_pre_query(string="Here's"))
    app.run(debug=True)
    #create_database("agents.db", "agent", ("agent_id", "thread_id"))
    #create_database("threads.db", "thread", ("thread_id", "response"))
    #add_agent_and_thread(thread_id="Food", agent_id="bot")
    #add_thread_and_response(thread_id="Food", response="Hello, here’s how to make fries")
    
