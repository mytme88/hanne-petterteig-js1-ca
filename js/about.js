window.addEventListener("load", async function() {
  await timeout(4000);

  const mainTag = document.querySelector("main");

  const heading = mainTag.querySelector("h1");
  heading.innerText = replaceText(heading.innerText);

  const aboutParagraphs = mainTag.querySelectorAll(".about p");
  aboutParagraphs.forEach(paragraph => {
    paragraph.innerText = replaceText(paragraph.innerText);
  });
});

function replaceText(text) {
  return text.replace(/the/g, "replaced").replace(/The/g, "Replaced");
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
