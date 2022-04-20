//Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
	return lado * 4;
}


function areaCuadrado(lado) {
	return lado * lado;
}


console.groupEnd()

//Codigo del triangulo

console.group("Triangulo")


function perimetroTriangulo(lado1,lado2,base) {
	return lado1 + lado2 + base;
} 

function areaTriangulo(altura,base){
	return base * altura;
}

console.groupEnd()

//Codigo del círculo

console.group("Círculo");


function diametroCirculo(radio) {
	return radio*2;
} 

const PI = Math.PI;
console.log("pi es: " + PI);

function circunferencia(radio) {
	const diametro = diametroCirculo(radio);
	return diametro*PI;
} 

function area(radio) {
	return PI*(radio*radio)
}

console.groupEnd()

//Interaccion HTML


function calcularAreaCuadrado() {
	const input = document.getElementById("InputCuadrado");
	const value = input.value;	

	const area = areaCuadrado(value);
	alert(area);
}

function calcularPerimetroCuadrado() {
	const input = document.getElementById("InputCuadrado");
	const value = input.value;

	const perimetro = perimetroCuadrado(value); 
	alert(perimetro)	
}