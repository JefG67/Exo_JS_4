// On récupère l'élément #board
const board = document.querySelector("#board");

// On crée une box avec la class "carree"
const box = document.createElement("div")
box.classList.add("box")



const icones = ["fa-facebook", "fa-twitter", "fa-instagram"];
const couleurs = ["#3b5998", "#1D9BF0", "#E1306C"];

for (let i = 0; i <= 2; i++) {
   const newBox = box.cloneNode(); // Clone des divs
   newBox.style.backgroundColor = couleurs[i]
   const newIcone = document.createElement("i")
   newIcone.classList.add("fa-brands")
   newIcone.classList.add(icones[i])
   newBox.appendChild(newIcone)
   board.appendChild(newBox)
}



let boxClick = document.querySelectorAll(".box")
boxClick.forEach(function(box){
    box.addEventListener("click",function(){
    box.classList.toggle("click")

    if (box.classList.contains("clicked")){
        box.style.transform = "scale(1), rotate(360deg)"
        
    }
        

    }
    
)
}
)
