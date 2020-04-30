// Escribir las funciones aquí

/** 
 * @name toCamelCase
 * @description Convierte un string en dash-case a camelCase
 * 
 * @param {string} str - El string en dash-case a convertir
 * @returns {String} El string en camelCase convertido
 *
 * @example
 *  toCamelCase('javascript-es-raro') // returns 'javascriptEsRaro'
 */

 // str: hoy-es-miercoles
const toCamelCase = (str) => {
    let word = str.split("-")
    let result=""

    for (let i = 1; i < word.length; i++) { //empieza de i=1, porque la primera palabra no hay que pasarla a mayúscula
        const toUpper = word[i][0].toUpperCase() // mayúscula solo primera letra
        // console.log(toUpper)
        let cutLetters=word[i].slice(1, 1500); //corte desde la primera letra hasta el índice 1500 q es un valor inexistente, pero sirve cortar hasta el final
        // console.log(cutLetters)
        result+=toUpper+cutLetters //sumé la pimera letra mayúscula con el resto del texto minúscula de esa palabra
    }  
    let CamelCaseWord =word[0]+result   //word[0] es p sumar la primera palabra que no se modifica
    return CamelCaseWord
}

/** 
 * @name getShortestWords
 * @description Obtiene la(s) palabra(s) más corta(s) de un string
 * 
 * @param {string} text - El texto del que se desea obtener las palabras
 * @returns {String[]} Array de palabra(s) más cortas de {text}
 *
 * @example
 *  getShortestWords('no sé por qué no funciona') // returns ['no', 'sé']
 */


const getShortestWords = (text) =>{
    let shortText = text.split(" ")
    let lessLength= 99999999999999
    let result=[]

    for (let i=0; i < shortText.length; i++){ 
       
        if(shortText[i].length <= lessLength){
            lessLength=shortText[i].length;
            result.push(shortText[i])  
            if(result[0].length !== lessLength)    {
                result.shift()              
            }          
        }           
    }
    return result
}



/** 
 * @name getTallestSkyscraper
 * @description Dado un array 2D donde los 1 representan edificios (dispuestos verticalmente), devuelve la altura del edificio  más alto (cantidad de 1s)
 * 
 * @param {number[][]} skyline - Representación de la vista de edificios de una ciudad, donde 1s son edificios y 0 el resto  * 
 * (cielo)
 * @returns {Number} La altura del edificio más alto
 *
 * @example
 *  getTallestSkyscraper([
 *    [0, 0, 0, 0],
 *    [0, 1, 0, 0],
 *    [0, 1, 1, 0],
 *    [1, 1, 1, 1]
 *  ]) // returns 3
 */



const getTallestSkyscraper =(array2D) => {

let j = 0
let columna = 0
let mayor = 0;
    while(j <= 3){
        for (let i = 0; i < array2D.length; i++) {
            columna += array2D[i][j]
        }
        j++
        // console.log(columna)
        if(mayor < columna){
            mayor = columna
        }
        columna = 0;
    }
    return mayor
}



const isPalindrome = text =>{
    let str = text.split(" ").join("")
    let copyStr = str.split("").reverse().join("")

    console.log(copyStr)
    let result = str === copyStr 
    return result
}


const getNextPalindrome = number =>{
    let limiteNumber = 9999
    let palindrome=""
   
    let netxPalindrome =[]
  
 
    for (let i = number; i <= limiteNumber.length; i++) {
        palindrome= limiteNumber.reverse()
         console.log(palindrome)
        if (palindrome === limiteNumber ){
        netxPalindrome.push(palindrome)
        }
    }

    return palindrome 

}






/** 
 * @name getNextPalindrome
 * @description Devuelve el siguiente número palíndromo de un número x
 * 
 * @param {number} x - Número del que sea desea obtener el siguiente palíndromo
 * @returns {Number} El siguiente palíndromo
 *
 * @example
 *  getNextPalindrome(103) // returns 111
 */