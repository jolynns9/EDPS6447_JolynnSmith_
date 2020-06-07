var array_questions = [
	{
		statement: "Star wars and Harry Potter follow a similar plot line.",
		topic: "Star Wars",
		sub_topic: "Harry Potter",
		answer_key: "option1",
		hint: "What is the opinion of the video?"
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "true", source: "https://www.youtube.com/embed/wbQEryw2f38" },
		help: ["Even if you don't agree, what is the opinion of the video?"]
	},
	{
		statement: "In both Harry Potter and Star Wars, the hero spends a lot of quality time with their parents.",
		topic: "Star Wars",
		sub_topic: "Harry Potter",
		answer_key: "option2",
		hint: "What does the video say? ",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "true", source: "https://www.youtube.com/embed/wbQEryw2f38" },
		help: ["Sorry, I don't have any additional information to share for this question."]
	},
	{
		statement: "Select the correct option. What is the name of Han Solo's ship?",
		topic: "Star Wars",
		sub_topic: "Han Solo",
		answer_key: "option3",
		hint: "https://thoughtcatalog.com/katee-fletcher/2020/04/star-wars-trivia-questions/",
		type: "multiple_choice",
		labels: [
			"Darth Vader",
			"All Terrain Armored Transport",
			"Millennium Falcon",
			"The Sith",
		],
		video: { display: "false", source: "N/A" },
		help: [
			"The first word starts with 'M' and the second word starts with 'F'.",
		]
	},
	{
		statement: "When Leia, first tells Han Solo that she loves him, what is his reply?",
		topic: "Star Wars",
		sub_topic: "Leia",
		answer_key: "option1",
		hint: "Watch the movie",
		type: "multiple_choice",
		labels: [
			"I know.",
			"Get Lost!",
			"I love you too.",
			"I always knew.",
		],
		video: { display: "false", source: "N/A" },
		help: [
			"Her reply was two words.",
		]
	},
	{
		statement: "JWho was the last one to jump down the Death Star’s garbage chute?",
		topic: "Star Wars",
		sub_topic: "Harry Potter",
		answer_key: "option1",
		hint: "https://thoughtcatalog.com/katee-fletcher/2020/04/star-wars-trivia-questions/",
		type: "multiple_choice",
		labels: ["Han Solo", "Luke", "Leia", "Chewbacca"],
		video: { display: "false", source: "N/A" },
		help: ["He loves Leia."],
	}
];

var array_answers = [];

console.log(array_questions);
console.log(array_answers);
console.log(array_questions[1].statement);
