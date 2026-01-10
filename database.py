import pandas as pd
import duckdb

def create_database(database, table_name, fields):
    conn = duckdb.connect("data/"+database)
    cur = conn.cursor()
    field_1, field_2 = fields
    cur.execute(f"CREATE TABLE IF NOT EXISTS {table_name}({field_1} TEXT, {field_2} TEXT)")
    conn.commit()
    cur.close()
    conn.close()

#def add_user(user_id, agent_id):

if __name__ == "__main__":
    create_database("agents.db", "agent", ("agent_id", "thread_id"))
    create_database("threads.db", "thread", ("thread_id", "response"))