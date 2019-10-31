btnCargar = document.getElementById("btnCargar");
divResultado = document.getElementById("divResultado");
btnCargar.addEventListener("click", CargarSuperHeroe);

function CargarSuperHeroe(){
    var idSuperHeroe = Math.floor(Math.random()*732)+1;

    fetch("https://superheroapi.com/api.php/277691549855901/"+idSuperHeroe)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        
        resp = "";
        resp += "<p><strong>Super Heroe</strong>: "+data.name +"</p>";
        resp += "<p><img src='"+data.image.url+"' ></p>";

        divResultado.innerHTML = resp;
        console.log(data);
    });


}