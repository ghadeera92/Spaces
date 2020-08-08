$(function() {

// to get element that shown up in operation history
    function getHistory(){
	return document.getElementById("history-value").innerText;
}
// to print element that shown up in operation history
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
// to get result 
function getOutput(){
	return document.getElementById("output-value").innerText;
}
// to print result 
function printOutput(num){
	// 
	if(num==""){
		//if no value set the result place to empty
		document.getElementById("output-value").innerText=num;
	}
	else{                                                 // this fun will reads the num with , 
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
// formatted fun 
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	// read num
	var n = Number(num);
	// use tolocal with en params to acheive this
	var value = n.toLocaleString("en");
	return value;
}
// remove , when delete CE
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

// calculator
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
})