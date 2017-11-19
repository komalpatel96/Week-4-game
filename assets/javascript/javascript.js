// Execute this code when the DOM has fully loaded
$ (document).ready(function(){


		var targetNumber = [randomNum]; 
		var randomNum = randomNumGen();
		//creates a random number between the 19-120

		function randomNumGen(){
			return Math.floor(Math.random()*102) + 19;
		}

		$("#randomNumber").html("Goal: " + randomNum);

		//takes the random number and puts it in the randomNumber div
		// $("#randomNumber").html("Goal: " + randomNum);
	
		
		//setting up random numbers for each jewel between 1-12
		var number1 = Math.floor(Math.random()*11 + 1)
		var number2 = Math.floor(Math.random()*11 + 1)
		var number3 = Math.floor(Math.random()*11 + 1)
		var number4 = Math.floor(Math.random()*11 + 1)


		var userScore = 0;
		var wins = 0 ;
		var losses = 0;

		function setGame(){
			//generates a random number and sets it equal to random number 
				randomNum = randomNumGen();

				userScore = 0;
			//takes the random number and puts it in the randomNumber div
				$("#randomNumber").html("Goal: " + randomNum);

			//takes the random number and puts it in the randomNumber div
			$("#randomNumber").html("Goal: " + randomNum);
		
		
		//setting up random numbers for each jewel between 1-12
		var number1 = Math.floor(Math.random()*11 + 1)
		var number2 = Math.floor(Math.random()*11 + 1)
		var number3 = Math.floor(Math.random()*11 + 1)
		var number4 = Math.floor(Math.random()*11 + 1)

		userScore = 0;

		$("#userScore").text(userScore);
		}

		function youWin(){
			wins++;

			$("#userWins").text("Wins: "+ wins);
			$("#message").html("You Win!");
			$("#userScore").html("0")
			setGame();
			reset();

		}

		function youLose(){
			losses++;

			$("#userLosses").text("Losses: " + losses);
			$("#message").html("You Lose!");
			$("#userScore").html("0")
			setGame();
			reset();
		}

		function checkStatus(){
				console.log("number1: " + number1, "number2: " + number2, "number3: " + number3,"number4: " + number4);
				//to see the current userScore and the randomNumber
				console.log("USERSCORE:" + userScore +" && " + "RANDOMNUM:" + randomNum);

			//if userScore is > than the randomNum then execute the youLose function
			if (userScore > randomNum) {
				youLose();
			}
			//if userScore is equal to the randomNum then execute the youWin function
			else if (userScore == randomNum) {
				youWin();
			}
		}


		function reset(){
			setGame();

		};

	//clicking on crystals
	//Crystal 1
		$("#crystal1").on("click", function(){
			userScore = userScore + number1
			console.log("New UserScore: " + userScore);
			$("#userScore").html(userScore)
			checkStatus();

		})
	//Crystal 2 
		$("#crystal2").on("click", function(){
			userScore = userScore + number2
			console.log("New UserScore: " + userScore);
			$("#userScore").html(userScore);	

			checkStatus();	
		})
//Crystal 3		
		$("#crystal3").on("click", function(){
			userScore = userScore + number3
			console.log("New UserScore: " + userScore);
			$("#userScore").html(userScore);

			checkStatus();

		})
//Crystal 4
		$("#crystal4").on("click", function(){
			userScore = userScore + number4
			console.log("New UserScore: " + userScore);
			$("#userScore").html(userScore);

			checkStatus();
		})

	});
