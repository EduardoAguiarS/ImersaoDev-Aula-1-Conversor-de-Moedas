var valorEmDolar = Number(prompt("Qual o valor em dolar você quer converter?"));
var valorEmReal = valorEmDolar * 5.50;

alert("O valor em dolar é: " + valorEmDolar.toLocaleString("en-US", {style: "currency", currency: "USD"}));
alert("O valor em real é: " + valorEmReal.toLocaleString("pt-br", {style: "currency", currency: "BRL"}));