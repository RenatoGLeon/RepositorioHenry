/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   return nombre.charAt(0).toUpperCase() + nombre.slice(1)
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
}

function invocarCallback(cb) {
   cb()
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
}

function operacionMatematica(num1, num2, cb) {
   cb(num1, num2)

   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
}

function sumarArray(arrayOfNumbers, cb) {

   let suma = 0;

   for(let i = 0; i < arrayOfNumbers.length; i++){
      suma += arrayOfNumbers[i];
   };

   cb(suma);
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
}

function forEach(array, cb) {

array.forEach((elemento) => cb(elemento))

   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
}

function map(array, cb) {
   let newArray = [];
   for( let i = 0; i < array.length; i++){
      newArray.push(cb(array[i]))
   }
   return newArray
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
}

function filter(arrayOfStrings) {
   let startsWithA = [];
   for(let i = 0; i < arrayOfStrings.length; i++){
      if(arrayOfStrings[i][0] === 'a'){
         startsWithA.push(arrayOfStrings[i])
      }
   }
   return startsWithA
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
