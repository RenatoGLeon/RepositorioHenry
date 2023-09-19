/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return array[0];

   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   return array[array.length -1];
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}

function obtenerLargoDelArray(array) {
   return array.length
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   let newArray = [];

   for(let i = 0; i < array.length; i++){
      newArray.push(array[i] + 1);
   }

   return newArray;
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return array;
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return array;
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   return palabras.join(' ');
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {
   if(array.includes(elemento)){
      return true
      } else {
         return false
      };
   };

   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:


function agregarNumeros(arrayOfNums) {
   let sum = 0;

   for(i = 0; i < arrayOfNums.length; i++ ){
      sum += arrayOfNums[i]
   }
   return sum;

   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   let Suma = 0;
   for(i = 0; i < resultadosTest.length; i++){
      Suma += resultadosTest[i];
   }
return Suma / resultadosTest.length;
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(arrayOfNums) {
  
   let Number = [0];

   for (let i = 0; i < arrayOfNums.length; i++){
      if( arrayOfNums[i] > Number){
         Number = arrayOfNums[i];
      }
   }
   return Number;
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}

function multiplicarArgumentos() {
   if (arguments.length === 0){
      return 0
   } else if (arguments.length === 1){
      return arguments[0]
   }

   let multiplicación = 1;
   for( let i = 0; i < arguments.length; i++){
      multiplicación *= arguments[i]
   }
   return multiplicación;
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {
let mayor18 = [];
for(let i = 0; i < array.length; i++){
   if(array[i] > 18){
      mayor18.push(array[i])
   }
}
return mayor18.length;
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   if (numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana"
   } else{
      return "Es dia laboral"
   }
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   let Numero = num.toString();
   if(Numero[0] === '9'){
      return true
   } else{
      return false
   }
   
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}

function todosIguales(array) {  
   let comp = array[0];

   for (let i = 1; i < array.length; i++){
      if (array[i] !== comp){
    return false;
      }
}
 return true;
}

   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:


function mesesDelAño(array) {
   let ArrayMeses = [];
   array.forEach(mes=>{
      if(mes === "Enero"){
         ArrayMeses.push(mes)
      }
      if(mes === "Marzo"){
         ArrayMeses.push(mes)
      }
      if(mes === "Noviembre"){
         ArrayMeses.push(mes)
      }
   })
   if(ArrayMeses.length === 3){
      return (ArrayMeses)
   } else{
      return "No se encontraron los meses pedidos"
   }
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}


function tablaDelSeis() {
   let Mult = [];
   for(let i = 0; i <= 10; i++){
      Mult.push(6 * i)
   }
   return Mult
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   let Numeros = [];
   array.forEach(numero=>{
      if(numero > 100){
         Numeros.push(numero)
      };
   }
      );
   return Numeros;
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   let array = [];
   for (let i = 0; i < 10; i++){
      if (num === i){
         return "Se interrumpió la ejecución"
      }
      num = num + 2
      array.push(num)
   }
   return array

   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {

let array = [];
for (i = 0; i < 10; i++){
   if(i === 5){
      continue
   };
 num = num + 2
 array.push(num)
}
return array;

   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
