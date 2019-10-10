var vect =  [];

function llenarVector(){
    var next = true;
    var pos=0;
    while(next){
        vect.push(prompt("Ingrese el vector en la posición "+pos+": \nPresione 0 para finalizar"));
       
        if (vect[pos]==0) {
            next = false;
        }
        pos++;
    }
}

function mostrarVector() {
    for (let index = 0; index < vect.length; index++) {
        if (vect[index]==0) {
            break;
        } else {
            alert("Posición "+index+": "+vect[index]);
        }
        
        
    }
}