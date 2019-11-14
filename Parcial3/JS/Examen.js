txt = document.getElementById("txtCodigo");

boton = document.getElementById("btnBuscar");
boton.addEventListener("click",Buscar);

boton2 = document.getElementById("btnMostrarTodos");
boton2.addEventListener("click",MostrarTodos);

botonPA = document.getElementById("btnPA");
botonPA.addEventListener("click",PrincipioActivo);

div = document.getElementById("divMed");

function Buscar() {

    fetch("http://datos.gov.co/resource/e8rk-p7dn.json")
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        var resp="";
        for ( medicamento of datos) {
            ul = document.createElement("ul");

            if (medicamento.codigoatc == txt.value){

            resp += "<li>Id: "+medicamento.id+"</li>";
            resp += "<li>Codigo atc: "+medicamento.codigoatc+"</li>";
            resp += "<li>Principio activo: "+medicamento.principioactivo+"</li>";
            resp += "<li>Ranking busqueda: "+medicamento.rankingbusqueda+"</li>";
            resp += "<li>Forma farmaceútica: "+medicamento.formafarmaceutica+"</li>";
            resp += "<li>Item: "+medicamento.item+"</li>";
            resp += "<li>Principio activo min: "+medicamento.principioactivo_min+"</li>";
            resp += "<li>Forma farmaceutica min: "+medicamento.formafarmaceutica_min+"</li>";
            resp += "<hr>";
            
            } else {
                console.log("Pailas");
            }
            ul.innerHTML = resp;
            
        }
        div.appendChild(ul);
    });
}

function MostrarTodos() {

    fetch("http://datos.gov.co/resource/e8rk-p7dn.json")
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        var resp="";
        for ( medicamento of datos) {
            ul = document.createElement("ul");

            resp += "<li>Id: "+medicamento.id+"</li>";
            resp += "<li>Codigo atc: "+medicamento.codigoatc+"</li>";
            resp += "<li>Principio activo: "+medicamento.principioactivo+"</li>";
            resp += "<li>Ranking busqueda: "+medicamento.rankingbusqueda+"</li>";
            resp += "<li>Forma farmaceútica: "+medicamento.formafarmaceutica+"</li>";
            resp += "<li>Item: "+medicamento.item+"</li>";
            resp += "<li>Principio activo min: "+medicamento.principioactivo_min+"</li>";
            resp += "<li>Forma farmaceutica min"+medicamento.formafarmaceutica_min+"</li>";
            resp += "<hr>";
            ul.innerHTML = resp;
            
        }
        div.appendChild(ul);
    });
}

function PrincipioActivo() {
    let mayor=0;
    let idMedicamento; //Para guardar el ID que vamos a buscar

    fetch("http://datos.gov.co/resource/e8rk-p7dn.json")
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        var resp="";
        for ( medicamento of datos) {
            ul = document.createElement("ul");

            if (parseInt(medicamento.principioactivo.length) > mayor){
                mayor = medicamento.principioactivo.length;
               idMedicamento = medicamento.id;
                console.log("Esse é o maior");
            } else {
                console.log("Nao dá");
            }
            ul.innerHTML = resp;
            
        }
        for (const medicamento of datos) {
            ul2 = document.createElement("ul");
            if (medicamento.id == idMedicamento) {

                resp += "<li>Id: "+medicamento.id+"</li>";
                resp += "<li>Codigo atc: "+medicamento.codigoatc+"</li>";
                resp += "<li>Principio activo: "+medicamento.principioactivo+"</li>";
                resp += "<li>Ranking busqueda: "+medicamento.rankingbusqueda+"</li>";
                resp += "<li>Forma farmaceútica: "+medicamento.formafarmaceutica+"</li>";
                resp += "<li>Item: "+medicamento.item+"</li>";
                resp += "<li>Principio activo min: "+medicamento.principioactivo_min+"</li>";
                resp += "<li>Forma farmaceutica min: "+medicamento.formafarmaceutica_min+"</li>";
                resp += "<hr>";
            } else {
                console.log("erro");
            }
            ul2.innerHTML = resp;
        }
        div.appendChild(ul2);
    });
}