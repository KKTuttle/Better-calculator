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

	$("form#calculate").submit(function(event) {

		var n1 = parseInt($("#add1").val());
		console.log(n1);
		var n2 = parseInt($("#add2").val());
		console.log(n2);
		var op = $("input:radio[name=operator]:checked").val();
		console.log(op);
		if(op==="add"){
			var result = add(n1, n2);
		}
		else if(op==="subtract"){
			var result = subtract(n1, n2);
		}
		else if(op==="multiply"){
			var result = multiply(n1, n2);
		}
		else if(op==="divide"){
			var result = divide(n1, n2);
		}
		else if(op==="modulo"){
			var result = modulo(n1, n2);
		}
		else{
			var result = "error";
		}
		$("#results").prepend("<h1>"+result+"</h1>");

		event.preventDefault();
	});


	// $("form#add").submit(function() {
	// 	var number1 = parseInt($("input#add1").val());
	// 	var number2 = parseInt($("input#add2").val());
	//
	// 	$("#results").prepend("<h2>"+number1+"+"+number2+"="+add(number1,number2)+"</h2>");
	// 	event.preventDefault();
	// });
	//
	// $("form#subtract").submit(function() {
	// 	var number1 = parseInt($("input#subtract1").val());
	// 	var number2 = parseInt($("input#subtract2").val());
	//
	// 	$("#results").prepend("<h2>"+number1+"-"+number2+"="+subtract(number1,number2)+"</h2>");
	// 	event.preventDefault();
	//
	// });
	//
	// $("form#multiply").submit(function() {
	// 	var number1 = parseInt($("input#multiply1").val());
	// 	var number2 = parseInt($("input#multiply2").val());
	//
	// 	$("#results").prepend("<h2>"+number1+"x"+number2+"="+multiply(number1,number2)+"</h2>");
	// 	event.preventDefault();
	// });
	//
	// $("form#divide").submit(function() {
	// 	var number1 = parseInt($("input#divide1").val());
	// 	var number2 = parseInt($("input#divide2").val());
	//
	// 	$("#results").prepend("<h2>"+number1+"/"+number2+"="+divide(number1,number2)+"</h2>");
	// 	event.preventDefault();
	// });
	//
	// $("form#modulo").submit(function() {
	// 	var number1 = parseInt($("input#modulo1").val());
	// 	var number2 = parseInt($("input#modulo2").val());
	//
	// 	$("#results").prepend("<h2>"+number1+"%"+number2+"="+modulo(number1,number2)+"</h2>");
	// 	event.preventDefault();
	// });
	//
	// $("form#orderingaproduct").submit(function() {
	// 	var firstname = $("input#firstname").val();
	// 	var lastname = $("input#lastname").val();
	// 	var address= $("input#address").val();
  // 	$("#receipt p").remove();
	// 	$("#receipt").prepend("<p> Thank you for ordering from our store. Your receipt is below</p><p>"+firstname+" "+lastname+"</p><p>"+address+"</p>");
	// 	event.preventDefault();
	// });
	//
	// $("form#booking").submit(function() {
	// 	var name = $("input#name").val();
	// 	var date = $("input#date").val();
	// 	var starttime = $("input#starttime").val();
	// 	var endtime = $("input#endtime").val();
	//
	// 	$("#confirmation").prepend("<h3>Event Details</h3><h4>"+name+"</h4><h5>"+date+"</h5><h5>"+starttime+" - "+endtime+"</h5>");


});
