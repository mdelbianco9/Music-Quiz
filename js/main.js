// Array to store correct answers
var score = [];

//  Question 1, Ask question and provide input ------------------------ QUESTION 1------------
var one = document.createElement('div');
one.id = 'r1';
one.className = 'row';
var q1 = document.createElement('h1');
q1.className = 'mojorisin col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
var q1text = document.createTextNode('1. In The Doors song L.A. Woman, what is the phrase "Mr Mojo Risin" an anagram for?');
one.appendChild(q1);
q1.appendChild(q1text);

// Input for question 1---------------------------------INPUT
var input1 = document.createElement("INPUT");
input1.setAttribute("type", "text");
// Giving input BS class to style
input1.className = 'form-control col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
// Put the input box into the HTML div
one.appendChild(input1);

// Focuses on input 1 when page loads
window.onload = function() {
	input1.focus();
};


document.body.appendChild(one);

// Put a button to go to the next question-----------------BUTTON ---Starts a function with other button functions inside
var button1 = document.createElement('button');
// Put button1 into the first HTML div
one.appendChild(button1);
button1.className = 'btn btn-lg col-md-8 col-sm-8';
// Next button text
var next = document.createTextNode('Next >>');
button1.appendChild(next);
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
	button1.style.visibility = "hidden";
	// Creates a div for question2
	var two = document.createElement('div');
	// Gives question 2 an ID to be
	two.id = 'r2';
	two.className = 'row';
	// Creates an h1 to be put iside the div for question2
	var q2 = document.createElement('h1');
	// Class name for the h1 to style with CSS
	q2.className = 'redhot col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
	var q2text = document.createTextNode('2. In their 1983 tour, Which band performed on stage with nothing but socks on their privates?')
	// Append the h1 elmement into the question2 div
	two.appendChild(q2);
	// Append text into the h1
	q2.appendChild(q2text);

	// Create multiple choice input-----------------------MULTI CHOICE INPUTS FOR QUESTION 2

	// Create a div element with all the labels in it
	var lildiv_Q2 = document.createElement('div');
	lildiv_Q2.className = 'lildiv_Q2 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';

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
	label2.id = 'label2';
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
	button2.className = 'btn btn-lg col-md-8 col-sm-8';
	button2.appendChild(next);
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
		// Hides the previous button
		button2.style.visibility = "hidden";
		// Creates a div for question3
		var three = document.createElement('div');
		// Gives question 2 an ID to be
		three.id = 'r3';
		// Creates an h1 to be put iside the div for question2
		var q3 = document.createElement('h1');
		// Class name for the h1 to style with CSS
		q3.className = 'imagine col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
		var q3text = document.createTextNode('3. Who wrote the famous song "Imagine"? (It goes like this.."imagine all the people, la la la la laaaaa, wohoo woo)')
		// Append the h1 elmement into the question2 div
		three.appendChild(q3);
		// Append text into the h1
		q3.appendChild(q3text);

		// --------------------------------MULTI CHOICE INPUTS FOR QUESTION 2

		// Create a div element with all the labels in it
		var lildiv_Q3 = document.createElement('div');
		lildiv_Q3.className = 'lildiv_Q3 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';

		// ---------------------------------------------CREATE LABEL 5------
		// This is necissary for BS ro work
		var radio5 = document.createElement('div');
		// BS class
		radio5.className = 'radio';
		var label5 = document.createElement('label');
		label5.id = 'label5';
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

		// Create button to go to question 4--------------------------BeGinInG OF NExT ButTOn 3
		var button3 = document.createElement('button');
		// Put button1 into the first HTML div
		three.appendChild(button3);
		button3.className = 'btn btn-lg col-md-8 col-sm-8';
		button3.appendChild(next);

		// Add event listener to button so when clicked on it makes question 4------IMPORTANT LINE	
		// Put a button to go to CREATE BUTTON 3-------------------------BUTTON 3------------
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
			}
			button3.style.visibility = 'hidden';
			// Creates a div for question3
			var four = document.createElement('div');
			// Gives question 2 an ID to be
			four.id = 'r4';
			// Creates an h1 to be put iside the div for question2
			var q4 = document.createElement('h1');
			// Class name for the h1 to style with CSS
			q4.className = 'jimi col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
			var q4text = document.createTextNode("4. The real name of Jimi Hendrix is actually Johnny Hendrix.")
			// Append the h1 elmement into the question2 div
			four.appendChild(q4);
			// Append text into the h1
			q4.appendChild(q4text);

			// Create a div element with all the labels in it
			var lildiv_Q4 = document.createElement('div');
			lildiv_Q4.className = 'lildiv_Q4 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';

			// ---------------------------------------------CREATE LABEL 9------True
			// This is necissary for BS ro work
			var radio9 = document.createElement('div');
			// BS class
			radio9.className = 'radio';
			var label9 = document.createElement('label');
			label9.id = 'label9';
			// Text node for label
			var label9_text = document.createTextNode('True');
			// Create an input element with type = radio
			var label9_input = document.createElement('INPUT');
			label9_input.setAttribute("type", "radio");
			label9_input.setAttribute("name", "optradio");
			// Put label into Radio div
			radio9.appendChild(label9);
			// Put label_input into label1
			label9.appendChild(label9_input);
			// Put textnode into label
			label9.appendChild(label9_text);
			// Put label into lil div 3
			lildiv_Q4.appendChild(radio9);

			// ---------------------------------------------CREATE LABEL 10------False
			// This is necissary for BS ro work
			var radio10 = document.createElement('div');
			// BS class
			radio10.className = 'radio';
			var label10 = document.createElement('label');
			// Text node for label
			var label10_text = document.createTextNode('False');
			// Create an input element with type = radio
			var label10_input = document.createElement('INPUT');
			label10_input.setAttribute("type", "radio");
			label10_input.setAttribute("name", "optradio");
			// Put label into Radio div
			radio10.appendChild(label10);
			// Put label_input into label1
			label10.appendChild(label10_input);
			// Put textnode into label
			label10.appendChild(label10_text);
			// Put label into lil div 3
			lildiv_Q4.appendChild(radio10);

			// puts label into lil div 3
			four.appendChild(lildiv_Q4);
			// PUT DIV FOUR ON TO PAGE
			document.body.appendChild(four);

			// Create button to go to question 5--------------------------BeGinInG OF NExT ButTOn 4
			var button4 = document.createElement('button');
			four.appendChild(button4);
			button4.className = 'btn btn-lg col-md-8 col-sm-8';
			button4.appendChild(next);
			// Add event listener to button so when clicked on it makes question 5------IMPORTANT LINE	
			// Put a button to go to CREATE BUTTON 4-------------------------BUTTON 4------------
			button4.addEventListener("click", function() {
				// Checks to see if the correct radio is checked then adds a 1 to the array, or a 0 if its not checked. 
				if (label9_input.checked) {
					console.log('Radio 9 is working');
					// Adds a 1 to the array if the answer is write
					score.push(1);
					console.log(score);
				} else {
					console.log('wrong answer');
					score.push(0);
				}
				button4.style.visibility = 'hidden';
				// Creates a div for question5
				var five = document.createElement('div');
				// --ID-- 
				five.id = 'r5';
				// --IMG--
				var album = document.createElement('IMG');
				album.setAttribute("src", "img/thriller.png");
			    album.setAttribute("width", "350");
			    album.setAttribute("height", "350");
			    album.className = 'thriller_img ';
			    album.id = 'album';
			    five.appendChild(album);
			    
				// --H3--
				var q5 = document.createElement('h3');
				// --CLASS--
				q5.className = 'thriller col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
				// --TEXT--
				var q5text = document.createTextNode('5. What is the name of this album?')
				// Append the h1 elmement into the question2 div
				five.appendChild(q5);
				// Append text into the h1
				q5.appendChild(q5text);

				// --INPUT--
				var input2 = document.createElement("INPUT");
				input2.setAttribute("type", "text");
				// Giving input BS class to style
				input2.className = 'form-control col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
				// Put the input box into the HTML div
				five.appendChild(input2);

				// Puts question 5 into the body. 
				document.body.appendChild(five);

				// Create button to go to question 5--------------------------BeGinInG OF NExT ButTOn 5
				var button5 = document.createElement('button');
				button5.appendChild(next);
				// Put button5 into the first HTML div
				five.appendChild(button5);
				button5.className = 'btn btn-lg col-md-8 col-sm-8';
				button5.addEventListener('click', function() {
					if (input2.value.toLowerCase() == "thriller") {
						console.log("correct answer, thriller");
						score.push(1);
					} else {
						console.log("wrog answer");
						score.push(0);
					}
					button5.style.visibility = 'hidden';
					// Creates a div for question5
					var six = document.createElement('div');
					// --ID-- 
					six.id = 'r6';
					// --H1--
					var q6 = document.createElement('h1');
					// --CLASS--
					q6.className = 'bob col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
					// --TEXT--
					var q6text = document.createTextNode("6. Who sung these lyrics:")
					// --H3--holds the lyrics
					var q6_h3 = document.createElement('h3');
					q6_h3.className = 'lyrics col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
					// --TEXT- line 1-
					var line1 = document.createTextNode('"The road of life is rocky');
					var br = document.createElement('br');
					var line2 = document.createTextNode("And you may stumble too.");
					var br2 = document.createElement('br');
					var line3 = document.createTextNode("So while you talk about me");
					var br3 = document.createElement('br');
					var line4 = document.createTextNode('Someone else is judging you"');

					// Append lydics into H3
					q6_h3.appendChild(line1);
					q6_h3.appendChild(br);
					q6_h3.appendChild(line2);
					q6_h3.appendChild(br2);
					q6_h3.appendChild(line3);
					q6_h3.appendChild(br3);
					q6_h3.appendChild(line4);
			
					// Append the h1 elmement into the question6 div
					six.appendChild(q6);
					// Append text into the h1
					q6.appendChild(q6text);
					// Append H3 into div 6
					six.appendChild(q6_h3);

					// Create a div element with all the labels in it
					var lildiv_Q6 = document.createElement('div');
					lildiv_Q6.className = 'lildiv_Q6 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';

					// // ---------------------------------------------CREATE LABEL 11------
					// This is necissary for BS ro work
					var radio11 = document.createElement('div');
					// BS class
					radio11.className = 'radio';
					var label11 = document.createElement('label');
					// Text node for label
					var label11_text = document.createTextNode('Amy Winehouse');
					// Create an input element with type = radio
					var label11_input = document.createElement('INPUT');
					label11_input.setAttribute("type", "radio");
					label11_input.setAttribute("name", "optradio");
					// Put label into Radio div
					radio11.appendChild(label11);
					// Put label_input into label1
					label11.appendChild(label11_input);
					// Put textnode into label
					label11.appendChild(label11_text);
					// Put label into lil div 3
					lildiv_Q6.appendChild(radio11);

					// ---------------------------------------------CREATE LABEL 12------
					// This is necissary for BS ro work
					var radio12 = document.createElement('div');
					// BS class
					radio12.className = 'radio';
					var label12 = document.createElement('label');
					// Text node for label
					var label12_text = document.createTextNode('Paul Mccartney');
					// Create an input element with type = radio
					var label12_input = document.createElement('INPUT');
					label12_input.setAttribute("type", "radio");
					label12_input.setAttribute("name", "optradio");
					// Put label into Radio div
					radio12.appendChild(label12);
					// Put label_input into label1
					label12.appendChild(label12_input);
					// Put textnode into label
					label12.appendChild(label12_text);
					// Put label into lil div 3
					lildiv_Q6.appendChild(radio12);
					
					// ---------------------------------------------CREATE LABEL 13------
					// This is necissary for BS ro work
					var radio13 = document.createElement('div');
					// BS class
					radio13.className = 'radio';
					var label13 = document.createElement('label');
					label13.id = 'label13';
					// Text node for label
					var label13_text = document.createTextNode('Bob Marley');
					// Create an input element with type = radio
					var label13_input = document.createElement('INPUT');
					label13_input.setAttribute("type", "radio");
					label13_input.setAttribute("name", "optradio");
					// Put label into Radio div
					radio13.appendChild(label13);
					// Put label_input into label1
					label13.appendChild(label13_input);
					// Put textnode into label
					label13.appendChild(label13_text);
					// Put label into lil div 3
					lildiv_Q6.appendChild(radio13);

					// ---------------------------------------------CREATE LABEL 14------
					// This is necissary for BS ro work
					var radio14 = document.createElement('div');
					// BS class
					radio14.className = 'radio';
					var label14 = document.createElement('label');
					// Text node for label
					var label14_text = document.createTextNode('None of these');
					// Create an input element with type = radio
					var label14_input = document.createElement('INPUT');
					label14_input.setAttribute("type", "radio");
					label14_input.setAttribute("name", "optradio");
					// Put label into Radio div
					radio14.appendChild(label14);
					// Put label_input into label1
					label14.appendChild(label14_input);
					// Put textnode into label
					label14.appendChild(label14_text);
					// Put label into lil div 3
					lildiv_Q6.appendChild(radio14);

					// puts labels into lil div 6
					six.appendChild(lildiv_Q6);
					// Puts question 6 into the body. 
					document.body.appendChild(six);

					// Create button to go to question 7--------------------------BeGinInG OF NExT ButTOn 6
					var button6 = document.createElement('button');
					button6.appendChild(next);
					// Put button5 into the first HTML div
					six.appendChild(button6);
					button6.className = 'btn btn-lg col-md-8 col-sm-8';
					button6.addEventListener('click', function() {
						if (label13_input.checked) {
						console.log('Radio 13 is working, bob');
						// Adds a 1 to the array if the answer is write
						score.push(1);
						console.log(score);
						} else {
						console.log('wrong answer');
						score.push(0);
						}
						button6.style.visibility = 'hidden';
						// Creates a div for question7
						var seven = document.createElement('div');
						// Gives question 7 an ID to be
						seven.id = 'r7';
						// Creates an h1 to be put iside the div for question2
						var q7 = document.createElement('h1');
						// Class name for the h1 to style with CSS
						q7.className = 'apple col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
						var q7text = document.createTextNode("7. In the early 80's Apple Computer settled a lawsuit for $80,000 to the Beatles record label, Apple Records on trademark infringement due to Apples Name. True or false?")
						// Append the h1 elmement into the question2 div
						seven.appendChild(q7);
						// Append text into the h1
						q7.appendChild(q7text);

						// Create a div element with all the labels in it
						var lildiv_Q7 = document.createElement('div');
						lildiv_Q7.className = 'lildiv_Q7 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';

						// ---------------------------------------------CREATE LABEL 15------True
						// This is necissary for BS ro work
						var radio15 = document.createElement('div');
						// BS class
						radio15.className = 'radio';
						var label15 = document.createElement('label');
						label15.id = 'label15';
						// Text node for label
						var label15_text = document.createTextNode('True');
						// Create an input element with type = radio
						var label15_input = document.createElement('INPUT');
						label15_input.setAttribute("type", "radio");
						label15_input.setAttribute("name", "optradio");
						// Put label into Radio div
						radio15.appendChild(label15);
						// Put label_input into label1
						label15.appendChild(label15_input);
						// Put textnode into label
						label15.appendChild(label15_text);
						// Put label into lil div 3
						lildiv_Q7.appendChild(radio15);

						// ---------------------------------------------CREATE LABEL 16------False
						// This is necissary for BS ro work
						var radio16 = document.createElement('div');
						// BS class
						radio16.className = 'radio';
						var label16 = document.createElement('label');
						// Text node for label
						var label16_text = document.createTextNode('False');
						// Create an input element with type = radio
						var label16_input = document.createElement('INPUT');
						label16_input.setAttribute("type", "radio");
						label16_input.setAttribute("name", "optradio");
						// Put label into Radio div
						radio16.appendChild(label16);
						// Put label_input into label1
						label16.appendChild(label16_input);
						// Put textnode into label
						label16.appendChild(label16_text);
						// Put label into lil div 3
						lildiv_Q7.appendChild(radio16);

						// puts label into lil div 7
						seven.appendChild(lildiv_Q7);
						// Puts div 7 on page
						document.body.appendChild(seven);

						// Create button to go to question 8--------------------------BeGinInG OF NExT ButTOn 7
						var button7 = document.createElement('button');
						// Put button5 into the first HTML div
						seven.appendChild(button7);
						button7.className = 'btn btn-lg col-md-8 col-sm-8';
						button7.appendChild(next);
						button7.addEventListener('click', function() {
							if (label15_input.checked) {
							console.log('Radio 15 is working, Apple');
							// Adds a 1 to the array if the answer is write
							score.push(1);
							console.log(score);
							} else {
							console.log('wrong answer');
							score.push(0);
							}
							button7.style.visibility = 'hidden'
							// Creates a div for question8
							var eight = document.createElement('div');
							// --ID-- 
							eight.id = 'r8';
						    
							// --H1--
							var q8 = document.createElement('h1');
							// --CLASS--
							q8.className = 'cobain col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
							// --TEXT--
							var q8text = document.createTextNode('8. Who killed Kurt Cobain?')
							// Append the h1 elmement into the question2 div
							eight.appendChild(q8);
							// Append text into the h1
							q8.appendChild(q8text);

							// --INPUT--
							var input3 = document.createElement("INPUT");
							input3.setAttribute("type", "text");
							// Giving input BS class to style
							input3.className = 'form-control col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
							// Put the input box into the HTML div
							eight.appendChild(input3);

							// Puts question 5 into the body. 
							document.body.appendChild(eight);

							// Create button to go to question 9--------------------------BeGinInG OF NExT ButTOn 8
							var button8 = document.createElement('button');
							// Put button5 into the first HTML div
							eight.appendChild(button8);
							button8.className = 'btn btn-lg col-md-8 col-sm-8';
							button8.appendChild(next);
							button8.addEventListener('click', function() {
								if (input3.value.toLowerCase() == "kurt cobain" || input3.value.toLowerCase() == "himself") {
									console.log("correct answer, kurt");
									score.push(1);
								} else {
										console.log("wrog answer");
										score.push(0);
								}
								button8.style.visibility = 'hidden';
								// Creates a div for question3
								var nine = document.createElement('div');
								// Gives question 2 an ID to be
								nine.id = 'r9';
								// Creates an h1 to be put iside the div for question2
								var q9 = document.createElement('h1');
								// Class name for the h1 to style with CSS
								q9.className = 'drake col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
								var q9text = document.createTextNode('9. Who was the top listened to artist in 2016?')
								// Append the h1 elmement into the question2 div
								nine.appendChild(q9);
								// Append text into the h1
								q9.appendChild(q9text);

								// --------------------------------MULTI CHOICE INPUTS FOR QUESTION 9

								// Create a div element with all the labels in it
								var lildiv_Q9 = document.createElement('div');
								lildiv_Q9.className = 'lildiv_Q9 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';

								// ---------------------------------------------------CREATE LABEL 17------
								// This is necissary for BS ro work
								var radio17 = document.createElement('div');
								// BS class
								radio17.className = 'radio';
								var label17 = document.createElement('label');
								// Text node for label
								var label17_text = document.createTextNode('Justin Beiber');
								// Create an input element with type = radio
								var label17_input = document.createElement('INPUT');
								label17_input.setAttribute("type", "radio");
								label17_input.setAttribute("name", "optradio");
								// Put label into Radio div
								radio17.appendChild(label17);
								// Put label_input into label9
								label17.appendChild(label17_input);
								// Put textnode into label
								label17.appendChild(label17_text);
								// Put label into lil div 9
								lildiv_Q9.appendChild(radio17);

								// ---------------------------------------------CREATE LABEL 18------
								// This is necissary for BS ro work
								var radio18 = document.createElement('div');
								// BS class
								radio18.className = 'radio';
								var label18 = document.createElement('label');
								label18.id = 'label18';
								// Text node for label
								var label18_text = document.createTextNode('Drake');
								// Create an input element with type = radio
								var label18_input = document.createElement('INPUT');
								label18_input.setAttribute("type", "radio");
								label18_input.setAttribute("name", "optradio");
								// Put label into Radio div
								radio18.appendChild(label18);
								// Put label_input into label9_input
								label18.appendChild(label18_input);
								// Put textnode into label
								label18.appendChild(label18_text);
								// Put label into lil div 9
								lildiv_Q9.appendChild(radio18);
					
								// ---------------------------------------------CREATE LABEL 19------
								// This is necissary for BS ro work
								var radio19 = document.createElement('div');
								// BS class
								radio19.className = 'radio';
								var label19 = document.createElement('label');
								// Text node for label
								var label19_text = document.createTextNode('Katy Perry');
								// Create an input element with type = radio
								var label19_input = document.createElement('INPUT');
								label19_input.setAttribute("type", "radio");
								label19_input.setAttribute("name", "optradio");
								// Put label into Radio div
								radio19.appendChild(label19);
								// Put label_input into label9
								label19.appendChild(label19_input);
								// Put textnode into label
								label19.appendChild(label19_text);
								// Put label into lil div 9
								lildiv_Q9.appendChild(radio19);

								// ---------------------------------------------CREATE LABEL 20------
								// This is necissary for BS ro work
								var radio20 = document.createElement('div');
								// BS class
								radio20.className = 'radio';
								var label20 = document.createElement('label');
								// Text node for label
								var label20_text = document.createTextNode('Jay-Z');
								// Create an input element with type = radio
								var label20_input = document.createElement('INPUT');
								label20_input.setAttribute("type", "radio");
								label20_input.setAttribute("name", "optradio");
								// Put label into Radio div
								radio20.appendChild(label20);
								// Put label_input into label1
								label20.appendChild(label20_input);
								// Put textnode into label
								label20.appendChild(label20_text);
								// Put label into lil div 3
								lildiv_Q9.appendChild(radio20);

								// puts label into lil div 9
								nine.appendChild(lildiv_Q9);
								// Puts div 3 on page
								document.body.appendChild(nine);

								// Create button to go to question 10--------------------------BeGinInG OF NExT ButTOn 9
								var button9 = document.createElement('button');
								// Put button5 into the first HTML div
								nine.appendChild(button9);
								button9.className = 'btn btn-lg col-md-8 col-sm-8';
								button9.appendChild(next);
								button9.addEventListener('click', function() {
									if (label18_input.checked) {
									console.log('Radio 18 is working, Drake');
									// Adds a 1 to the array if the answer is write
									score.push(1);
									console.log(score);
									} else {
									console.log('wrong answer');
									score.push(0);
									}
									button9.style.visibility = 'hidden';
									// Creates a div for question8
									var ten = document.createElement('div');
									// --ID-- 
									ten.id = 'r10';
								    
									// --H1--
									var q10 = document.createElement('h1');
									// --CLASS--
									q10.className = 'favorite col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
									// --TEXT--
									var q10text = document.createTextNode('10. What is your favorite musical album?')
									// Append the h1 elmement into the question2 div
									ten.appendChild(q10);
									// Append text into the h1
									q10.appendChild(q10text);

									// --INPUT--
									var input4 = document.createElement("INPUT");
									input4.setAttribute("type", "text");
									// Giving input BS class to style
									input4.className = 'form-control col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
									// Put the input box into the HTML div
									ten.appendChild(input4);

									// Puts question 5 into the body. 
									document.body.appendChild(ten);

									// Create button to SUBMIT quiz--------------------------SUBMIT BUTTON
									var submit = document.createElement('button');
									// Put button5 into the first HTML div
									ten.appendChild(submit);
									submit.className = 'btn btn-lg col-md-8 col-sm-8';
									var submittext = document.createTextNode('Submit');
									submit.appendChild(submittext);
									submit.addEventListener('click', function() {
										console.log("correct answer, favorite");
										score.push(1);
										// MEGA USEFUL-----FUNCTION TO SUM AN ARRAY
										var sum = score.reduce(function(a, b) { return a + b; }, 0);
										console.log(sum);
										// gives the percentage
										var total = (sum/10)*100 + "%";
										console.log(total);
										// Creates h1 to put score in
										var yourscore = document.createElement('h1');
										yourscore.className = ' yourscore col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
										// text for h1
										var scoretext = document.createTextNode("Your score is " + total + " Scroll up to see answers");
										// puts the scor eon the page
										yourscore.appendChild(scoretext);
										ten.appendChild(yourscore);

										
										
										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[0] == 1) {
											// adds a class to the element to change its color
												document.getElementById("r1").classList.add("correct");
												console.log("correct score value works for 1");											
											} else {
											// adds a class to the element to change its color
												document.getElementById("r1").classList.add("wrong");
												var jim = document.createTextNode('---Jim Morrison');
												q1.appendChild(jim);
												console.log("wrong score value works");
												};
										
										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[1] == 1) {
												document.getElementById("r2").classList.add("correct");
												console.log("correct score value works for 2");
											} else if (score[1] == 0){
												document.getElementById("r2").classList.add("wrong");
												document.getElementById("label2").classList.add("correct");
												console.log("wrong score value works for 2");								
												};

										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[2] == 1) {
												document.getElementById("r3").classList.add("correct");
												console.log("correct score value works for 3");
											} else if (score[2] == 0){
												document.getElementById("r3").classList.add("wrong");
												document.getElementById("label5").classList.add("correct");
												console.log("wrong score value works for 3");
												};

										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[3] == 1) {
												document.getElementById("r4").classList.add("correct");
												console.log("correct score value works for 4");
											} else if (score[3] == 0){
												document.getElementById("r4").classList.add("wrong");
												document.getElementById("label9").classList.add("correct");
												console.log("wrong score value works for 4");
												};

										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[4] == 1) {
												document.getElementById("r5").classList.add("correct");
												document.getElementById("album").classList.add("noblur");
											} else if (score[4] == 0){
												document.getElementById("r5").classList.add("wrong");
												document.getElementById("album").classList.add("noblur");
												var mike = document.createTextNode('---Thriller by Michael Jackson');
												q5.appendChild(mike);
												};

										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[5] == 1) {
												document.getElementById("r6").classList.add("correct");
											} else if (score[5] == 0){
												document.getElementById("r6").classList.add("wrong");
												document.getElementById("label13").classList.add("correct");

												};

										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[6] == 1) {
												document.getElementById("r7").classList.add("correct");
											} else if (score[6] == 0){
												document.getElementById("r7").classList.add("wrong");
												document.getElementById("label15").classList.add("correct");
												};
										
										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[7] == 1) {
												document.getElementById("r8").classList.add("correct");
											} else if (score[7] == 0){
												document.getElementById("r8").classList.add("wrong");
												var kurt = document.createTextNode('---Kurt Cobain');
												q8.appendChild(kurt);
												};
											
										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[8] == 1) {
												document.getElementById("r9").classList.add("correct");
											} else if (score[8] == 0){
												document.getElementById("r9").classList.add("wrong");
												document.getElementById("label18").classList.add("correct");
												};
										
										// checks the value in the array for a 1 or 0 then changes border color of a question
										if (score[9] == 1) {
												document.getElementById("r10").classList.add("correct");
											} else if (score[9] == 0){
												document.getElementById("r10").classList.add("wrong");
												};



										// Put something in that will make the border of each id green if correct and red if wrong

										// Put something in that will add a div with the correct anser and an explaination of the answer

								
									// END OF LST AddEventListener---SUBMIT BUTTON
										});
								// END FOR THE NINTH AddEventListener--BUTTON 9
									});
							// END FOR THE EIGHTH AddEventListener--BUTTON 8
								});
						// END FOR THE SEVENTH AddEventListener--BUTTON 7
							});
					// END FOR THE SIXTH AddEventListener--BUTTON 6
						});
				// END FOR THE FIFTH AddEventListener--BUTTON 5
					});
				// END FOR THE FOURTH AddEventListener--BUTTON 4
				});
		//---- END FOR THE THIRD AddEventListener--BUTTON 3
			});
	// ----- END FOR THE SECOND AddEventListener--BUTTON 2
		});
// ---END FOR THE FIRST AddEventListener--BUTTON 1 
});




