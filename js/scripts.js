var add = function(number1, number2){
	return number1+number2;
};

var subtract = function(number1, number2){
	return number1-number2;
};

var multiply = function(number1, number2){
	return number1*number2;
};

var divide = function(number1, number2){
	return number1/number2;
};

var modulo = function(number1, number2){
	return number1%number2;
};

$(document).ready(function(){
	$("form#add").submit(function() {
		var number1 = parseInt($("input#add1").val());
		var number2 = parseInt($("input#add2").val());

		alert(add(number1,number2));
	});
});

$(document).ready(function(){
	$("form#subtract").submit(function() {
		var number1 = parseInt($("input#subtract1").val());
		var number2 = parseInt($("input#subtract2").val());

		alert(subtract(number1,number2));
	});
});

$(document).ready(function(){
	$("form#multiply").submit(function() {
		var number1 = parseInt($("input#multiply1").val());
		var number2 = parseInt($("input#multiply2").val());

		alert(multiply(number1,number2));
	});
});

$(document).ready(function(){
	$("form#divide").submit(function() {
		var number1 = parseInt($("input#divide1").val());
		var number2 = parseInt($("input#divide2").val());

		alert(divide(number1,number2));
	});
});

$(document).ready(function(){
	$("form#modulo").submit(function() {
		var number1 = parseInt($("input#modulo1").val());
		var number2 = parseInt($("input#modulo2").val());

		alert(modulo(number1,number2));
	});
});
