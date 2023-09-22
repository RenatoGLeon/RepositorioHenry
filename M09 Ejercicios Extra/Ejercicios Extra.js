/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {

   let arrayOfArrays = [];

   for (let obj in objeto){
     arrayOfArrays.push([obj, objeto[obj]]);

   };
   return arrayOfArrays;
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
}

function numberOfCharacters(string) {
let object = {};
let splitedString = string.split('')
splitedString.forEach(char=>{
   if(object.hasOwnProperty(char)){
      object[char]+=1;
   } else {
      object[char]=1;
   }
})
return object;
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
}

function capToFront(string) {
   let strings1 = [];
   let strings2 = [];

   for( let i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         strings1 += string[i];
      } else {
         strings2 += string[i];
      };
   };
   return strings1 + strings2;
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
}

function asAmirror(frase) {

   let words = frase.split(' ');

   for(let i = 0; i < words.length; i++){
      words[i] = words[i].split('').reverse().join('');
   }
let result = words.join(' ');
return result;

   
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
}

function capicua(numero) {
      let reversed = numero.toString().split('').reverse().join('');
      return numero.toString() === reversed ? "Es capicua" : "No es capicua";
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
}

function deleteAbc(string) {
   return string.replace(/[abc]/g, '')
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
}

function sortArray(arrayOfStrings) {
   return arrayOfStrings.sort((a,b) => a.length - b.length)
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {

 let array = [];
 for(let num1 of array1){
   if (array2.includes(num1)){
      array.push(num1)
   }
 }
 return array;
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
