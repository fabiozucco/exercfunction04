var a = parseInt(prompt("Digite o primeiro valor"));
var b = parseInt(prompt("Digite o segundo valor"));
var c = parseInt(prompt("Digite o terceiro valor"));

function value (a,b,c) {
	if (a < b && a < c) {
		return document.body.append("O menor valor é " + a);
	}else if (b < a && b < c) {
		return document.body.append("O menor valor é " + b);
	}else if (c < a && c < b) {
		return document.body.append("O menor valor é " + c);
	}
}

value(a,b,c);