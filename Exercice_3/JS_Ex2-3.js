// ma méthode
// document.getElementById("lastname").onkeypress = function (event){
//     window.alert("vous avez appuyé sur " + event.key);
//     window.alert("la valeur du champ :" + document.getElementById("lastname").value);
// };



// méthode Raphaël
let inputLastname = document.getElementById("lastname");

function showMsg(message){
    window.alert(message);
    // Marche pas !
    // dialog.window(message);
}

inputLastname.addEventListener("keydown", (e) => {
    console.log(e);
    showMsg("Vous avez appuyé sur la touche" + e.key);
});



// méthode Anousone
// let inputLastname = document.getElementById("lastname");

// function showMsg(message){
//     window.alert(message);
// }

// inputLastname.addEventListener("keyup", function(){
//     showMsg(inputLastname.value);
// });



// méthode avec modif html, appel sur onkeyup
// function showMsg (){
//     window.alert(document.getElementById("lastname").value);
// }