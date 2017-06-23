var animal =" Había una vez una vaca en la quebrada de humahuaca";
var posicion = animal.indexOf('vaca');
console.log(posicion);

/*crear una funcino que verifique si el texto contiene una letra u*/

function encontraru (texto){
	if(texto.indexOf('u')==-1){
		alert("No se encontró la letra U en el texto");
	}else{
		alert("Se encontró la letra u en el texto en la posición "+ texto.indexOf('u'));
	}
}

var cadena="Hoy es un día soleado";
encontraru(cadena);

function encontrarletra(texto,letra){
	if(texto.indexOf(letra)==-1){
		alert("No se encontró la letra "+ letra+" en el texto");
	}else{
		alert("Se encontró la letra "+letra + " en el texto, en la posición "+ texto.indexOf(letra));
	}
}

var cadena=prompt("Ingrese un texto");
var letra=prompt("Ingrese una letra a encontrar en el texto");
encontrarletra(cadena,letra);

var animales=['Perro','Gato','Ratón','Loro','Águila', 45873];

for(i=0;i<animales.length;i++){
	if(typeof(animales[i])!='string'){
		console.log("Se encontró un elemento que no es un string en la posicion "+i);
	}
}
var continentes=['Asia','América','Europa','-','Oceanía','África','-','Antártida'];
var contador=0;
for(var i=0;i<continentes.length;i++){
	if(continentes[i]=='-'){
		continentes[i]='valor vacío';
		contador=contador+1;
	}
}

console.log(continentes);