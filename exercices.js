// Quel est le titre de la boutique
const h1 = document.querySelector("h1");
console.log(h1.textContent);

// Des informations manquent !
const descriptionBoutique = document.querySelector("#description_boutique");

const newText = document.createElement("p");
newText.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";

descriptionBoutique.appendChild(newText);

// Roger, enfoiré !
const blague = document.querySelector("#blague_de_roger_le_sorcier");
blague.remove();

// Archibald n'est pas là, appelons le !
const callArchi = document.querySelector("#call_archibald");
callArchi.addEventListener("click", () => {
  return alert("🧙‍♂️ J'arrive, j'arrive Aventurier !");
});

// Faisons un peu de magie 🪄
const boites = document.querySelectorAll(".boite");
const btn1 = document.querySelector("#btn_change_red");
const btn2 = document.querySelector("#btn_change_blue");
const btn3 = document.querySelector("#btn_change_green");

btn1.addEventListener("click", () => {
  boites[0].style.background = "red";
});
btn2.addEventListener("click", () => {
  boites[0].style.background = "blue";
  boites[1].style.background = "blue";
});
btn3.addEventListener("click", () => {
  boites.forEach((boite) => (boite.style.background = "green"));
});
