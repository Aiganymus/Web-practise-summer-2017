window.onload = function() {
	let plus = document.querySelector('.plus');
	let minus = document.querySelector('.minus');
	let word = document.querySelector('.p_word');	
	let bold = document.querySelector('.bold');
	let italic = document.querySelector('.italic');
	let underline = document.querySelector('.underline');
	let txt = '';

	bold.addEventListener('click', function(e) {
		let text = document.querySelector('.textarea');
	 	let s = String(text.innerHTML);

	    if (window.getSelection) {
	        txt = window.getSelection().toString();
	    } else if (document.selection) {
	        txt = document.selection.createRange().text;
	    };
	    
	    if (!s.includes('<b>' + txt + '</b>')) {
	    	text.innerHTML = s.replace(txt, txt.bold());
	    } else {
	    	text.innerHTML = s.replace('<b>' + txt + '</b>', txt);
	    };

	});

	italic.addEventListener('click', function(e) {
		let text = document.querySelector('.textarea');
	 	let s = String(text.innerHTML);

	    if (window.getSelection) {
	        txt = window.getSelection().toString();
	    } else if (document.selection) {
	        txt = document.selection.createRange().text;
	    };

	    if (!s.includes('<i>' + txt + '</i>')) {
	    	text.innerHTML = s.replace(txt, txt.italics());
	    } else {
	    	text.innerHTML = s.replace('<i>' + txt + '</i>', txt);
	    };

	});

	underline.addEventListener('click', function(e) {
		let text = document.querySelector('.textarea');
	 	let s = String(text.innerHTML);

	    if (window.getSelection) {
	        txt = window.getSelection().toString();
	    } else if (document.selection) {
	        txt = document.selection.createRange().text;
	    };

	    if (!s.includes('<u>' + txt + '</u>')) {
	    	text.innerHTML = s.replace(txt, '<u>' + txt + '</u>');
	    } else {
	    	text.innerHTML = s.replace('<u>' + txt + '</u>', txt);
	    };

	});

	plus.addEventListener('click', function(e){
		let number = document.querySelector('.p_three')
		value = Number(number.innerHTML);
		value = value + 1;
		number.innerHTML = String(value);
		if (value > 1) {
			word.innerHTML = 'portions'
		}
	});

	minus.addEventListener('click', function(e){
		let number = document.querySelector('.p_three')
		value = Number(number.innerHTML);
		if (value > 1) {
			value = value - 1;
			number.innerHTML = String(value);
			word.innerHTML = 'portions'
		}	
		if (value == 1) {
			word.innerHTML = 'portion'
		}
	});
}

