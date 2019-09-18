alert("funciona");
var uno = document.getElementById("1");
var resultado = document.createTextNode(uno);
function mostrar()
{
    let resu = document.getElementById("res");
    var d1 = document.createTextNode("1");
    resu.appendChild(cleanP);
    resu.appendChild(d1);
}

/*
// 1. Crear el elemento                    
var elementoh3 = document.createElement('h3');   
// 2. Crear un nodo de texto
var contenidoh3 = document.createTextNode("Lista No Ordenada: " + lista);
// 3. Añadir el noto de texto al elemento
elementoh3.appendChild(contenidoh3);
// 4. Agregar atributos al elemento
//elemento.setAttribute("style", "background-color:red");
elementoh3.style.backgroundColor = "brown";
elementoh3.style.padding = "10px";
elementoh3.style.width = "auto";    
elementoh3.style.marginBottom = "40px";
elementoh3.style.textAlign = "center";
// 5. Agregar el elemento al documento
document.getElementById("pilas").appendChild(elementoh3);

// 1. Crear el elemento                    
var elementoh3 = document.createElement('h3');   
// 2. Crear un nodo de texto
var contenidoh3 = document.createTextNode("Ordenamiento Burbúja");
// 3. Añadir el noto de texto al elemento
elementoh3.appendChild(contenidoh3);
// 4. Agregar atributos al elemento
//elemento.setAttribute("style", "background-color:red");
elementoh3.style.backgroundColor = "blue";
elementoh3.style.padding = "10px";
elementoh3.style.width = "auto";    
elementoh3.style.marginBottom = "40px";
elementoh3.style.textAlign = "center";
// 5. Agregar el elemento al documento
document.getElementById("pilas").appendChild(elementoh3);
*/