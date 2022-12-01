const createNewCharacter = async (event) => {
    event.preventDefault();


};

const newCharacterPage = (event) => {
    event.preventDefault();
}

const viewCharacters = async (event) => {
    event.preventDefault();

}

document
    .querySelector('.create-page')
    .addEventListener('button', newCharacterPage);

  document
    .querySelector('.view-chars')
    .addEventListener('button', viewCharacters);  

  document
    .querySelector('')
    .addEventListener('button', viewCharacters);