// nomeie 3 propriedades ou métodos de strings
var nome = "Andre";
nome.toLowerCase;
nome.toString;
nome.length;

// nomeie 5 propriedades ou métodos de elementos do DOM
document.addEventListener;
document.querySelector;
document.contentType;

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
