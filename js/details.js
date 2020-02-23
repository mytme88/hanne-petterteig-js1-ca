const id = new URLSearchParams(document.location.search).get("id");

if (!id) {
  window.location.href = "index.html";
} else {
  const loader = document.querySelector("#loader");
  const detailContainer = document.querySelector(".detail-container");

  loader.classList.remove("hidden");

  const url = `https://rickandmortyapi.com/api/character/${id}`;
  fetch(url)
    .then(response => response.json())
    .then(populateData)
    .catch(() => {
      window.location.href = "error.html";
    });

  async function populateData(dataJSON) {
    loader.classList.add("hidden");
    detailContainer.classList.remove("invisible");

    document.title = dataJSON.name;

    const image = document.querySelector(".details-image");
    image.setAttribute("src", dataJSON.image);
    image.setAttribute("alt", dataJSON.name);

    const detailDetails = document.querySelector(".detail-details"); // top name

    detailDetails.querySelector("h1").innerText = dataJSON.name;
    detailDetails.querySelector("#status").innerText = dataJSON.status;
    detailDetails.querySelector("#species").innerText = dataJSON.species;
    detailDetails.querySelector("#origin").innerText = dataJSON.origin.name;
    detailDetails.querySelector("#location").innerText = dataJSON.location.name;
  }
}
