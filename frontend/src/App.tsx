import './App.css'
import { useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from "./pages/ChatPage";
import TasksPage from "./pages/TasksPage";

function App() {
  const [_data, setData] = useState("");
  const get_latest_response = async () => {
			fetch("http://127.0.0.1:5000/").then(
			res => res.json()
			).then(
			_data => {
				setData(_data)
				console.log(_data)
			}
			)
    }

  useEffect(() => {get_latest_response()}, [])
  
  return (
  	<BrowserRouter>
		<Routes>
			<Route path="/" element={<ChatPage />} />
			<Route path="/chat" element={<ChatPage />} />
			<Route path="/tasks" element={<TasksPage />} />
		</Routes>
	</BrowserRouter>

  )
}

export default App
