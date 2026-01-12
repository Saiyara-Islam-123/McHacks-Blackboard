import { useNavigate } from "react-router-dom";

export default function ChatPage() {
	const navigate = useNavigate();
	const currentTime = new Date().toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	});

	return (
		<div className="min-h-screen min-w-screen flex flex-col items-center bg-gradient-to-b from-purple-50 to-white px-4">

			<header className="text-center pt-5 space-y-2">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Meow</h1>
				<p className="text-gray-600">Let's be our best self today!</p>
				<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 rounded-lg mb-5" onClick={() => navigate("/tasks")}>Tasks</button>
			</header>

			<div className="h-[70vh] w-[65vh] bg-white rounded-xl shadow p-6 flex flex-col justify-between mb-10">
				<div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg w-3/4 p-4">
					<p className="text-gray-800">Meow! Meow Meow Meow Meow Meow Meow. Meow?</p>
					<p className="text-xs text-gray-500 mt-2">{currentTime}</p>
				</div>

				<div className="flex w-full max-w-3xl space-x-2">
					<input className="flex-1 border rounded-lg px-4 py-3 bg-gray-100 text-gray-500" placeholder="Type your message or task..." />
					<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 rounded-lg">Enter</button>
				</div>
			</div>
			
		</div>
  );
}

