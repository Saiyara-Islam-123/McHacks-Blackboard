import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import UserChatBubble from "./UserChatBubble.tsx";
import BotChatBubble from "./BotChatBubble.tsx";
import type { Message } from "../types.ts";

export default function ChatPage() {
	const navigate = useNavigate();
	const messagesEndRef = useRef<HTMLDivElement | null>(null);
	const messageList: Message[] = [
		{id: "1", role: "bot", content: "Meow! I will help you fix your problems!"}, 
		{id: "2", role: "user", content: "Fix all of my problems!"},
		{id: "3", role: "bot", content: "Meow! Ok, give me a task to do..."},
	]
	const [messages, setMessages] = useState<Message[]>(messageList);
	const [input, setInput] = useState("");
	const [_data, setData] = useState("");

	function addMessage(e) {
		e.preventDefault()
		if (!input.trim()) return;	
		setMessages(prev => [...prev, {id: "69", role: "user", content: input,}]);
		setInput("");
		const r = fetch("http://127.0.0.1:5000/post", {
		method: "POST",
		headers: {
		'Content-Type' : 'application/json'
		},
		body: JSON.stringify(input)
		})

	
		console.log(input);
	}

	function addMessagebot() {

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
		
		setMessages(prev => [...prev, {id: "70", role: "bot", content: _data,}]);
	}


	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	},[messages]);

	return (
		<div className="min-h-screen min-w-screen flex flex-col items-center bg-gradient-to-b from-purple-50 to-white px-4">

			<header className="text-center pt-5 space-y-2">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">=^..^=Meow.AI</h1>
				<p className="text-gray-600">Let's be our best self today!</p>
				<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 rounded-lg mb-5" onClick={() => navigate("/tasks")}>Tasks</button>
			</header>

			<div className="h-[70vh] w-[65vh] bg-white rounded-xl shadow p-6 flex flex-col gap-4 mb-10 overflow-y-auto">

				{messages.map(m =>
					m.role === "user" ? <UserChatBubble key={m.id} text={m.content} /> : <BotChatBubble key={m.id} text={m.content} />
				)}
				<div ref={messagesEndRef} />

				<div className="flex mt-auto w-full max-w-3xl space-x-2">
					<form>
					<input className="flex-1 border rounded-lg px-4 py-3 bg-gray-100 text-gray-500" placeholder="Type your message or task..." value={input} onChange={e => setInput(e.target.value)} />
					<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 rounded-lg" onClick={ (e) => addMessage(e) }>Enter</button>
					</form>
				</div>
			</div>
			
		</div>
  );
}



