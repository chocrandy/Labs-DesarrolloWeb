//Algoritmo de ordenamiento: Burbúja 
function BurbujaDinamico() 
{
    var lista = [73, 47, 63, 24, 14];
    var n; //cantidad de datos en el arreglo
    var i; //contador del 2do FOR
    var k; //contador del 1er FOR
    var aux; //
    var contadorDiv = 1;    
    n = lista.length;       
    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');   
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Lista No Ordenada: " + lista);
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
            
    //Creamos los <p> necesarios
    for (j = 1; j < n+1; j++) 
    {        
        // 1. Crear el elemento                    
        var elementoDivP = document.createElement('p');
        elementoDivP.setAttribute("id", "pa" + j + "");    
        // 2. Crear un nodo de texto
        var contenidoDivP = document.createTextNode("#" + j + "");
        // 3. Añadir el noto de texto al elemento
        elementoDivP.appendChild(contenidoDivP);
        // 4. Agregar atributos al elemento
        //elemento.setAttribute("style", "background-color:red");
        elementoDivP.style.backgroundColor = "LightSkyBlue";
        elementoDivP.style.width = "auto";    
        elementoDivP.style.marginBottom = "40px";
        elementoDivP.style.textAlign = "center";
        elementoDivP.style.color = "black";
        // 5. Agregar el elemento al documento
        document.getElementById("pilas").appendChild(elementoDivP);            
    }
    
    // Algoritmo de burbuja
    var btnClick = document.getElementById("btnSig");
    btnClick.click();
    for (k = 1; k < n; k++) //1er FOR 1-5
    {        
        for (i = 0; i < (n - k); i++) //2do FOR 0-(9-1) | 
        {    
            console.log("Lista #" + contadorDiv + ": " + lista + '<br>');
            contadorDiv += 1;        
            
            if (lista[i] > lista[i + 1]) 
            {
                aux = lista[i];                                
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;                        
                for (j = 0; j < n; j++) 
                {
                    var auxi = document.getElementById("pa" + (j+1));
                    auxi.innerHTML = ("" + lista[j] +"");
                    auxi.style.height = "" + (lista[j]*2) + "px";
                    auxi.style.marginBottom = "40px";
                    auxi.style.width = "auto";                                                            
                }                                
            }            
        }        
    }
    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Lista Ordenada: " + lista);
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento
    //elemento.setAttribute("style", "background-color:red");
    elementoh3.style.backgroundColor = "green";
    elementoh3.style.padding = "10px";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "center";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);
}
function cambioTexto(contadorDiv)
{
    document.getElementById("auxis").innerHTML = "Paso " + cont + " element";
}






BurbujaDinamico();
//BurbujaEstatico();
























//FUNCION BURBUJA DE FORMA ESTATICA, ES DECIR, CON PASOS
function BurbujaEstatico() 
{
    var lista = [73, 47, 63, 24, 14];
    var n; //cantidad de datos en el arreglo
    var i; //contador del 2do FOR
    var k; //contador del 1er FOR
    var aux; //
    var contadorDiv = 1;
    n = lista.length;            
    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Lista No ordenada: " + lista);
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento
    //elemento.setAttribute("style", "background-color:red");
    elementoh3.style.backgroundColor = "blue";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "left";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);
    
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) //1er FOR 1-5
    {
        //document.write("<br> 1er FOR | k: " + k + '<br>');                
        for (i = 0; i < (n - k); i++) //2do FOR 0-(9-1) | 
        {
            //document.write("2do FOR | k: " + k + " i: " + i + " (n-k): " + (n-k) + '<br>');                        
            // 1. Crear el elemento
            var elementoD = document.createElement('div');
            // 2. Crear un nodo de texto
            var contenidoD = document.createTextNode("Paso " + contadorDiv);
            contadorDiv += 1;
            // 3. Añadir el noto de texto al elemento
            elementoD.appendChild(contenidoD);
            // 4. Agregar atributos al elemento
            //elemento.setAttribute("style", "background-color:red");
            elementoD.style.backgroundColor = "White";
            elementoD.style.color = "Black";
            elementoD.style.fontSize = "25px";
            elementoD.style.width = "100%";        
            elementoD.style.marginBottom = "10px";
            // 5. Agregar el elemento al documento
            document.getElementById("pilas").appendChild(elementoD);

            if (lista[i] > lista[i + 1]) 
            {
                aux = lista[i];                                
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;                        

                for (aux = 0; aux < n; aux++) 
                {
                    //document.write('<div><p>' + lista[aux] + '-' + '</p></div>');   
                    // 1. Crear el elemento                    
                    var elemento = document.createElement('p');
                    // 2. Crear un nodo de texto
                    var contenido = document.createTextNode(lista[aux]);
                    // 3. Añadir el noto de texto al elemento
                    elemento.appendChild(contenido);
                    // 4. Agregar atributos al elemento
                    //elemento.setAttribute("style", "background-color:red");
                    elemento.style.backgroundColor = "red";
                    elemento.style.width = "auto";
                    elemento.style.height = "" + (lista[aux]*2) + "px";
                    elemento.style.marginBottom = "40px";
                    // 5. Agregar el elemento al documento
                    document.getElementById("pilas").appendChild(elemento);
                    document.write('<br>');                    
                }                                   
                
            }
            //document.write(aux + '<br>');
        }        
    }
//    document.write('<p style="color:cyan; font-size: 25px;"> Lista Ordenada: ' + lista + "</p>"); // Mostramos, por consola, la lista ya ordenada
    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Lista Ordenada: " + lista);
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento
    //elemento.setAttribute("style", "background-color:red");
    elementoh3.style.backgroundColor = "blue";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "left";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);
}