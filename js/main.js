// On récupère l'élément #board
const board = document.querySelector("#board");

// On crée une box avec la class "carree"
const box = document.createElement("div")
box.classList.add("box")



const icones = ["fa-facebook", "fa-twitter", "fa-instagram"]; //creation d'un tableau ou je stock mes icones
const couleurs = ["#3b5998", "#1D9BF0", "#E1306C"]; //creation d'un tableau ou je stock mes couleurs


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
boxClick.forEach(function (box) {
    box.addEventListener("click", function () {
        box.classList.toggle("click")
        
        const color = box.style.backgroundColor; // creation d'une variable pour stocker la couleur de la boite cliqué
        board.style.backgroundColor = color; //j'applique ma couleur stocker dans ma variable sur mon element board
        // const noms = ["Facebook", "Twitter", "Instagram"];
        // box.textContent = noms[i];
        
        const icon = box.querySelector("i");
        if (box.classList.contains("click")){
            icon.style.transform = "rotate(360deg)";   //petit soucis un tour de trop 
        } else {
            icon.style.transform = "rotate(-360deg)";
            icon.style.transition = "2s";
        }

    })
}
)
