function decimalToBinary(num) {
  //Write you code here
	let output="";
	while(num>=2){
        let add=num%2;
      	output=add+output;
        num=parseInt(num/2);
		}
	if(num==1){
		output=num+output;
	}
	console.log(output);
}

window.decimalToBinary = decimalToBinary;
