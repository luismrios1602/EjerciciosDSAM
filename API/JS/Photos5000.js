btnGenerar = document.getElementById("btnGenerar");
divImagen = document.getElementById("divImagen");

btnGenerar = addEventListener("click", Generar);

function Generar() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        resp = "";
        for (const iterator of datos) {
                resp += "<img src='"+iterator.url+"'>";
        }
        divImagen.innerHTML = resp;
    })
    
}