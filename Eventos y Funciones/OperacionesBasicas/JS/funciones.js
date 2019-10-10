btnSumar   = document.getElementById("btnSumar");
btnSumar.addEventListener("click",Sumar);

btnRestar   = document.getElementById("btnRestar");
btnRestar.addEventListener("click",Restar);

btnMulti   = document.getElementById("btnMulti");
btnMulti.addEventListener("click",Multi);

btnDivi   = document.getElementById("btnDivi");
btnDivi.addEventListener("click",Divi);

function Sumar(){
    num1 = document.getElementById("txt1-sum");
    num2 = document.getElementById("txt2-sum");
    var sum;
    sum = parseInt(num1.value) + parseInt(num2.value);
    res = document.createElement("h3");
    formSuma = document.getElementById("formSuma");
    formSuma.appendChild(res);
    text = document.createTextNode(sum);
    res.appendChild(text);
}

function Restar(){
    num1 = document.getElementById("txt1-res");
    num2 = document.getElementById("txt2-res");
    var resta;
    resta = parseInt(num1.value) - parseInt(num2.value);
    res = document.createElement("h3");
    formResta = document.getElementById("formResta");
    formResta.appendChild(res);
    text = document.createTextNode(resta);
    res.appendChild(text);
}

function Multi(){
    num1 = document.getElementById("txt1-mult");
    num2 = document.getElementById("txt2-mult");
    var multi;
    multi = parseInt(num1.value) * parseInt(num2.value);
    res = document.createElement("h3");
    formMulti = document.getElementById("formMulti");
    formMulti.appendChild(res);
    text = document.createTextNode(multi);
    res.appendChild(text);
}

function Divi(){
    num1 = document.getElementById("txt1-divi");
    num2 = document.getElementById("txt2-divi");
    var divi;
    divi = parseInt(num1.value) / parseInt(num2.value);
    res = document.createElement("h3");
    formDivi = document.getElementById("formDivi");
    formDivi.appendChild(res);
    text = document.createTextNode(divi);
    res.appendChild(text);
}