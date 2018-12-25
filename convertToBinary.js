function Convert(num){
	
}

function CheckInput(num){
	if (isNaN(num)){
		document.getElementById("ans").innerHTML = "Bad input, input must be in binary<br>with no spaces";
		return;
	}
	else {
		Convert(num);
	}

}



function Calculate(){
  var binary = document.getElementById("binary").value;
  CheckInput(String(num));
}