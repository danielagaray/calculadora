'use strict';
function suma(){
	var resultado=0;
	for(var i=0; i<arguments.length;i++){
		resultado+=arguments[i];
	}
	return resultado;
}

console.log(suma(1,3,2,5));
console.log(suma(100,20,30,40,200));

function resta(){
	var resultado=arguments[0];
	if(resultado!=0){
		for(var i=1;i<arguments.length;i++){
			resultado-=arguments[i];
		}
	}
	return resultado;
}

console.log(resta(100,20,10,5));

function multiplicacion(){
	var resultado=arguments[0];
	for(var i=1;i<arguments.length;i++){
		resultado=resultado*arguments[i];
	}
	return resultado;
}

console.log(multiplicacion(2,2,2,3));

function division(){
	var resultado=arguments[0];
	for (var i =1;i<arguments.length;i++){
		if(arguments[i]==0){
			return "No se puede dividir por 0";
		}
		else{
			var resultado=resultado/arguments[i];
		}
		
	}
	return resultado;
}

console.log(division(10,5));

var respuesta= confirm("Se están quedando dormidos?");
if (respuesta){
	alert("Mas café!!");
}else{
	alert("Sigamos codeando!!");
}
