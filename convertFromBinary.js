function Convert(binary){
	var bc = binary.length - 1;
	var Power = Math.pow(2, (bc));
	var total = 0;
	
	var i;
	for (i=0; i <= binary.length - 1; i++){
		if (binary[i] == '1'){
			total = total + Power;
		}
		bc = bc - 1;
		if (bc < 0){
			break;
		}
		Power = Math.pow(2,bc);
	}
	document.getElementById("ans").innerHTML = total.toString();
	console.log(total);
}

function CheckInput(binary){
	var goodInput = true;
	if (isNaN(binary) || binary == ""){
		goodInput = false;
		document.getElementById("ans").innerHTML = "Bad input, input must be in binary<br>with no spaces";
		return;
	}
	
	var i;
	for (i = 0; i <= binary.length - 1; i++){
		if ((binary[i] != '0') && (binary[i] != '1')){
			goodInput = false;
		}
	}
	console.log(goodInput);
	if (goodInput == true){
		Convert(String(binary));
	}
	else {
		document.getElementById("ans").innerHTML = "Bad input, input must be in binary<br>with no spaces";
	}

}

function Calculate(){
  var binary = document.getElementById("binary").value;
  CheckInput(String(binary));
}