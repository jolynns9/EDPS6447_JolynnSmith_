var array_questions = [
		{
		statement: "What is NOT a common plot line between Star wars and Harry Potter.",
		topic: "Star Wars",
		sub_topic: "Harry Potter",
		answer_key: "option4",
		hint: "What does the video say?",
		type: "multiple_choice",
		label: [
            "There is an ancient kind of magic.", 
            "There is a young male orphan protagonist.", 
            "There is a supervillan who killed the hero's parents.", 
            "The hero's name is changed for his protection."],
		video: { display: true, src: "https://www.youtube.com/embed/wbQEryw2f38" },
	},
    {
		statement: "What was the flaw in both Harry Potter and Star Wars that made it hard to protect the hero?",
		topic: "Star Wars",
		sub_topic: "Harry Potter",
		answer_key: "option1",
		hint: "Harry Potter and Luke Skywalker were the names of both heros. ",
		type: "multiple_choice",
		label: [
            "They did not change his name.", 
            "They did not send him to live with relatives.", 
            "They did not teach him about the magical powers he posessed.", 
            "He did not have friends."],
		video: { display: true, src: "https://www.youtube.com/embed/wbQEryw2f38" },
		
        
	},

	{
		statement: "What is the name of Han Solo's ship?",
		topic: "Star Wars",
		sub_topic: "Han Solo",
		answer_key: "option3",
		hint: "The first word starts with an M. https://thoughtcatalog.com/katee-fletcher/2020/04/star-wars-trivia-questions/",
		type: "multiple_choice",
		label: [
			"Darth Vader",
			"All Terrain Armored Transport",
			"Millennium Falcon",
			"The Sith",
		],
		video: {display: false, source: "N/A" },
	},
	{
		statement: "When Leia, first tells Han Solo that she loves him, what is his reply?",
		topic: "Star Wars",
		sub_topic: "Leia",
		answer_key: "option1",
		hint: "Her reply was two words.",
		type: "multiple_choice",
		label: [
			"I know.",
			"Get Lost!",
			"I love you too.",
			"I always knew.",
		],
		video: { display: false, source: "N/A" },
	},
	{
		statement: "Who was the last one to jump down the Death Star’s garbage chute?",
		topic: "Star Wars",
		sub_topic: "Harry Potter",
		answer_key: "option1",
		hint: "He loves Leia.",
		type: "multiple_choice",
		label: ["Han Solo", "Luke", "Leia", "Chewbacca"],
		video: { display: false, source: "N/A" },
		
	}
];

var array_answers = [];

console.log(array_questions);
console.log(array_answers);
console.log(array_questions[1].statement);

