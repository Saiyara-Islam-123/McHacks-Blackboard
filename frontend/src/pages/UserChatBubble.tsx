export default function UserChatBubble({ text }: { text: string }) {
	const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

	return (
		<div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg w-auto p-4 ml-auto text-left">
                    <p className="text-gray-800">{text}</p>
                    <p className="text-xs text-gray-500 mt-2">{currentTime}</p>
                </div>
	);
}
