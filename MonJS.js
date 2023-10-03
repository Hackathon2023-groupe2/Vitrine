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

textarea.addEventListener('mousedown', function() {
    updateCursorPosition();
});

textarea.addEventListener('mousemove', function() {
    updateCursorPosition();
});

function updateCursorPosition() {
    var cursorPosition = textarea.selectionStart;
    var text = textarea.value;
    var lines = text.split('\n');
    var lineNumber = text.substr(0, cursorPosition).split('\n').length;
    console.log('Numéro de ligne du curseur : ' + lineNumber);
}


textarea.addEventListener("input", (e) => {
  countArea.innerHTML = "";

  for (var i = 0; i < compterLignes(); i++) {
    let p = document.createElement("div");
    p.innerHTML = i + 1;
    p.classList.add('flexBox')
    countArea.appendChild(p);
  }
  updateCursorPosition();
});

textarea.addEventListener("scroll", () => {
  countArea.scrollTop = textarea.scrollTop;
  console.log("Scroll", countArea.scrollTop, textarea.scrollTop);
});

countArea.addEventListener("scroll", () => {
  textarea.scrollTop = countArea.scrollTop;
  console.log("Scroll", countArea.scrollTop, textarea.scrollTop);
});
