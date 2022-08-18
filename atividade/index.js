var raio = prompt("Digite o raio: ");
raio = parseFloat(raio);
var perimetro = 2* Math.PI * raio;
var area = Math.PI * raio^2;

document.write("O perimetro é: ", perimetro);
document.write("A area é: ", area);