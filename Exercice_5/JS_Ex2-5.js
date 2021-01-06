

function chgImage(numImage, idImage, event){
    newImage = "images/image" + numImage;
    if (event.type == "mouseout"){
        newImage += ".jpg"
    } else if (event.type == "mouseover"){
        newImage += "_2.jpg"
    }
    document.getElementById(idImage).src = newImage;
}

//méthode anousone
function switchImg(img) {
    console.log(document.getElementById(img).src = "images/"+img+"_2.jpg");
    document.getElementById(img).src = "images/"+img+"_2.jpg";
}

function switchImg2(element) {
    element.src="images/"+element.id+".jpg";
}




// document.getElementById("image").addEventListener("mouseout", function(){
//     document.getElementByClass("image1").src="images/image1.jpg"
// });


// document.getElementById("image1").addEventListener("mouseover", function(){
//     document.getElementById("image1").src="images/image1_2.jpg"
// });

// document.getElementById("image1").addEventListener("mouseout", function(){
//     document.getElementById("image1").src="images/image1.jpg"
// });

// document.getElementById("image2").addEventListener("mouseover", function(){
//     document.getElementById("image2").src="images/image2_2.jpg"
// });

// document.getElementById("image2").addEventListener("mouseout", function(){
//     document.getElementById("image2").src="images/image2.jpg"
// });

// document.getElementById("image3").addEventListener("mouseover", function(){
//     document.getElementById("image3").src="images/image3_2.jpg"
// });

// document.getElementById("image3").addEventListener("mouseout", function(){
//     document.getElementById("image3").src="images/image3.jpg"
// });

// document.getElementById("image4").addEventListener("mouseover", function(){
//     document.getElementById("image4").src="images/image4_2.jpg"
// });

// document.getElementById("image4").addEventListener("mouseout", function(){
//     document.getElementById("image4").src="images/image4.jpg"
// });

// document.getElementById("image5").addEventListener("mouseover", function(){
//     document.getElementById("image5").src="images/image5_2.jpg"
// });

// document.getElementById("image5").addEventListener("mouseout", function(){
//     document.getElementById("image5").src="images/image5.jpg"
// });