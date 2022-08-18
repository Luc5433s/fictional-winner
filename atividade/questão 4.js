var dinheiro = prompt("Digite quanto de dinheiro você tem: ");
dinheiro = parseFloat(dinheiro);

var litros = dinheiro * 5.00;
var km = litros * 20;
document.write("Você pode comprar ", litros, " litros de combustivel<br>");
document.write("O carro consegue andar ", km, " Km com ", litros, "litros de gasolina");
