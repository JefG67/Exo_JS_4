// On récupère l'élément #board
const board = document.querySelector("#board");

// On crée une box avec la class "carree"
const box = document.createElement("div")
box.classList.add("box")



const icones = ["fa-facebook", "fa-twitter", "fa-instagram"]; //creation d'un tableau ou je stock mes icones
const couleurs = ["#3b5998", "#1D9BF0", "#E1306C"]; //creation d'un tableau ou je stock mes couleurs
const noms = ["Facebook", "Twitter", "Instagram"]


for (let i = 0; i <= 2; i++) {
    const newBox = box.cloneNode(); // Clone des divs
    newBox.style.backgroundColor = couleurs[i]
    const newIcone = document.createElement("i")
    newIcone.classList.add("fa-brands")
    newIcone.classList.add(icones[i])
    newBox.appendChild(newIcone)
    board.appendChild(newBox)
}
console.log(noms)

// ajouter un event sur chaque click d'une box
let boxClick = document.querySelectorAll(".box")
boxClick.forEach(function (box) {
    box.addEventListener("click", function () {
        box.classList.toggle("click")
        
        const color = box.style.backgroundColor; // creation d'une variable pour stocker la couleur de la boite cliqué
        board.style.backgroundColor = color; //j'applique ma couleur stocker dans ma variable sur mon element board
        
        //insertion du text
        
        // const text = document.createElement("span")
        // text.textContent = noms[i];
        // text.style.fontsize = "12px"
        // box.appendChild(text);
        // console.log(noms)

        //creation de la variable qui selectionne mon tableau icone
        const icon = box.querySelector("i");
        if (box.classList.contains("click")){
            icon.style.transform = "rotate(360deg)"  
        } else {
            icon.style.transform = "rotate(0deg)"
            icon.style.transition = "2s"
        }

    })
}
)



