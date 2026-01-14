import './App.css'
import { useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from "./pages/ChatPage";
import TasksPage from "./pages/TasksPage";

function App() {

  
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
