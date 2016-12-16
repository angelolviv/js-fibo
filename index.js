function fibo(n) {
	var n1 = 1,
		n2 = 1;
	for (var i = 3; i <= n; i++) {
		var n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
	}
	return n1;
}

var n = Number(prompt('Введіть номер числа Фібоначчі:'));
var digitF = fibo(n);
document.write(digitF);
