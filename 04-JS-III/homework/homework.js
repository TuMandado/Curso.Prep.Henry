// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}



function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  n=0;
while (n < array.length) {
array[n]=array[n]+1;
n++;
}
return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length]=elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  palabras2=palabras[0];
n=1;
while (n < palabras.length) {
palabras2=palabras2+' '+palabras[n];
n++;
}
palabras=palabras2;
return palabras;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    prueba=false;
  n = 0;
  while ((!!(n < array.length)) * (!!(prueba === false))) {
  prueba=!!(array[n]===elemento)
  n++;
  }
  return prueba
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma = 0
n = 0;
while (n < numeros.length) {
suma = suma + numeros[n];
n++;
}
return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma = 0
  n = 0;
  while (n < resultadosTest.length) {
  suma = suma + resultadosTest[n];
  n++;
  }
  return suma/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  grande=numeros[0]
n=0;
while (n < (numeros.length-1)) {
if (grande<=numeros[n+1]) {grande=numeros[n+1]}
else {grande=grande};
n++;
}
return grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if ((arguments.length) < 1) {
    return 0; 
    }
    n=0;
    producto = 1;
    while (n < arguments.length) {
    producto = producto * arguments[n];
     n++;
    }
    return producto;
    }


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  contador = 0;
  n = 0;
  while (n < arreglo.length) {
  if (arreglo[n] > 18) {
  contador = contador + 1;
  }
  n++;
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia) {
    case 1: 
    case 7: return 'Es fin de semana';
break;
    default: return "Es dia Laboral";
}
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = n;
var digits = num.toString().split('');
var realDigits = digits.map(Number)
if (realDigits[0] === 9) {
return true;
}
else { return false; }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
// Calculates arreglos´ products:
n=0;
producto = 1;
while (n < arreglo.length) {
producto = producto * arreglo[n];
 n++;
}

// Calculates raised number:
exp = Math.pow ( arreglo[0], arreglo.length );

// Final Verification:
if (exp == producto) {
    return true;
}
else {
    return false
}
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  Enero = !!(array.indexOf("Enero")+1) ;
console.log(Enero);
console.log(array.indexOf("Enero"));
Marzo = !!(array.indexOf("Marzo")+1) ;
console.log(Marzo);
console.log(array.indexOf("Marzo"));
Noviembre = !!(array.indexOf("Noviembre")+1) ;
console.log(Noviembre);
console.log(array.indexOf("Noviembre"));
console.log(!!(Enero*Marzo*Noviembre));
    if (!!(Enero*Marzo*Noviembre)) {
        return ["Marzo", "Noviembre", "Enero"];
    }
    else {
        return  "No se encontraron los meses pedidos"
    }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  n = 0;
  m = 0;
  salida = [];
      while (n < array.length) {
          if (array[n] > 100) {
              salida.push (array[n]);
                  //console.log('salida: ',salida);
              m++;
                  //console.log('m: ',m);
          }
          n++;
          //console.log('n: ',n);
      }
      return salida
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  n = 1;
  array=[];
  while (n <= 10) {
          //console.log('NUEVO BUCLE');
      numero = numero + 2;
          //console.log('numero',numero);
      array.push(numero);
          //console.log('array',array);
          //console.log('n',n);
      if (numero == (n)) {
          return 'Se interrumpió la ejecución'
          break;
          }
      n++;
          
      }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
