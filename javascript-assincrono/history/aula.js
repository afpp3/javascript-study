const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();

  const url = event.target.href;
  fetchPage(url);
  window.history.pushState(null, null, url);
}

async function fetchPage(url) {
  document.querySelector(".content").innerHTML = "Carregando";
  const pageResponse = await fetch(url);
  const pageResponseText = await pageResponse.text();
  replaceContent(pageResponseText);
}

function replaceContent(newText) {
  const newHtml = document.createElement("div");

  newHtml.innerHTML = newText;

  const oldContent = document.querySelector(".content");
  const newContent = newHtml.querySelector(".content");

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
