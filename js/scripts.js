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

		$("#results").prepend("<h2>"+number1+"+"+number2+"="+add(number1,number2)+"</h2>");
		event.preventDefault();
	});
});

$(document).ready(function(){
	$("form#subtract").submit(function() {
		var number1 = parseInt($("input#subtract1").val());
		var number2 = parseInt($("input#subtract2").val());

		$("#results").prepend("<h2>"+number1+"-"+number2+"="+subtract(number1,number2)+"</h2>");
		event.preventDefault();

	});
});

$(document).ready(function(){
	$("form#multiply").submit(function() {
		var number1 = parseInt($("input#multiply1").val());
		var number2 = parseInt($("input#multiply2").val());

		$("#results").prepend("<h2>"+number1+"x"+number2+"="+multiply(number1,number2)+"</h2>");
		event.preventDefault();
	});
});

$(document).ready(function(){
	$("form#divide").submit(function() {
		var number1 = parseInt($("input#divide1").val());
		var number2 = parseInt($("input#divide2").val());

		$("#results").prepend("<h2>"+number1+"/"+number2+"="+divide(number1,number2)+"</h2>");
		event.preventDefault();
	});
});

$(document).ready(function(){
	$("form#modulo").submit(function() {
		var number1 = parseInt($("input#modulo1").val());
		var number2 = parseInt($("input#modulo2").val());

		$("#results").prepend("<h2>"+number1+"%"+number2+"="+modulo(number1,number2)+"</h2>");
		event.preventDefault();
	});
});

$(document).ready(function(){
	$("form#orderingaproduct").submit(function() {
		var firstname = $("input#firstname").val();
		var lastname = $("input#lastname").val();
		var address= $("input#address").val();
  	$("#receipt p").remove();
		$("#receipt").prepend("<p> Thank you for ordering from our store. Your receipt is below</p><p>"+firstname+" "+lastname+"</p><p>"+address+"</p>");
		event.preventDefault();
	});
});
