// une méthode qui marche
document.getElementById("btnRAZ").addEventListener("click", function(){
    // Remet les valeurs initiales
    document.getElementById("formIdentity").reset();
});

// document.getElementById("btnClear").addEventListener("click", function(){
//     document.getElementById("lastname").value="";
//     document.getElementById("firstname").value="";
//     document.getElementById("city").value="";
// });

// une autre méthode qui marche, avec l'écouteur sur btnRAZ de la 1ère méthode

// document.getElementById("btnClear").addEventListener("click", function() {
//     var i;
//     var count = document.forms.length;
//     var eltForm;
    
//     if (count != 0){
//         eltForm = document.forms[0];
//         count = document.forms[0].length;
//         for (i=0 ; i< count; i++){
//             eltForm.elements[i].value="";
//         }
//     }


// });

// une 3ème méthode à mettre au point
document.getElementById("btnClear").addEventListener("click", function(){
    console.log(document.getElementsByTagName("input")[0].name);
    console.log(document.getElementsByTagName("input").length);
});
//document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
