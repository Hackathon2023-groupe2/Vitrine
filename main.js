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

textarea.addEventListener("input", (e) => {
  countArea.innerHTML = "";

  for (var i = 0; i < compterLignes(); i++) {
    let p = document.createElement("div");
    p.innerHTML = i + 1;
    p.classList.add('flexBox')
    countArea.appendChild(p);
  }
});

textarea.addEventListener("scroll", () => {
  countArea.scrollTop = textarea.scrollTop;
  console.log("Scroll", countArea.scrollTop, textarea.scrollTop);
});

countArea.addEventListener("scroll", () => {
  textarea.scrollTop = countArea.scrollTop;
  console.log("Scroll", countArea.scrollTop, textarea.scrollTop);
});
