$(document).ready(function(){
	
	var cards = [
		'<img src="images/monsters-01.png">',
		'<img src="images/monsters-02.png">',
		'<img src="images/monsters-03.png">',
		'<img src="images/monsters-04.png">',
		'<img src="images/monsters-05.png">',
		'<img src="images/monsters-06.png">',
		'<img src="images/monsters-07.png">',
		'<img src="images/monsters-08.png">',
		// '<img src="images/monsters-09.png">',
		// '<img src="images/monsters-11.png">',
		// '<img src="images/monsters-13.png">',
		// '<img src="images/monsters-14.png">',
		// '<img src="images/monsters-15.png">',
		// '<img src="images/monsters-16.png">',
	];

	var gridSize = 16;
	var memoryGameHTML = '';
	for(let i = 0; i < gridSize; i++){
		if(i < 2){
			card = cards[0];
		}else if(i < 4){
			card = cards[1];
		}else if(i < 6){
			card = cards[2];
		}else if(i < 8){
			card = cards[3];
		}else if(i < 10){
			card = cards[4];
		}else if(i < 12){
			card = cards[5];
		}else if(i < 14){
			card = cards[6];
		}else{
			card = cards[7];
		}
		// console.log(card);

		memoryGameHTML += '<div class="card col-sm-3">';
			memoryGameHTML += '<div class="card-holder">';
				memoryGameHTML += `<div class="card-front">${card}</div>`;  // memoryGameHTML += '<div class="card-front">' + card + '</div>';
				memoryGameHTML += `<div class="card-back"></div>`;
			memoryGameHTML += '</div>';
		memoryGameHTML += '</div>';

	};
	console.log(memoryGameHTML);
	$('.mg-contents').html(memoryGameHTML);


	$('.card-holder').click(function(){
		$(this).toggleClass('flip');

		// user has flipped card. I f there is another one turned over,
		// see if they match. Otherwise, do nothing
		// Setup an array called cardsUp that contains all elements
		// with a class of flip (that's how we know they are face up)
		var cardsUp = $('.flip');  // An array of cards with class of 'flip'
		if(cardsUp.length == 2){
			// Two cards have a flip class (face up) or we wouldnt be here
			// Check to see if they are the same...
			var card1 = (cardsUp[0].childNodes[0].childNodes[0].src);
			var card2 = (cardsUp[1].childNodes[0].childNodes[0].src);
			// cardsUpImages = cardsUp.find('.card-front img');
			if(card1 == card2){
				// they match! i.e., the images are exactly the same
				cardsUp.removeClass('flip');
				cardsUp.addClass('matched');
				var matchedCards = $('.matched');
				if(matchedCards.length == gridSize){
					// Then every card has been macthed. Game Won
					alert("You have won the game!")
				
				}
			}else{
				// they are not the same. Flip them back over
				setTimeout(function(){     //or setTimeout(()=>{
					cardsUp.removeClass('flip');
				}, 700);
				
			}
			

		}

	});

});



















