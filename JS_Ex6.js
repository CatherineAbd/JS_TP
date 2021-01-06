document.getElementById("submit").addEventListener("click",function (event) {
    event.preventDefault();
    let txt_firstnumber = document.getElementById("firstNumber").value;
    let txt_secondnumber = document.getElementById("secondNumber").value;
    let firstnumber = parseInt (txt_firstnumber, 10);
    let secondnumber = parseInt (txt_secondnumber, 10);

    if (isNaN(firstnumber))
    {
        window.alert("Le premier nombre saisi n'est pas un nombre");
    } else if (isNaN(secondnumber))
    {
        window.alert("Le second nombre saisi n'est pas un nombre");
    } else
    {
        let rem = firstnumber % secondnumber;
//        window.alert("Le reste de la division du 1er nombre par le 2nd = " + rem);
        document.getElementById("result").innerHTML = "Le résultat est = "+ rem;
    }    
});



// function rest (e)
// {
//     //blocage du rechargt de la pg
//     e.preventDefault();
//     let txt_firstnumber = document.getElementById("firstNumber").value;
//     let txt_secondnumber = document.getElementById("secondNumber").value;
//     let firstnumber = parseInt (txt_firstnumber, 10);
//     let secondnumber = parseInt (txt_secondnumber, 10);

//     if (isNaN(firstnumber))
//     {
//         window.alert("Le premier nombre saisi n'est pas un nombre");
//     } else if (isNaN(secondnumber))
//     {
//         window.alert("Le second nombre saisi n'est pas un nombre");
//     } else
//     {
//         let rem = firstnumber % secondnumber;
//         window.alert("Le reste de la division du 1er nombre par le 2nd = " + rem);
//         document.getElementById("result").innerHTML = "Le résultat est = "+ rem;
//     }
// }