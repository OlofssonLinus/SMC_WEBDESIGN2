let toggleIMG = document.getElementById("toggleIMG");
let imageBTN = document.getElementById("Toggle");


let imageToggle = function(){
    
    if(toggleIMG.alt === "menuexpanded"){
        //do stuff
        toggleIMG.src = "assets/menuclosed.png";
        toggleIMG.alt = "menuclosed";
    }

    else {
        //do other stuff
        toggleIMG.src = "assets/menuexpanded.png";
        toggleIMG.alt = "menuexpanded";
    }

}

imageBTN.addEventListener("click", imageToggle);

// Extracted from w3schools
// https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp

function myFunction(imgs) {
  
    var expandImg = document.getElementById("expandedImg");
   
    var imgText = document.getElementById("imgtext");
    
    expandImg.src = imgs.src;
  
    imgText.innerHTML = imgs.alt;
   
    expandImg.parentElement.style.display = "block";
  }