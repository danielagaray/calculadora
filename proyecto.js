function saludo(){
	console.log("Buen día");
}

saludo();

var texto="dani";

var saludo =function(texto){
	console.log(texto);
}

saludo(texto);
saludo("Es sábado");

var suma=function(num1,num2){
	console.log(num1+num2);
}

suma(3,4);

function resta (num1,num2){
	var resultado=num1-num2;
	alert("El resultado es: "+ resultado);
}

resta(6,3);

function multiplicacion(num1,num2){
	var resultado=num1*num2;
	alert("El resultado de la multiplicación es: "+resultado);
}

multiplicacion(2,2);

function division(num1,num2){

	if (num2==0){
		var mensaje="No se puede dividir por 0";
	}
	else{
		var resultado=num1/num2;
		var mensaje="El resultado de la división es: "+resultado;
	}
	return mensaje;

}

alert(division(6,3));
alert(division(6,0));

