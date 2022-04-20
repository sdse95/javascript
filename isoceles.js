function comprobarIsoceles(lado1,lado2,lado3) {
	let ladoIsometrico

	let ladoBase

	switch (true) {
		case ((lado1 === lado2) && (lado1 != lado3)):
		ladoIsometrico = lado1;
		ladoBase = lado3;
		console.log( ladoIsometrico, ladoBase);
		break;


		case ((lado1 === lado3) && (lado1 != lado2)):
		ladoIsometrico = lado1;
		ladoBase = lado2;
		console.log( ladoIsometrico, ladoBase);
		break


		case ((lado3 === lado2) && (lado1 != lado3)):
		ladoIsometrico = lado3;
		ladoBase = lado1;
		console.log( ladoIsometrico, ladoBase);
		break

		case (lado3 != lado2 !=lado1):
		return console.log("No es triangulo Isoceles");
		break;
	}
	if (ladoIsometrico < ladoBase) {
		return console.log("lados iguales: " + ladoIsometrico +". Lado Base: "+ ladoBase);
			
	} else{
		return console.log("no es isoceles");
	}

}


function comprobarSiEsIsoceles() {
	const lado1 = document.getElementById("lado1");
	const valueLado1 = lado1.value;

	const lado2 = document.getElementById("lado2");
	const valueLado2 = lado2.value;

	const lado3 = document.getElementById("lado3");
	const valueLado3 = lado3.value;


	const comprobar = comprobarIsoceles(valueLado1,valueLado2,valueLado3);
	
}