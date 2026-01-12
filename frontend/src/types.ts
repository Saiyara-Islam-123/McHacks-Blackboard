export type Task = {
	id: string;
	title: string;
	currentIndex: number;
	steps: Step[];
}

export type Step = {
	id: string;
	text: string;
	completed: boolean;
}

export type Message = {
	id: string;
	role: "user" | "bot";
	content: string;
}
