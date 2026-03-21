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
