//Operador de igualdad
let a = 1, b = 8, c = "3"

let z = a == c

console.log(z)


//Operador de diferencia
let j = 3, k = 2, l = 3

let m = j != l
console.log(m)

//Operadores relacionales
let comparar = a < b
console.log(comparar)

comparar = a <= b
console.log(comparar)

//Ejercicio
let edad = 17
if(edad >= 18){
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

//Operador AND
let valMin = 0, valMax = 10
if (a >= valMin && a <= valMax){
    console.log("Esta dentro del rango")
} else {
    console.log("Estas fuera del rango")
}

//Operador OR
let vacaciones = false, diaDescuento = false
if (vacaciones || diaDescuento) {
    console.log("Padre puede asistir al juego del hijo")
} else {
    console.log("El padre esta ocupado")
}

//Operador ternario
let resultado = (10 > 2) ? "Verdadero" : "Falso"
console.log(resultado)