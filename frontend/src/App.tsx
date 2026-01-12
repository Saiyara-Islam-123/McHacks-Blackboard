import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import ChatPage from "./pages/ChatPage";
import TasksPage from "./pages/TasksPage";

function App() {
  const [_data, setData] = useState([{}]);


  useEffect(() => {

    fetch("http://127.0.0.1:5000/meow").then(
      res => res.json()
    ).then(
      _data => {
        setData(_data)
        console.log(_data)

      }
    )

  }, [_data]) 

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
