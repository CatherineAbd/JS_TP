document.getElementById("submit").addEventListener("click", function (event){
    event.preventDefault();
    let shoeSize = parseInt(document.getElementById("shoeSize").value, 10);
    let yearOfBirth = parseInt(document.getElementById("yearOfBirth").value, 10);
    if (isNaN(shoeSize))
    {
        window.alert("la pointure doit être un nombre");

    } else if (isNaN(yearOfBirth))
    {
        window.alert("l'année de naissance doit être un nombre");
    } else
    {
        let result = shoeSize*2;
        alert("multiplication de pointure * 2: " + result);
        document.getElementById("dbl").innerHTML = "Multiplication de la pointure par 2 :" + result;
        result += 5;
        alert("ajout de 5 au résultat précédent : " + result);
        document.getElementById("add5").innerHTML = "Ajout de 5 au résultat précédent :" + result;
        result *=50;
        alert("multiplier le tout par 50 : " + result);
        document.getElementById("mult50").innerHTML = "Multiplication du tout par 50 :" + result;
        result -= yearOfBirth;
        alert("result - l'année de naissance : " + result);
        document.getElementById("subYear").innerHTML = "Résultat - année de naissance :" + result;
        result += 1771;
        alert("Ajout de 1771 au tout : " + result);
        document.getElementById("add1771").innerHTML = "Résultat + 1771 = l'âge du capitaine :" + result;
    }
});

// function calculate ()
// {
//     let shoeSize = parseInt(document.getElementById("shoeSize").value, 10);
//     let yearOfBirth = parseInt(document.getElementById("yearOfBirth").value, 10);
//     if (isNaN(shoeSize))
//     {
//         window.alert("la pointure doit être un nombre");

//     } else if (isNaN(yearOfBirth))
//     {
//         window.alert("l'année de naissance doit être un nombre");
//     } else
//     {
//         let result = shoeSize*2;
//         alert("multiplication de pointure * 2: " + result);
//         result += 5;
//         alert("ajout de 5 au résultat précédent : " + result);
//         result *=50;
//         alert("multiplier le tout par 50 : " + result);
//         result -= yearOfBirth;
//         alert("result - l'année de naissance : " + result);
//         result += 1766;
//         alert("Ajout de 1766 au tout : " + result);
//     }
// //     Multiplier la pointure par 2
// // Ajouter 5 au résultat
// // Multiplier le tout par 50
// // Soustraire l’année de naissance
// // Ajouter au tout 1766
// }