window.onload = function(){
	let board = document.querySelector('.board');

	let currentPlayer = ['X','O'][Math.round(Math.random())];
	let first_player = document.querySelector('.second_player');
	first_player.innerHTML = first_player.innerHTML + ' (' + currentPlayer + ')';
	let second_player = document.querySelector('.first_player');
	if (currentPlayer === 'X') {
		second_player.innerHTML = second_player.innerHTML + ' (O)';
	}
	else {
		second_player.innerHTML = second_player.innerHTML + ' (X)';
	}	

	let winnningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2,5,8],[0,4,8],[2,4,6]];

	function check(){
		let squares = document.querySelectorAll('.square');
		let signs = Array.prototype.slice.call(squares, 0);
		let inner = signs.map(function(e) {
			return e.innerHTML;
		});
		return winnningCombos.find(function(combo) {
			if (inner[combo[0]] === inner[combo[1]] && inner[combo[1]] === inner[combo[2]] && inner[combo[0]].length > 0)
				return true;
			else
				return false;
		});
	};
	count = 0;
	board.addEventListener('click', function(e){
		if(String(e.target.innerHTML).length !== 0){
			return;
		}
		if(currentPlayer === 'X'){
			currentPlayer = 'O';
		} else {
			currentPlayer = 'X';
		}
		e.target.innerHTML = currentPlayer;
		let ok = check();
		count = count + 1;
		if (ok) {
			count = 0;
			let first = document.querySelector('.first');
			let second = document.querySelector('.second');
			if (currentPlayer == "X") {
				if (second_player.innerHTML.includes('(X)')) {
					first.innerHTML = Number(first.innerHTML) + 1;	
				}
				else {
					second.innerHTML = Number(second.innerHTML) + 1;	
				}				
			}
			else if (currentPlayer == "O") {
				if (second_player.innerHTML.includes('(O)')) {
					first.innerHTML = Number(first.innerHTML) + 1;	
				}
				else {
					second.innerHTML = Number(second.innerHTML) + 1;	
				}				
			}
			let winner = document.querySelector(".winner");
			winner.innerHTML = "Winner is " + currentPlayer;
			let modal = document.querySelector('.modal');
			modal.style.visibility = 'visible';
			setTimeout(function(){
				modal.style.visibility = 'hidden';
				let sqrs = document.querySelectorAll('.square');
				for(let i=0; i<sqrs.length; i++){
					sqrs[i].innerHTML = '';
				}
			}, 2000);
		}
		else {
			if (count === 9) {
				count = 0;
				let ties = document.querySelector('.ties')
				ties.innerHTML = Number(ties.innerHTML) + 1;
				let winner = document.querySelector(".winner");
				winner.innerHTML = "No one wins!";
				let modal = document.querySelector('.modal');
				modal.style.visibility = 'visible';
				setTimeout(function(){
					modal.style.visibility = 'hidden';
					let sqrs = document.querySelectorAll('.square');
					for(let i=0; i<sqrs.length; i++){
						sqrs[i].innerHTML = '';
					}
				}, 2000);
			}			
		}
	});
}



