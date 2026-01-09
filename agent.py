import requests

f = open("api.txt")

API_KEY = (f.read())
BASE_URL = "https://app.backboard.io/api"
HEADERS = {"X-API-Key": API_KEY}

def create_agent(name, description):

    response = requests.post(
        f"{BASE_URL}/assistants",
        json={"name": name, "description": description},
        headers=HEADERS,
    )
    assistant_id = response.json()["assistant_id"]
    return assistant_id

def thread(assistant_id):
    response = requests.post(
    f"{BASE_URL}/assistants/{assistant_id}/threads",
    json={},
    headers=HEADERS,
    )
    thread_id = response.json()["thread_id"]
    return thread_id

def response(thread_id, content):
    response = requests.post(
    f"{BASE_URL}/threads/{thread_id}/messages",
    headers=HEADERS,
    data={"content": content, "stream": "false", "memory": "Auto"},
    )
    print(response.json().get("content"))