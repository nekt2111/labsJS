
function changeCircleColor(id){
    
    
    let circles = document.querySelectorAll(".choice__number")
    circles.forEach(elem => (elem.style.background = "#656565" ))
    circles[id].style.background = "#add136"
    let img =  document.getElementById("change-img")
    console.log(img)
    if(id === 0){
       img.src = "img/glasses.png"
    }
    if(id === 1){
        img.src = "img/sofa.png"
    }
    if(id === 2){
        img.src = "img/wallet.png"
    }

}
