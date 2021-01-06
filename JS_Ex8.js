document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    let Age = parseInt(document.getElementById("age").value);
    if (isNaN(Age)){
        window.alert("l'âge saisi doit être un nombre");
    } else if(Age<18 && Age >=0){
        // window.alert("Vous êtes mineur (e)");
        document.getElementById("affichAge").innerHTML = "Mineur (e)";
    } else if(Age >=18 && Age <=130){
        // window.alert("Vous êtes majeur (e)");
        document.getElementById("affichAge").innerHTML = "MAJEUR (E)";
    } else{
        // window.alert("Vous n'existez pas ou plus !;");
        document.getElementById("affichAge").innerHTML = "VOUS N'EXISTEZ PAS OU PLUS !";
    }
});

// function defineMajority()
// {
//     let Age = parseInt(document.getElementById("age").value);
//     if (isNaN(Age)){
//         window.alert("l'âge saisi doit être un nombre");
//     } else if(Age<18 && Age >=0){
//         window.alert("Vous êtes mineur (e)");
//     } else if(Age >=18 && Age <=130){
//         window.alert("Vous êtes majeur (e)");
//     } else{
//         window.alert("Vous n'existez pas ou plus !;");
//     }

// }