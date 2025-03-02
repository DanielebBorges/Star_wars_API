document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("character-container");
    try{
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        console.log(data);
        data.results.forEach(character => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `               
                <p>${character.name}</p>
                <p>Altura: ${character.height}</p>
                <p>Peso: ${character.mass}</p>

                <button class="detalhes-btn">Detalhes</button>
                <div class="detalhes" style="display: none;">    
                    <p>Data de nascimento: ${character.birth_year}</p>
                    <p>Cor dos Olhos: ${character.eye_color}</p>
                    <p>Gênero: ${character.gender}</p>
                    <p>Cor de cabelo: ${character.hair_color}</p>
                    <p>Cor da pele: ${character.skin_color}</p>
                </div>     
            `;
            container.appendChild(card);

            const button = card.querySelector(".detalhes-btn");
            const detalhes = card.querySelector(".detalhes");
            button.addEventListener("click", () => {
                detalhes.style.display = detalhes.style.display === "none" ? "block" : "none";
            });
        });

    } catch (error){
         console.error("Erro ao carregar", error);
    }

});
