var opr=process.argv[2];
var a=(process.argv[3]);
var one=parseInt(a);
var b=(process.argv[4]);
var two=parseInt(b);
calculator(opr,one,two);
function calculator(opr,one,two)
{
	switch(opr){
		case "add":
			console.log(one+two);
		break;
		case "sub":
			
			console.log(one-two);
		break;
		case "mul":
			
			console.log(one*two);
		break;
		case "div":
			
			console.log(one/two);
		break;
		default:
			console.log("Enter a valid option(add,sub,mul,div)");
		break;
	}		
}

