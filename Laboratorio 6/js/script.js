
//nuevo ordenamiento, todo desde cero
function nuevoBur()
{    
    document.getElementById("pilas").innerHTML= "";
    //limpiarDiv.textContent = ("");
    //limpiarDiv.style.clear();
    //limpiarDiv.innerHTML = ("");
    incP = 0;
    listaAle = [];   
    
    lista = [];
    listaAle = [];         
    nBur = 0; //cantidad de datos en el arreglo
    auxBur = []; //variable temporal para lista
    contadorDivBur = 1;    
    listaPBur = [];      
    largoauxBur = 0;   
    contaauxBur = 0; 
    aumBur = 0; 
    listaauxBur = 0;     
    listaMaximo = 0;
    listaMinimo = 0;    

    var boton = document.getElementById("btnNew");
    boton.disabled = false;
    
    //controles TRUE= deshabilitado FALSE= habilitado
    document.getElementById("btnAle").disabled = false; 
    document.getElementById("btnAle").style.background = "green";

    document.getElementById("btnNew").disabled = true;
    document.getElementById("btnNew").style.background = "red";    

    document.getElementById("btnSig").disabled = true;
    document.getElementById("btnSig").style.background = "red";

    document.getElementById("btnMax").disabled = true;
    document.getElementById("btnMax").style.background = "red";

    document.getElementById("btnMin").disabled = true;
    document.getElementById("btnMin").style.background = "red";
}
//generar numero aleatorios
var listaMaximo = 0;
var listaMinimo = 0;
var listaAle = [];
function numAle()
{
    var aleatorio = 0;        
    var mayor = 0, menor = 0;
    //console.log(listaAle);
    for (i = 0; i < 20; i++) 
    {
        aleatorio = Math.round(Math.random()*(99-10)+parseInt(10));
        listaAle[i] = aleatorio;               
    }
    alert("Lista Generada: " + listaAle);
    aumentoBur();    
    
    //controles TRUE= deshabilitado FALSE= habilitado
    document.getElementById("btnAle").disabled = true; 
    document.getElementById("btnAle").style.background = "red";

    document.getElementById("btnNew").disabled = false;
    document.getElementById("btnNew").style.background = "green";    

    document.getElementById("btnSig").disabled = false;
    document.getElementById("btnSig").style.background = "green";

    document.getElementById("btnMax").disabled = false;
    document.getElementById("btnMax").style.background = "green";

    document.getElementById("btnMin").disabled = false;
    document.getElementById("btnMin").style.background = "green";
}

function listaMax()
{   
    mayor = 0; 
    for (index = 0; index < listaAle.length; index++) 
    {    
        if (listaAle[index] > mayor) {
            mayor = listaAle[index];
        }        
    }    
    alert("NÚMERO MÁXIMO ES: " + mayor);
}

function listaMin()
{    
    menor = 100;
    for (index = 0; index < listaAle.length; index++) 
    {    
        if (listaAle[index] < menor) {
            menor = listaAle[index];
        }        
    }        
    alert("NÚMERO MÍNIMO ES: " + menor);
}
//Ordenamiento Burbuja Dinamico 
var aumBur = 0;
var listaauxBur;
var contaauxBur;
var largoauxBur; //creamos variables para pasar parametros a principal()
function aumentoBur()
{        
    var lista = listaAle;         
    var nBur; //cantidad de datos en el arreglo

    var auxBur; //variable temporal para lista
    var contadorDivBur = 1;    
    var listaPBur = [];
    nBur = lista.length;      
    largoauxBur = nBur;      
    
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
    for (j = 1; j < nBur + 1; j++) 
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
    for (k = 1; k < nBur; k++) //1er FOR 1-5
    {        
        for (i = 0; i < (nBur-k); i++) //2do FOR 0-(9-1) | 
        {                            
            if (lista[i] > lista[i + 1]) 
            {
                auxBur = lista[i];                                
                lista[i] = lista[i + 1];
                lista[i + 1] = auxBur;                        
            }             
            //console.log("Lista #" + contadorDivBur + ": " + lista + " Y aum: " + aumBur);
            contadorDivBur += 1; 
            listaPBur[aumBur] = lista.join("");               
            aumBur++;     
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
    
    listaauxBur = listaPBur;
    contaauxBur = contadorDivBur - 1;      
}

//aumentoBur();
var incP = 0;
function principalBur()
{          
    //alert("Largo: " + largoauxBur + "  Lista: " + listaauxBur + "  Contador: " + contaauxBur + "  Incremento: " + incP);
    if(incP < contaauxBur)
    {               
        for (k = 1; k < largoauxBur; k++) //1er FOR 1-5
        {        
            for (i = 0; i < (largoauxBur - k); i++) //2do FOR 0-(9-1) | 
            {            
                if (listaauxBur[i] > listaauxBur[i + 1]) 
                {                                 
                    for (j = 0; j < largoauxBur; j++) 
                    {                    
                        var auxi = document.getElementById("pa" + (j+1));
                        auxi.innerHTML = ("" + listaauxBur[incP].substr(0 + j + j, 2) +"");
                        auxi.style.height = "" + ((listaauxBur[incP].substr(0 + j + j, 2))*2) + "px";
                        auxi.style.marginBottom = "40px";
                        auxi.style.width = "auto";   
                    }                                
                }            
            }        
        }
        //console.log("Principal: " + listaauxBur[incP]);
        incP++;        
    }
    else
    {
        alert("Ordenamiento completado! XD");    
        listaauxBur = [];                
        
        //controles TRUE= deshabilitado FALSE= habilitado
        document.getElementById("btnAle").disabled = true; 
        document.getElementById("btnAle").style.background = "red";

        document.getElementById("btnNew").disabled = false;
        document.getElementById("btnNew").style.background = "green";    

        document.getElementById("btnSig").disabled = true;
        document.getElementById("btnSig").style.background = "red";

        document.getElementById("btnMax").disabled = false;
        document.getElementById("btnMax").style.background = "green";

        document.getElementById("btnMin").disabled = false;
        document.getElementById("btnMin").style.background = "green";
    }    
}