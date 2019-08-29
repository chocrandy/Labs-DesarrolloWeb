//-1- Alerta
alert("Welcome GUEST to My First Blog");

//-2- Variables
//string
var nombre;
nombre = prompt("Enter your name:");
//numerico
var age = 20;
//array - arreglo 
var pets = ["Ruso", "Romeo", "Max", "Moly"];
console.log(pets[2]);
//object - objeto
var obj = { color: "White", size: 12 }
//boolean - booleano
var existe = true;
//undefined
var fin;
document.write(fin);
console.log(fin);
//null
var num1 = 20;
var num1 = null;
//NaN - valor invalido
var txt = "Hello";
console.log(txt * 2);

alert("Welcome " + nombre + "! Now youre not a GUEST! XD");

//-3- documento.Write()
console.log("Your User is " + nombre + age);
console.log("Status: ONLINE");

//-4- console.log(nombre);
console.log(nombre + " " + age);

//-5- Arreglos
var motos = ["KTM", "Yamaha", "Honda", "Suzuki"];
motos[3] = "Apache";
console.log(motos[3]);
console.log(motos);

//-6- Metodos y propiedades para los Arrays
//propiedad length
console.log("Tienes " + motos.length + " motos");
motos[motos.length] = "Aprilia";
console.log("Tienes " + motos.length + " motos");
//propiedad push - agrega al final
motos.push("Pulsar", "Ducati");
console.log("Tienes " + motos.length + " motos");
//propiedad pop - elimina de ultimo
motos.pop();
console.log("Tienes " + motos.length + " motos");
console.log(motos);
//propiedad concat
var motos2 = ["Ducati", "Kawasaki", "Aprilia"];
var motosaux = motos.concat(motos2);
console.log(motosaux);
//propiedad join
console.log(motos.join(" ; "));
motos2 = motos2.join(" | ");
console.log(motos2);
//metodo ordenamiento 
var ordenarmotos = motosaux.sort();
console.log(ordenarmotos);

//Condiciones: sentencia donde el codigo va poder tomar una decision)
//-7- Ciclo IF 
var mostrar;
mostrar = prompt("¿Qué marcas de moto quiere ver, comerciales o exclusivas?");
if (mostrar == "comerciales") 
{
    alert("Exclusivas: " + motos2);
} 
else if (mostrar == "exclusivas")
{
    alert("Comerciales: " + motos);
}
else
{
    alert("No has seleccionado ni una. Cargue de nuevo la pagina");
}
//comparacion con el mimso tipo === 
var aux = "3";
if (aux == 3) {
    console.log("True");
}
else
{
    console.log("False");
}

//-8- Ciclo FOR
for (let i = 0; i < (motosaux.length - 5); i++) 
{
    //const element = array[i];
    console.log(motosaux[i] + "!");
}
console.log(motosaux.length);

//-9- Ciclo WHILE
var i = 0;
while (i != 10) 
{    
    console.log(i);
    i++;
}

//-10- Comparacion con el mismo tipo ===
var aux = "3";
if (aux == 3) {
    console.log("True");
}
else
{
    console.log("False");
}