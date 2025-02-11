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
