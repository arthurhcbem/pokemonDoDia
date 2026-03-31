// A função que você trouxe para detectar tela de toque
function deviceHasTouchscreen() {
  return window.matchMedia('(pointer: coarse)').matches;
}

// Executa a verificação assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
  const spanAcao = document.getElementById('acao-usuario');
  
  // Se o dispositivo tiver tela sensível ao toque (pointer: coarse)
  if (deviceHasTouchscreen()) {
    spanAcao.innerText = "Toque";
  }
  // Se não for touch, ele mantém o "Clique" que já está no HTML padrão.
});

async function getPokemon() {
    const idAleatorio = Math.floor(Math.random() * 386) + 1;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`);
    let data = await response.json();
    let tipo1 = data.types[0].type.name;
 let tipo2 = "";
    if (data.types.length > 1) {
        tipo2 = " e " + data.types[1].type.name;
    }
    console.log("Dados brutos:");
    console.log(data);

    document.getElementById("pokemon").innerHTML = `
    <br>
    <h2> ${data.name} </h2>
   <img src="${data.sprites.front_default}" width="300px" alt="Imagem do Pokémon ${data.name}">
   <p> <strong> Tipo: </strong> ${tipo1} ${tipo2} </p>
    <p> <strong> Status totais: </strong> ${data.base_experience} pontos </p>

    `

 }
