parrafo = document.getElementById("mip");
boton = document.getElementById("btenviar");

parrafo.addEventListener("click", saludar);
boton.addEventListener("dblclick",saludar2);

function saludar(){
    alert("Ola q ace?");
}

function saludar2(){
    alert("Ola q ace? x2 :v");
}