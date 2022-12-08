const newCharacterPage = (event) => {
    event.preventDefault();
    document.location.replace('/create')
}

const viewCharacters = (event) => {
    event.preventDefault();
    document.location.replace('/characters')
}

document
    .querySelector('.create-page')
    .addEventListener('button', newCharacterPage);

  document
    .querySelector('.view-chars')
    .addEventListener('button', viewCharacters);  