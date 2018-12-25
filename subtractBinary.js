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

function ConvertToBinary(num){
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
	return binary;
}

function ConvertToInt(binary){
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
	return total;
}

function CheckInput(binary1, binary2){
	if (isNaN(binary1) || binary1 == "" || isNaN(binary2) || binary2 == ""){
		document.getElementById("ans").innerHTML = "Bad input, input must be in binary<br>with no spaces";
		document.getElementById("ans2").innerHTML = "";
		return;
	}
	else {
		var num1 = ConvertToInt(binary1);
		var num2 = ConvertToInt(binary2);
		var total = num1 - num2;
		var str = num1 + " - " + num2 + " = " + total;
		document.getElementById("ans").innerHTML = str;
		
		var bTotal = ConvertToBinary(total);
		var s = binary1 + " - " + binary2 + " = " + bTotal;
		document.getElementById("ans2").innerHTML = s;
	}

}



function Calculate(){
  var binary1 = document.getElementById("binary1").value;
  var binary2 = document.getElementById("binary2").value;
  CheckInput(binary1, binary2);
}