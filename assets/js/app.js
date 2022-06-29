const charactersContainer = document.querySelector(".characters-container");


const fetchData = async () => {
    try {
      let fetchData = await fetch(`https://rickandmortyapi.com/api/character`);
      let data = await fetchData.json();
      
      data.results.length = 20;
      data.results.map(character => new Character(character));
      
        console.log(Character);     
            
     } catch (error) {
      console.log(error);
     }     
};
fetchData();


class Character {
  constructor({ id, name, image, gender, species, status }) {    
    this.id = id;
    this.name = name;
    this.image = image;
    this.gender = gender;
    this.species = species;
    this.status = status;
    this.show();

  }

    show() {
    const card = document.createElement("div");
    card.classList.add("characters-card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("img-container");

    const characterPhoto = document.createElement("img");
    characterPhoto.src = this.image;

    const characterId = document.createElement("p");
    characterId.classList.add("character-id");
    characterId.textContent = `ID: ${this.id}`;

    const cardName = document.createElement("p");
    cardName.classList.add("name");
    cardName.textContent = 'Name: ' + this.name;
      
    const cardGender = document.createElement("p");
    cardGender.classList.add("gender");
    cardGender.textContent = "Gender: "+ this.gender;

    const cardSpecies = document.createElement("h2");
    cardSpecies.classList.add("species");
    cardSpecies.textContent = "Species: " + this.species;

    const cardStatus = document.createElement("p");
    cardGender.classList.add("status");
    cardGender.textContent = "Status: " + this.status;


    charactersContainer.appendChild(card);

    cardImage.appendChild(characterPhoto);
    card.appendChild(cardImage);
    card.appendChild(characterId);
    card.appendChild(cardName);
    card.appendChild(cardGender);    
    card.appendChild(cardSpecies);
    card.appendChild(cardStatus);
    
    }
}




