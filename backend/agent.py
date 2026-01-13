import requests
import os
dir_path = os.path.dirname(os.path.realpath(__file__))

f = open(f"{dir_path}/api.txt")

API_KEY = (f.read())
BASE_URL = "https://app.backboard.io/api"
HEADERS = {"X-API-Key": API_KEY}

def create_agent(name, description):

        response = requests.post(
            f"{BASE_URL}/assistants",
            json={"name": name, "description": description},
            headers=HEADERS,
        )
        return response.json()["assistant_id"]
        
        
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
        return (response.json().get("content"))

def get_assistants():
        requests.get(f"{BASE_URL}/assistants",
    headers=HEADERS,
    params={
      "limit": "100"
    }
)

if __name__ == "__main__":
    agent_id = create_agent(name="bot", description="mental health chatbot to help divide tasks into smaller units")
    print("agent id: "+agent_id)
    thread_id = thread(agent_id)
    print("thread id: "+thread_id)
    print(response(thread_id, content="Give me easy steps on how to prepare a cesar salad for someone with OCD"))