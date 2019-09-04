//Algoritmo de ordenamiento: Burbúja 
function Burbuja() {
    var lista = [73, 47, 63, 24, 14];
    var n; //cantidad de datos en el arreglo
    var i; //contador del 2do FOR
    var k; //contador del 1er FOR
    var aux; //
    n = lista.length;    
    document.write(n + ' <p style="color:cyan; font-size: 25px;"> Lista Sin Ordenar: ' + lista + '</p>'); // Mostramos, por consola, la lista desordenada    
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) //1er FOR 1-9
    {
        //document.write("<br> 1er FOR | k: " + k + '<br>');
        for (i = 0; i < (n - k); i++) //2do FOR 0-(9-1) | 
        {
            //document.write("2do FOR | k: " + k + " i: " + i + " (n-k): " + (n-k) + '<br>');
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
                    elemento.style.height = "" + ((i+1)*20) + "px";
                    // 5. Agregar el elemento al documento
                    document.getElementById("pilas").appendChild(elemento);

                }                                   
                document.write('<br>');
            }
            //document.write(aux + "<br>");
        }        
    }
    document.write('<p style="color:cyan; font-size: 25px;"> Lista Ordenada: ' + lista + "</p>"); // Mostramos, por consola, la lista ya ordenada
}
Burbuja();
