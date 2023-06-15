export interface Question {
    question: string;
    options: string[];
    answer: string;
}

export const questionsUnity: Question[] = [
	{
		question: "Which programming language is commonly used in Unity game development?",
		options: ["Java", "C++", "Python", "C#"],
		answer: "C#"
	},
	{
		question: "What is the primary purpose of the Unity Editor?",
		options: ["Playtesting", "Writing Code", "Creating 3d Models", "Building Game Levels"],
		answer: "Building Game Levels"
	},
	{
		question: "Which component is responsible for defining the behavior of a GameObject in Unity?",
		options: ["Renderer", "Collider", "Script", "Animator"],
		answer: "Script"
	},
	{
		question: "What does the term 'prefab' refer to in Unity?",
		options: ["3D Model", "Reusable GameObject Template", "Particle Effect", "Prebuilt Game Level"],
		answer: "Reusable GameObject Template"
	},
	{
		question: "Which Unity component is used to detect and respond to user input, such as mouse clicks or keyboard pressed?",
		options: ["Rigidbody", "Collider", "Camera", "Input"],
		answer: "Input"
	},
]
