const main = document.getElementsByTagName("main");

// SEGUIR POR AQUÍ
let color = null;

const getAll = () => {
  const rand = Math.floor(Math.random() * 800);
  pokecontainer.innerHTML = "";

  fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const img = data.sprites.other.dream_world.front_default;
      const type = data.types[0].type.name;
      const type2 = data.types[1]?.type.name;
      const hp = data.stats[0].base_stat;
      const ap = data.stats[1].base_stat;
      const def = data.stats[2].base_stat;
      const speed = data.stats[5].base_stat;

      switch (type) {
        case "bug":
          color = "#26de81";
          break;
        case "dragon":
          color = "ffeaa7";
          break;
        case "electric":
          color = "#f8d030";
          break;
        case "fairy":
          color = "#fdb9e9";
          break;
        case "fighting":
          color = "#d56723";
          break;
        case "fire":
          color = "#fd7d24";
          break;
        case "flying":
          color = "#a890f0";
          break;
        case "ghost":
          color = "#7b62a3";
          break;
        case "grass":
          color = "#7bc47f";
          break;
        case "ground":
          color = "#e1c148";
          break;
        case "ice":
          color = "#51c4e7";
          break;
        case "normal":
          color = "#c8c8a8";
          break;
        case "poison":
          color = "#a33ea1";
          break;
        case "psychic":
          color = "#f366b9";
          break;
        case "rock":
          color = "#bcaaa4";
          break;
        case "steel":
          color = "#b5b5c3";
          break;
        case "water":
          color = "#6390f0";
          break;
        default:
          color = "#c8c8a8";
          break;
      }

      const poke = {
        name,
        img,
        type,
        type2,
        hp,
        ap,
        def,
        speed,
      };

      const pokecard = `
      <div class="pokecontainer" id="pokecontainer">
      <div class="pokecard" style="background: radial-gradient(circle at 50% 0%, ${color} 50%, #ffffff 50%);">
          <p class="hp">
            <span>HP</span>
            ${poke.hp}
          </p>
          <img src=${poke.img}
            alt="pokemon" width="200px">
          <h2 class="poke-name">${poke.name}</h2>
          <div class="types">
            <span>${poke.type}</span>
            <span>${type2 ? type2 : "No type 2"}</span>
          </div>
          <div class="stats">
            <div>
              <h3>${poke.ap}</h3>
              <p>Attack</p>
            </div>
            <div>
              <h3>${poke.def}</h3>
              <p>Defense</p>
            </div>
            <div>
              <h3>${poke.speed}</h3>
              <p>Speed</p>
            </div>
          </div>
        </div>
        </div>
        `;

      pokecontainer.innerHTML = pokecard;
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = getOne();

document.getElementById("btn").addEventListener("click", getOne);
