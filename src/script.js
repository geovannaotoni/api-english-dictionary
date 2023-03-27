const ul = document.getElementById('result-list');
const partOfSpeech = document.getElementById('part-of-speech');
const pWord = document.getElementById('word');
const inputWord = document.getElementById('input-word');
const button = document.getElementById('search-btn');

const apiURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

button.addEventListener('click', async () => {
  const response = await fetch(`${apiURL}${inputWord.value}`);
  const data = await response.json();
  pWord.innerHTML = `1. Searched Word: ${data[0].word};`
  partOfSpeech.innerHTML = `2. This word is a ${data[0].meanings[0].partOfSpeech};`
  const definitions = data[0].meanings[0].definitions;
  ul.innerHTML = '3. Definitions:'
  for (let index = 0; index < definitions.length; index += 1) {
    const li = document.createElement('li');
    li.innerHTML = definitions[index].definition;
    ul.appendChild(li);
  }
});




