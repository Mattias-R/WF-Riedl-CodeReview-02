var age = 0;
var power = 0;

function calculate(){
/*this are variables from the input fields */
var name = document.getElementById("yourName").value;
var age = document.getElementById("yourAge").value;
var power = document.getElementById("yourHorsePower").value;
let c = document.getElementById("country");
let insurance = c.options[c.selectedIndex].value;
var text =", your insurance costs ";
var text2 ="Euro"

/* this if choose what country you entered and calculate your insurance */
/*Math.floor = number is now an integer */
if (insurance == 100){
	var result = power * 100 / age +50;
	var result = Math.floor(result);
}else if(insurance == 120){
	var result = power * 120 / age +100;
	var result = Math.floor(result);
}else if(insurance == 150){
	var result = power * 150 / (age+3) +50;
	var result = Math.floor(result);
}else if(insurance == 0){
	var result = "Please fill in all forms"
	var name = "";
	var text="";
	var text2=".";
}else{
	alert(error);
};
/* this line print out the result */
document.getElementById("printCalculation").innerHTML = name + text +result+text2;



}