(function(){
	var cards = ["浅021","浅045","浅007", "浅020", "浅046", "浅055"];
	var kabuki_point = 0;
	var show_string = "";
	function calc() {
		var all_card_data = document.querySelectorAll("tr");
		for(var i=1; i<all_card_data.length; i++) {
			var card_no = all_card_data[i].children[2].innerText;
			if(cards.indexOf(card_no) >= 0) {
				output(all_card_data[i]);
				kabuki_point += Number(all_card_data[i].children[5].innerText);
			}
		}
		console.log(kabuki_point);
		show_string = kabuki_point + ":" + show_string;
	}
	function output(card_data) {
		var str = "[" + card_data.children[2].innerText + "]" + card_data.children[3].innerText + card_data.children[4].innerText + card_data.children[5].innerText;
		console.log(str);
		show_string += (str + "/");
	}
	calc();
	alert(show_string);
})();