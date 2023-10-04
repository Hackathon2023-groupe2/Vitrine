/**
 * Line count
 * @returns 
 */
function compterLignes() {
  const textarea = document.getElementById('textareaId');
  if (!textarea) {
    console.error("Textarea non trouvé");
    return 0;
  }

  const contenu = textarea.value;
  const lignes = contenu.split("\n");
  return lignes.length;
}

const textarea = document.getElementById('textareaId');
const countArea = document.getElementById('countArea');

// Event for each input in the textarea
textarea.addEventListener("input", (e) => {
  countArea.innerHTML = "";

  for (var i = 0; i < compterLignes(); i++) {
    let p = document.createElement("div");
    p.innerHTML = i + 1;
    p.classList.add('flexBox')
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
  var maValeur = Valeur
  var textarea = document.getElementById("textareaId");
  textarea.value += maValeur;
}
function SupCaractere() {
 // Récupérer le contenu de la zone de texte
 var textArea = document.getElementById("textareaId");
 var texte = textArea.value;

 // Vérifier si la zone de texte n'est pas vide
 if (texte.length > 0) {
     // Supprimer le dernier caractère
     texte = texte.substring(0, texte.length - 1);

     // Mettre à jour le contenu de la zone de texte
     textArea.value = texte;
 }
}
