function compterLignes() {
  const textarea = document.getElementById('textareaId');
  if (!textarea) {
    console.error("Textarea non trouvé");
    return 0;
  }
  const contenu = textarea.value;
  const lignes = contenu.split("\n");
  console.log(lignes.length);
  return lignes.length;
}



const textarea = document.getElementById('textareaId');
textarea.addEventListener("input", e=>{
    const test = document.getElementById('print')
    test.innerHTML= ""
    for (var i = 0; i < compterLignes(); i++) {
       let p = document.createElement("div")
       p.innerHTML=i 
       test.appendChild(p)

      }
      
})
