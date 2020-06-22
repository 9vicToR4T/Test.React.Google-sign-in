window.addEventListener("DOMContentLoaded", () => {
  function req() {
    getResources("http://www.omdbapi.com/?apikey=314d2c41&s=batman")
      // .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    this.remove(); //stergem butonul dupa click
  }

  async function getResources(url) {
    //pentru a scapa de codul care se repeta
    let res = await fetch(`${url}`); //folosim async await pentru a astepta datele de pe server

    if (!res.ok) {
      // in fetch avem proprietatea ok, care ne spune rezultatul cererii
      throw new Error(`Could not fetch ${url}, 
            status: ${res.status}`); //e bine sa cerem status deoarece fetch default nu arata care e problema
    }

    return await res.json(); //in loc de  .then( data => data.json())
  }

  document.querySelector("button").addEventListener("click", req);

function createCards(response) {
  response.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
                    <div class="name"> ${item}</div>
                   `
    document.querySelector(".app").appendChild(card);
  });
}



});
