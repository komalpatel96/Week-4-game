$ (document).ready(function(){
		var targetNumber = [random]; 
		var random = [Math.floor(Math.random()*101) + 19];

		$("#randomNumber").html(random);
//setting up random numbers for each jewel between 1-12
		var number1 = Math.floor(Math.random()*11 + 1)
		var number2 = Math.floor(Math.random()*11 + 1)
		var number3 = Math.floor(Math.random()*11 + 1)
		var number4 = Math.floor(Math.random()*11 + 1)


		var userScore = 0;
		var wins = 0 ;
		var losses = 0;

		function youWin(){
			alert("You Won!");
			wins++;
			$("#userWins").text("Wins: "+ wins);
			reset();
		}

		function youLose(){
			alert("You Lose!");
			losses++;
			$("#userLosses").text("Losses:" + losses);
			reset();
		}

		function reset(){
			var random = [Math.floor(Math.random()*101) + 19];

			$("#randomNumber").html(random);
	//setting up random numbers for each jewel between 1-12
			var number1 = Math.floor(Math.random()*11 + 1)
			var number2 = Math.floor(Math.random()*11 + 1)
			var number3 = Math.floor(Math.random()*11 + 1)
			var number4 = Math.floor(Math.random()*11 + 1)

			userScore = 0;

			$("#userScore").text(UserScore);

		}
//clicking on crystals
//Crystal 1
		$("#crystal1").on("click", function(){
			userScore = userScore + number1
			console.log("New UserScore: " + userScore);
			$("#userScore").text(userScore)

			if (userScore == random) {
				youWin();
			}
			else if (userScore > random) {
				youLose();
			}
		})
//Crystal 2 
		$("#crystal2").on("click", function(){
			userScore = userScore + number2
			console.log("New UserScore: " + userScore);
			$("#userScore").text(userScore);	

			if (userScore == random) {
				youWin();
			}
			else if (userScore > random) {
				youLose();
			}	
		})
//Crystal 3		
		$("#crystal3").on("click", function(){
			userScore = userScore + number3
			console.log("New UserScore: " + userScore);
			$("#userScore").text(userScore);

			if (userScore == random) {
				youWin();
			}
			else if (userScore > random) {
				youLose();
			}


		})
//Crystal 4
		$("#crystal4").on("click", function(){
			userScore = userScore + number4
			console.log("New UserScore: " + userScore);
			$("#userScore").text(userScore);

			if (userScore == random) {
				youWin();
			}
			else if (userScore > random) {
				youLose();
			}	
		})

	});
