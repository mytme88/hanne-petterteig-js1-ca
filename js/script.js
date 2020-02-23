const url = "https://rickandmortyapi.com/api/character/";
const resultsDiv = document.querySelector("#results");
const loader = document.querySelector("#loader");

loader.classList.remove("hidden");

fetch(url)
  .then(response => response.json())
  .then(createCharacterList)
  .catch(() => {
    window.location.href = "error.html";
  });

function createCharacterList(jsonData) {
  loader.classList.add("hidden");

  const { results } = jsonData;
  let resultHTML = "";

  results.forEach(character => {
    resultHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
      <img
        class="image"
        src="${character.image}"
        alt="${character.name}"
      />
      <div class="details">
        <h4 class="name">${character.name}</h4>
        <p>Type: ${character.type || "Unknown"}</p>
        <p>Episode count: ${character.episode.length}</p>
        <a class="btn btn-primary" 
        href="details.html?id=${character.id}">Details</a>
      </div>
    </div>
  </div>
    `;
  });

  resultsDiv.innerHTML = resultHTML;
}
