btnGenerarComentarios = document.getElementById("btnGenerarComentarios");
divComments = document.getElementById("divComments");

btnGenerarComentarios = addEventListener("click", GenerarComen);

function GenerarComen() {
    console.log("Probando");
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        resp = " ";
        for ( iterator of datos) {

               resp += "<p>"+iterator.name+"</p>";
               resp += "<p>"+iterator.email+"</p>";
               resp += "<p>"+iterator.body+"</p>";
        }
        divComments.innerHTML = resp;
    })
    
}