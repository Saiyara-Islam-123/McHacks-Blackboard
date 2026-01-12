import pandas as pd
import duckdb
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

def create_database(database, table_name, fields):
    conn = duckdb.connect(f"{dir_path}/data/"+database)
    cur = conn.cursor()
    field_1, field_2 = fields
    cur.execute(f"CREATE TABLE IF NOT EXISTS {table_name}({field_1} TEXT, {field_2} TEXT)")
    conn.commit()
    cur.close()
    conn.close()

def add_agent_and_thread(thread_id, agent_id):
    conn = duckdb.connect(f"{dir_path}/data/agents.db")
    cur = conn.cursor()
    cur.execute(f"INSERT INTO agent (agent_id, thread_id) VALUES ('{agent_id}', '{thread_id}')")
    conn.commit()
    cur.close()
    conn.close()

def add_thread_and_response(thread_id, response):
    conn = duckdb.connect(f"{dir_path}/data/threads.db")
    cur = conn.cursor()
    cur.execute(f"INSERT INTO thread (thread_id, response) VALUES ('{thread_id}', '{response}')")
    conn.commit()
    cur.close()
    conn.close()

def get_all_threads(agent_id):
    conn = duckdb.connect(f"{dir_path}/data/agents.db")
    cur = conn.cursor()
    df = cur.execute(f"select * from agent where agent_id='{agent_id}'").df()
    cur.close()
    conn.close()
    return df

def get_all_responses(thread_id):
    conn = duckdb.connect(f"{dir_path}/data/threads.db")
    cur = conn.cursor()
    df = cur.execute(f"select * from thread where thread_id='{thread_id}'").df()
    cur.close()
    conn.close()
    return df

#I assume the latest response is always at the bottom of the dataframe. just do df.tail(1)

if __name__ == "__main__":
    
    print(get_all_responses(thread_id="hello"))