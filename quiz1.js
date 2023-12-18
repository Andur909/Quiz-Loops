window.addEventListener("load", listeners);
var ans;
var num1;
var num2 = 1;
var odd

function listeners(){
	document.getElementById("btnsubmit").addEventListener("click",submit);
	document.getElementById("btnsubmit").disabled=true;
	document.getElementById("intanswer").addEventListener("keypress", pressed);
}

function pressed() {
	if (document.getElementById("intanswer").value != "") {
		document.getElementById("btnsubmit").disabled=false;
	}
}

function submit(){
	ans = parseFloat(document.getElementById("intanswer").value);
	//Check # between 6-20, and whole
	if (ans > 20){
		alert("# must be lower than 21");
		return;
	} else if (ans < 6){
		alert("# must be higher than 5");
		return;
	} else if ((ans % 1) != 0) {
		alert("It must be a whole number");
		return;
	}
	
	//Even odd
	if ((ans % 2) == 0) {
		odd = "EVEN";
	} else if ((ans % 2) == 1) {
		odd = "ODD";
	}
	
	num1 = String(ans) + " " + odd;
	
	for (; num2 < 5;){
		ans = ans * 2;
		if ((ans % 2) == 0) {
			odd = "EVEN";
		} else if ((ans % 2) == 1) {
			odd = "ODD";
		}
		num1 = num1 + ", " + String(ans) + " " + odd;
		num2 = num2 + 1;
	}
	
	document.getElementById('lblanswer').innerHTML = String(num1);
}