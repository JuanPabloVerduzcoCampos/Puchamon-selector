const pokemonImages = {
    Pikachu: "src/pikachu.png",
    Mewtwo: "src/mewtwo.png",
    Charmander: "src/charizard.png"
};


const directions = ["Izquierda", "Derecha"];

function generarOpciones() {
    const pokemon = Object.keys(pokemonImages);
    const opcionPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
    const direccion = directions[Math.floor(Math.random() * directions.length)];
    return { opcionPokemon, numeroAleatorio, direccion };
}

document.getElementById("startButton").addEventListener("click", () => {
    const imageElement = document.getElementById("pokemonImage");
    const resultContainer = document.querySelector(".result");
    const { opcionPokemon, numeroAleatorio, direccion } = generarOpciones();

    // Inicializar la animación con los tres Pokémon
    let counter = 0;
    resultContainer.style.display = "none";
    imageElement.style.transition = "transform 0.2s ease"; // Asegura que la transición de imagen sea suave
    const pokemonArray = Object.keys(pokemonImages);

    // Animación de selección aleatoria de Pokémon
    const animationInterval = setInterval(() => {
        imageElement.src = pokemonImages[pokemonArray[counter % pokemonArray.length]];
        counter++;
        imageElement.style.transform = `rotate(${counter * 10}deg)`; // Rotación para animar la selección
    }, 100);

    // Finalizar la animación después de 3 segundos y mostrar el resultado
    setTimeout(() => {
        clearInterval(animationInterval);
        imageElement.style.transform = "rotate(0deg)"; // Restaurar la rotación
        imageElement.src = pokemonImages[opcionPokemon];
        document.getElementById("pokemonResult").textContent = `Pokémon seleccionado: ${opcionPokemon}`;
        document.getElementById("numberResult").textContent = `Número aleatorio: ${numeroAleatorio}`;
        document.getElementById("directionResult").textContent = `Dirección: ${direccion}`;
        resultContainer.style.display = "block";
    }, 3000); // Duración de la animación (3 segundos)
});
