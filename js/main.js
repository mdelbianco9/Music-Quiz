// Array to store correct answers
var score = [0, 0];

//  Question 1, Ask question and provide input ------------------------ QUESTION 1------------
var one = document.getElementById('question1');
var q1 = document.createElement('h1');
q1.className = 'mojorisin';
var q1text = document.createTextNode('1. In The Doors song L.A. Woman, what is the phrase "Mr Mojo Risin" an anagram for?');
one.appendChild(q1);
q1.appendChild(q1text);

// Input for question 1---------------------------------INPUT
var input1 = document.createElement("INPUT");
input1.setAttribute("type", "text");
// Giving input BS class to style
input1.className = 'form-control';
// Put the input box into the HTML div
one.appendChild(input1);


// Put a button to go to the next question-----------------BUTTON ---Starts a function with other button functions inside
var button1 = document.createElement('button');
// Put button1 into the first HTML div
one.appendChild(button1);
button1.className = 'btn btn-lg';
// Add event listener to button so when clicked on it makes question 2------IMPORTANT LINE 
button1.addEventListener("click", function() {
	// ADDS 1 TO SCORE IF QUESTION 1 IS CORRECT, ADDS 0 IF WRONG-----------Question 1 Score!!!
	if (input1.value.toLowerCase() == "jim morrison") {
	score.push(1);
	console.log(score);
	} else {
		score.push(0);
		console.log(score);
	}
	// Creates a div for question2
	var two = document.createElement('div');
	// Gives question 2 an ID to be
	two.id = 'question2';
	// Creates an h1 to be put iside the div for question2
	var q2 = document.createElement('h1');
	// Class name for the h1 to style with CSS
	q2.className = 'redhot';
	var q2text = document.createTextNode('2. In their 1983 tour, Which band performed on stage with nothing but socks on their privates?')
	// Append the h1 elmement into the question2 div
	two.appendChild(q2);
	// Append text into the h1
	q2.appendChild(q2text);

	// Create multiple choice input-----------------------MULTI CHOICE INPUTS FOR QUESTION 2

	// Create a div element with all the labels in it
	var lildiv_Q2 = document.createElement('div');
	lildiv_Q2.className = 'lildiv_Q2';

	// ---------------------------------------------CREATE LABEL 1------
	// This is necissary for BS ro work
	var radio1 = document.createElement('div');
	// BS class
	radio1.className = 'radio';
	var label1 = document.createElement('label');
	// Text node for label
	var label1_text = document.createTextNode('Nirvana');
	// Create an input element with type = radio
	var label1_input = document.createElement('INPUT');
	label1_input.setAttribute("type", "radio");
	label1_input.setAttribute("name", "optradio");
	// Put label into Radio div
	radio1.appendChild(label1);
	// Put label_input into label1
	label1.appendChild(label1_input);
	// Put textnode into label
	label1.appendChild(label1_text);
	// Put label into lil div 2
	lildiv_Q2.appendChild(radio1);

	// --------------------------------------------CREATE LABEL 2------
	// This is necissary for BS to work
	var radio2 = document.createElement('div');
	// BS class
	radio2.className = 'radio';
	var label2 = document.createElement('label');
	// Text node for label
	var label2_text = document.createTextNode('Red Hot Chilli Pepers');
	// Create an input element with type = radio
	var label2_input = document.createElement('INPUT');
	label2_input.setAttribute("type", "radio");
	label2_input.setAttribute("name", "optradio");
	// Put label into radio div
	radio2.appendChild(label2);
	// Put label_input into label1
	label2.appendChild(label2_input);
	// Put textnode into label
	label2.appendChild(label2_text);
	// Put label into lil div 2
	lildiv_Q2.appendChild(radio2);


	// --------------------------------------------CREATE LABEL 3------
	// This is necissary for BS to work
	var radio3 = document.createElement('div');
	// BS class
	radio3.className = 'radio';
	var label3 = document.createElement('label');
	// Text node for label
	var label3_text = document.createTextNode('Foo Fighters');
	// Create an input element with type = radio
	var label3_input = document.createElement('INPUT');
	label3_input.setAttribute("type", "radio");
	label3_input.setAttribute("name", "optradio");
	// Put label into radio div
	radio3.appendChild(label3);
	// Put label_input into label1
	label3.appendChild(label3_input);
	// Put textnode into label
	label3.appendChild(label3_text);
	// Put label into lil div 2
	lildiv_Q2.appendChild(radio3);

	// --------------------------------------------CREATE LABEL 4------
	// This is necissary for BS to work
	var radio4 = document.createElement('div');
	// BS class
	radio4.className = 'radio';
	var label4 = document.createElement('label');
	// Text node for label
	var label4_text = document.createTextNode('Sublime');
	// Create an input element with type = radio
	var label4_input = document.createElement('INPUT');
	label4_input.setAttribute("type", "radio");
	label4_input.setAttribute("name", "optradio");
	// Put label into radio div
	radio4.appendChild(label4);
	// Put label_input into label1
	label4.appendChild(label4_input);
	// Put textnode into label
	label4.appendChild(label4_text);
	// Put label into lil div 2
	lildiv_Q2.appendChild(radio4);
	// Append lil div into div two
	two.appendChild(lildiv_Q2);



	// Create button to go to question 3

	var button2 = document.createElement('button');
	// Put button1 into the first HTML div
	two.appendChild(button2);
	button2.className = 'btn btn-lg';
	// PUT DIV TWO ON TO PAGE
	document.body.appendChild(two);
	// Add event listener to button so when clicked on it makes question 2------IMPORTANT LINE	
	// Put a button to go to CREATE BUTTON 3-------------------------BUTTON 2------------
	button2.addEventListener("click", function() {
		// Checks to see if the correct radio is checked then adds a 1 to the array, or a 0 if its not checked. 
		if (label2_input.checked) {
			console.log('Radio is working');
			// Adds a 1 to the array if the answer is write
			score.push(1);
			console.log(score);
		} else {
			console.log('wrong answer');
			score.push(0);
		}
		// Creates a div for question3
		var three = document.createElement('div');
		// Gives question 2 an ID to be
		three.id = 'question3';
		// Creates an h1 to be put iside the div for question2
		var q3 = document.createElement('h1');
		// Class name for the h1 to style with CSS
		q3.className = 'imagine';
		var q3text = document.createTextNode('3. Who wrote the famous song "Imagine"? (It goes like this.."imagine all the people, la la la la laaaaa, wohoo woo)')
		// Append the h1 elmement into the question2 div
		three.appendChild(q3);
		// Append text into the h1
		q3.appendChild(q3text);

		// --------------------------------MULTI CHOICE INPUTS FOR QUESTION 2

		// Create a div element with all the labels in it
		var lildiv_Q3 = document.createElement('div');
		lildiv_Q3.className = 'lildiv_Q3';

		// ---------------------------------------------CREATE LABEL 5------
		// This is necissary for BS ro work
		var radio5 = document.createElement('div');
		// BS class
		radio5.className = 'radio';
		var label5 = document.createElement('label');
		// Text node for label
		var label5_text = document.createTextNode('John Lennon');
		// Create an input element with type = radio
		var label5_input = document.createElement('INPUT');
		label5_input.setAttribute("type", "radio");
		label5_input.setAttribute("name", "optradio");
		// Put label into Radio div
		radio5.appendChild(label5);
		// Put label_input into label1
		label5.appendChild(label5_input);
		// Put textnode into label
		label5.appendChild(label5_text);
		// Put label into lil div 3
		lildiv_Q3.appendChild(radio5);

		// ---------------------------------------------CREATE LABEL 6------
		// This is necissary for BS ro work
		var radio6 = document.createElement('div');
		// BS class
		radio6.className = 'radio';
		var label6 = document.createElement('label');
		// Text node for label
		var label6_text = document.createTextNode('The Beatles');
		// Create an input element with type = radio
		var label6_input = document.createElement('INPUT');
		label6_input.setAttribute("type", "radio");
		label6_input.setAttribute("name", "optradio");
		// Put label into Radio div
		radio6.appendChild(label6);
		// Put label_input into label1
		label6.appendChild(label6_input);
		// Put textnode into label
		label6.appendChild(label6_text);
		// Put label into lil div 3
		lildiv_Q3.appendChild(radio6);

		// ---------------------------------------------CREATE LABEL 7------
		// This is necissary for BS ro work
		var radio7 = document.createElement('div');
		// BS class
		radio7.className = 'radio';
		var label7 = document.createElement('label');
		// Text node for label
		var label7_text = document.createTextNode('Yoko Ono');
		// Create an input element with type = radio
		var label7_input = document.createElement('INPUT');
		label7_input.setAttribute("type", "radio");
		label7_input.setAttribute("name", "optradio");
		// Put label into Radio div
		radio7.appendChild(label7);
		// Put label_input into label1
		label7.appendChild(label7_input);
		// Put textnode into label
		label7.appendChild(label7_text);
		// Put label into lil div 3
		lildiv_Q3.appendChild(radio7);

		// ---------------------------------------------CREATE LABEL 8------
		// This is necissary for BS ro work
		var radio8 = document.createElement('div');
		// BS class
		radio8.className = 'radio';
		var label8 = document.createElement('label');
		// Text node for label
		var label8_text = document.createTextNode('Paul Mccartney');
		// Create an input element with type = radio
		var label8_input = document.createElement('INPUT');
		label8_input.setAttribute("type", "radio");
		label8_input.setAttribute("name", "optradio");
		// Put label into Radio div
		radio8.appendChild(label8);
		// Put label_input into label1
		label8.appendChild(label8_input);
		// Put textnode into label
		label8.appendChild(label8_text);
		// Put label into lil div 3
		lildiv_Q3.appendChild(radio8);

		// puts label into lil div 3
		three.appendChild(lildiv_Q3);
		// Puts div 3 on page
		document.body.appendChild(three);

		// Create button to go to question 4--------------------------BeGinInG OF NExT ButTOn
		var button3 = document.createElement('button');
		// Put button1 into the first HTML div
		three.appendChild(button3);
		button3.className = 'btn btn-lg';
		// PUT DIV TWO ON TO PAGE
		document.body.appendChild(three);

		// Add event listener to button so when clicked on it makes question 2------IMPORTANT LINE	
		// Put a button to go to CREATE BUTTON 3-------------------------BUTTON 2------------
		button3.addEventListener("click", function() {
		// Checks to see if the correct radio is checked then adds a 1 to the array, or a 0 if its not checked. 
		if (label5_input.checked) {
			console.log('Radio 6 is working');
			// Adds a 1 to the array if the answer is write
			score.push(1);
			console.log(score);
		} else {
			console.log('wrong answer');
			score.push(0);
		};



	

		//---- END FOR THE THIRD AddEventListener--BUTTON 3
		});
	// ----- END FOR THE SECOND AddEventListener--BUTTON 2
	});
// ---END FOR THE FIRST AddEventListener--BUTTON 1 
});





