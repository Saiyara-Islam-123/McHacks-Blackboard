import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Task from "./Task.tsx";
// need to mark steps as completed/not completed when completed/ not completed
export default function TasksPage() {
	const navigate = useNavigate();
	const taskList = [
		{
			id: "1",
			title: "help me!!",
			currentIndex: -1,
			steps: [
				{ id: "1", text: "Meow", completed: false },
				{ id: "2", text: "meow", completed: false },
				{ id: "3", text: "meow", completed: false },
				{ id: "4", text: "meow", completed: false },
				{ id: "5", text: "meow", completed: false },
			]
		},

		{
            id: "2",
            title: "help me!!",
			currentIndex: -1,
            steps: [
                { id: "1", text: "Meow", completed: false },
                { id: "2", text: "meow", completed: false },
                { id: "3", text: "meow", completed: false },
                { id: "4", text: "meow", completed: false },
                { id: "5", text: "meow", completed: false },
            ]   
		},

		{
            id: "3",
            title: "help me!!",
			currentIndex: -1,
            steps: [
                { id: "1", text: "Meow", completed: false },
                { id: "2", text: "meow", completed: false },
                { id: "3", text: "meow", completed: false },
                { id: "4", text: "meow", completed: false },
                { id: "5", text: "meow", completed: false },
            ]   
		},

		{
            id: "4",
            title: "help me!!",
			currentIndex: -1,
            steps: [
                { id: "1", text: "Meow", completed: false },
                { id: "2", text: "meow", completed: false },
                { id: "3", text: "meow", completed: false },
                { id: "4", text: "meow", completed: false },
                { id: "5", text: "meow", completed: false },
            ]   
		},
	];
	const [tasks, setTasks] = useState(taskList);

	function updateStep(taskId: string, direction: number) {  // should this be a const? everyone online uses const
		setTasks(tasks => tasks.map(t => {
			if (t.id !== taskId) return t;
			let newIndex = t.currentIndex+direction;
			return {
				...t,
				currentIndex: newIndex,
			}
		}));
	}

	return (
		<div className="min-h-screen min-w-screen bg-gradient-to-b from-purple-50 to-white px-4">
			<header className="text-center pt-10 mb-8">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Meow</h1>
				<p className="text-gray-600 mb-2">Breaking tasks down, one step at a time...</p>
				<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 rounded-lg" onClick={() => navigate("/chat")}>Chat</button>
			</header>

			<div className="flex gap-5 flex-wrap">
				{tasks.map(task => (
					<Task key={task.id} task={task} onNext={() => updateStep(task.id,1)} onPrevious={() => updateStep(task.id,-1)} />
				))}
			</div>

		</div>
  );
}

