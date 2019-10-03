boton = document.getElementById("btn");
boton.addEventListener("click", crearElemento);

function Estilo(){
    div = document.createElement("div");
  /*   div.setAttribute("width","300px"); */
    div.appendChild(boton);

    div.style.background = "blue";

    document.body.appendChild(div);
}

function crearElemento(){
    texto = document.getElementById("txt").value;

    ul = document.getElementById("lista");
    li = document.createElement("li");
    
    textli = document.createTextNode(texto);
    li.appendChild(textli);
    ul.appendChild(li);
}