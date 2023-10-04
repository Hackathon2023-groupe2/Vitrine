/**
 * Line count
 * @returns
 */
function compterLignes() {
  const textarea = document.getElementById("textareaId");
  if (!textarea) {
    console.error("Textarea non trouvé");
    return 0;
  }

  const contenu = textarea.value;
  const lignes = contenu.split("\n");
  return lignes.length;
}

const textarea = document.getElementById("textareaId");
const countArea = document.getElementById("countArea");

// Event for each input in the textarea
textarea.addEventListener("input", (e) => {
  countArea.innerHTML = "";

  for (var i = 0; i < compterLignes(); i++) {
    let p = document.createElement("div");
    p.innerHTML = i + 1;
    p.classList.add("flexBox");
    countArea.appendChild(p);
  }
});

// Sync count line & textarea
textarea.addEventListener("scroll", () => {
  countArea.scrollTop = textarea.scrollTop;
  console.log("Scroll", countArea.scrollTop, textarea.scrollTop);
});

countArea.addEventListener("scroll", () => {
  textarea.scrollTop = countArea.scrollTop;
  console.log("Scroll", countArea.scrollTop, textarea.scrollTop);
});

function ajouterCaractere(Valeur) {
  var maValeur = Valeur;
  var textarea = document.getElementById("textareaId");
  textarea.value += maValeur;
}
function SupCaractere() {
  var textArea = document.getElementById("textareaId");
  var texte = textArea.value;

  if (texte.length > 0) {
    texte = texte.substring(0, texte.length - 1);

    textArea.value = texte;
  }
}

function limitCharacters(textarea) {
  const lines = textarea.value.split("\n");

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length > 20) {
      lines[i] = lines[i].substring(0, 20);
    }
  }
  
  textarea.value = lines.join("\n");
}
