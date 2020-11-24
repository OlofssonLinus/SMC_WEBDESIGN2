let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let categoryUpdate = function (){
    let potatoeSubcats = ["Yukon Gold", "Ratte"];
    let tomatoeSubcats = ["Cherry", "Roma"];
    let onionSubcats = ["White", "Green"];

    subSelect.innerHTML = "";


    if(catSelect.value === "potatoes"){
        console.log("potatoes");
        potatoeSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if (catSelect.value === "tomatoes"){
        console.log("tomatoes");
        tomatoeSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if (catSelect.value === "onions"){
        console.log("onion");
        onionSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }


}

catSelect.addEventListener("change", categoryUpdate);


let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");



let images = [
    "assets/potato1.jpg",
    "assets/potato2.jpg",
    "assets/potato3.jpg"
]


let imgChange = function(){
    if(carouselIMG.alt === "potato1") {
        carouselIMG.src = images [1];
        carouselIMG.alt = "potato2";
    }
    else if(carouselIMG.alt === "potato2") {
        carouselIMG.src = images [2];
        carouselIMG.alt = "potato3";
    }
    else if(carouselIMG.alt === "potato3") {
        carouselIMG.src = images [0];
        carouselIMG.alt = "potato1";
    }
    
}

window.addEventListener("load", function(){
    setInterval(imgChange, 3000);
})

