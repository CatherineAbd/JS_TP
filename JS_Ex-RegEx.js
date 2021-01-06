let enableBtnRegistration = false;
let validLastname = false;
let validFirstname = false;
let validEmail = false;
let validPassword = false;

document.getElementById("lastname").addEventListener("blur", function () {
    var regExLastname = /^[a-zA-Z-]+$/;

    if (!(document.getElementById("lastname").value.match(regExLastname)) && document.getElementById("lastname").value !=""){
        document.getElementById("msgErrLastname").innerHTML = "Le nom ne doit contenir que des lettres ou '-'";
        console.log("border :" + document.getElementById("lastname").style.border);
        document.getElementById("lastname").style.border = "2px solid red";
        validLastname = false;
    } else if (document.getElementById("lastname").value !=""){
        document.getElementById("msgErrLastname").innerHTML = "";
        document.getElementById("lastname").style.border = "";
        validLastname = true;
    } else{
        document.getElementById("msgErrLastname").innerHTML = "";
        document.getElementById("lastname").style.border = "";
    }
});

document.getElementById("firstname").addEventListener("blur", function () {
    var regExFirstname = /^[a-zA-Z-]+$/;

    if (!(document.getElementById("firstname").value.match(regExFirstname)) && document.getElementById("firstname").value !=""){
        document.getElementById("msgErrFirstname").innerHTML = "Le prénom ne doit contenir que des lettres ou '-'";
        validFirstname = false;
    } else {
        document.getElementById("msgErrFirstname").innerHTML = "";
    }
});

document.getElementById("email").addEventListener("blur", function () {
    // var regExEmail = /^[a-zA-Z-]+@+^[a-z]+\.+^[a-z](1,3)$/;
    var regExEmail = /^[a-zA-Z-]+@+[a-z]+\.+[a-z](1,3)$/;

    if (!(document.getElementById("email").value.match(regExEmail)) && document.getElementById("email").value !=""){
        document.getElementById("msgErrEmail").innerHTML = "L'adresse e-mail doit être de la forme xxxx@xxxx.xx'";
        enableBtnRegistration = false;
    } else {
        document.getElementById("msgErrEmail").innerHTML = "";
    }
});

document.getElementById("passwordConf").addEventListener("blur", function () {
    var valPassword = document.getElementById("password").value;
    var valPasswordConf = document.getElementById("passwordConf").value;

    if ((valPassword != valPasswordConf) && valPasswordConf !="" && valPassword){
        document.getElementById("msgErrPassword").innerHTML = "Les mots de passe doivent être identiques"
        enableBtnRegistration = false;
    } else {
        document.getElementById("msgErrPassword").innerHTML = "";
    }
    console.log("changement de l'état de la cb");
});
document.getElementById("CGU").addEventListener("change", function () {
    if (validLastname){
        document.getElementById("btnRegistration").disabled = false;
    }
    console.log("changement de l'état de la cb");
});



// var str = "Visit W3Schools";
// var patt = /w3schools/i;
// var result = str.match(patt);
// document.getElementById("demo").innerHTML = result;

/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/