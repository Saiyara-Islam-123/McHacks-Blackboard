export default function Task({ task, onNext, onPrevious }) { // fix later sorry
	const progress = Math.round(((task.currentIndex+1)/task.steps.length)*100);

	return (
		<div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{task.title}</h2>
                    <p className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Step {task.currentIndex+1} of {task.steps.length}</p>
                </div>

                <div className="w-full bg-gray-200 rounded mb-2">
                    <div className="h-2 bg-black rounded" style={{ width: `${progress}%` }} />
                </div>

                <p className="text-sm text-gray-600 mb-2">{progress}% complete</p>

                <div className="space-y-3">
                    {task.steps.map((step, i) => (
                        <div key={step.id} className={`flex items-center gap-3 border rounded-lg p-4 ${i === task.currentIndex ? "border-purple-500 bg-purple-50" : "border-gray-200"}`}>
                            <input type="checkbox" checked={i <= task.currentIndex} className="peer" />
                            <label className="peer-checked:line-through peer-checked:text-gray-500 text-purple-500 font-semibold">{step.text}</label>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                    <button disabled={task.currentIndex === -1} className="text-gray-500 disabled:opacity-50" onClick={onPrevious}>Previous Step</button>

                    <div className="flex gap-3">
                        <button disabled={task.currentIndex === task.steps.length-1} onClick={onNext} className="bg-green-600 text-white px-4 py-2 rounded-lg">Complete Step</button>
                    </div>
                </div>
            </div>
	);
}
