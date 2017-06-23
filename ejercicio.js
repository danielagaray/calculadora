

function suma(num1,num2){
  var resultado=num1+num2;
  alert("El resultado de la suma es "+ resultado );
}

function resta (num1, num2){
  var resultado=num1-num2;
  alert("El resultado de la resta es "+resultado);
}

function multiplicar(num1,num2){
  var resultado=num1*num2;
  alert("El resultado de la multiplicación es "+ resultado);
}

function division(num1,num2){
  if(num2==0){
    alert("No se puede dividir por 0!");
  }else{
    var resultado=num1/num2;
    alert("El resultado de la división es "+resultado);

  }
}

function calculadora(){

  var operacion=prompt("Ingrese operación a realizar");
  var num1=prompt("Ingrese número 1");
  var num2=prompt("Ingrese número 2");
  num1=parseInt(num1);
  num2=parseInt(num2);
  if(operacion=="suma"){
    suma(num1,num2);
  }
  if(operacion=="resta"){
    resta(num1,num2);
  }
  if(operacion=="multiplicar"){
    multiplicar(num1,num2);
  }
  if(operacion=="division"){
    division(num1,num2);
  }
}




calculadora();
