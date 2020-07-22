function getAnswer() {
	let answer;
	if (input_1.checked == true) {
		answer = input_1.value;
	} else if (input_2.checked == true) {
		answer = input_2.value;
    } else if (input_3.checked == true) {
		answer = input_3.value;
    } else if (input_4.checked == true) {
		answer = input_4.value;
	}else {
		answer = "N/A";
	}
	return evalAnswer(answer);
}

function evalAnswer(answer) {
	if (answer == array_questions[counter].answer_key) {
		array_answers[counter] = {
			username: username,
			answer: answer,
			hint: hint_request,
			topic: array_questions[counter].topic,
			sub_topic: array_questions[counter].sub_topic,
			evaluation: "correct",
		};
	} else {
		array_answers[counter] = {
			username: username,
			answer: answer,
			hint: hint_request,
			topic: array_questions[counter].topic,
			sub_topic: array_questions[counter].sub_topic,
			evaluation: "incorrect",
		};
	}
	showFeedback();
	sumAnswerEvals();
	return array_answers;
}

function incrementQuestion() {
	counter = counter + 1; // Also written as counter += 1;
	text_question_id.textContent = counter + 1;
	text_statement.textContent = array_questions[counter].statement;
    text_input1.textContent = array_questions[counter].label[0]; 
    text_input2.textContent = array_questions[counter].label[1]; 
    text_input3.textContent = array_questions[counter].label[2]; 
    text_input4.textContent = array_questions[counter].label[3]; 
	if (counter >= array_questions.length - 1) {
		btn_next.disabled = true;
	}
	btn_previous.disabled = false;
    showVideo();
	showFeedback();
}

function decrementQuestion() {
	counter = counter - 1; // Also written as counter -= 1;
	text_question_id.textContent = counter + 1;
	text_statement.textContent = array_questions[counter].statement;
    text_input1.textContent = array_questions[counter].label[0]; 
    text_input2.textContent = array_questions[counter].label[1]; 
    text_input3.textContent = array_questions[counter].label[2]; 
    text_input4.textContent = array_questions[counter].label[3]; 
	if (counter <= 0) {
		btn_previous.disabled = true;
	}
	btn_next.disabled = false;
    showVideo();
	showFeedback();
}

function showFeedback() {
	if (array_answers[counter] == undefined) {
		cont_success.classList.add("d-none");
		cont_danger.classList.add("d-none");
		btn_submit.disabled = false;
	} else {
		if (array_answers[counter].evaluation == "correct") {
			cont_success.classList.remove("d-none");
			cont_danger.classList.add("d-none");
			btn_submit.disabled = true;
		} else {
			cont_success.classList.add("d-none");
			cont_danger.classList.remove("d-none");
			btn_submit.disabled = true;
		}
	}
}

function routeView(view) {
	switch (view) {
		case "landing":
			sec_landing.classList.remove("d-none");
			sec_quiz.classList.add("d-none");
			break;
		case "quiz":
			username = input_username.value;
			text_question_total.textContent = array_questions.length;
            text_statement.textContent = array_questions[counter].statement;
            text_input1.textContent = array_questions[counter].label[0];
            text_input2.textContent = array_questions[counter].label[1];
            text_input3.textContent = array_questions[counter].label[2];
            text_input4.textContent = array_questions[counter].label[3];
            showVideo();
			sec_quiz.classList.remove("d-none");
			sec_landing.classList.add("d-none");
			break;
		default:
			return "Error: View is not recognized by the router";
			break;
	}
}

function getHint(){
    console.log("btn_hint click event");
	let hint = array_questions[counter].hint;
    console.log(hint);
	text_agent_dialogue.textContent = hint;
}
function showVideo(){
    if(array_questions[counter].video.display == true){
        iframe_video.style.display = "block";
        iframe_video.src = array_questions[counter].video.src;
    }else
       iframe_video.style.display = "none";
       }
function sumAnswerEvals() {
	let correct = 0,
		incorrect = 0;
	for (let i = 0; i < array_answers.length; i++) {
		if (array_answers[i].evaluation == "correct") {
			correct++;
		} else {
			incorrect++;
		}
	}
	text_question_correct.textContent = correct;
	text_question_incorrect.textContent = incorrect;
}
