/*Fase prep:

Scrivi un programma che stampi i numeri da 1 a 100, ma
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi Buzz
per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz*/

//Fase elab:



//Fase output:

for (let x = 1; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FizzBuzz"); 
    } else if (x % 3 == 0) {
        console.log("Fizz"); 
    } else if (x % 5 == 0) {
        console.log("Buzz"); 
    } else {
        console.log(x); 
    }
}