function GetPower(num){
	var power = 0;
	var sum;
	
	while (true){
		sum = Math.pow(2, (power));
		if (sum >= num){
			if (sum > num & num != 0)
			{
				power = power - 1;
				sum = Math.pow(2, (power));
			}
			break;
		}
		power = power + 1;
	}
	return power;
}

function Convert(num){
	var power = GetPower(num);
	var power_sum;
	var num_total = num;
	var prev_num_total = num;
	var binary = "";
	
	for (; power >= 0; power--){
		power_sum = Math.pow(2, (power));
		prev_num_total = prev_num_total - power_sum;
		if (prev_num_total < 0){
			prev_num_total = num_total;
			binary = binary + "0";
		}
		else {
			num_total = prev_num_total;
			binary = binary + "1";
		}
			
	}
	
	document.getElementById("ans").innerHTML = binary;
	
}

function CheckInput(num){
	if (isNaN(num) || num == ""){
		document.getElementById("ans").innerHTML = "Bad input, input must be in binary<br>with no spaces";
		return;
	}
	else {
		Convert(num);
	}

}



function Calculate(){
  var num = document.getElementById("binary").value;
  CheckInput(String(num));
}