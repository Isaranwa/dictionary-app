function playSound() {
  sound.play();
}

function getDictionary(response) {
  let word = document.querySelector("#input").value;
  let result = document.querySelector("#result");
  result.innerHTML = `
    <div class="word">

      <h5>${word}</h5>
      <button onclick="playSound()">
      <i class="fa-solid fa-volume-high"></i>
      </button>
      <p>${response.data[0].phonetic}</p>
      <h3>${response.data[0].meanings[0].partOfSpeech}</h3>
      
      <ul>
       <li> <i>
          ${response.data[0].meanings[0].definitions[0].definition}
        </i></li>
        </ul>
        <h3>${response.data[0].meanings[1].partOfSpeech}</h3>
        <ul>
        <li> <i>
          ${response.data[0].meanings[1].definitions[0].definition}
        </i></li>
        </ul>
      
    </div>
  `;
  sound.setAttribute("src", `${response.data[0].phonetics[1].audio}`);
}

function getWord(event) {
  event.preventDefault();
  let word = document.querySelector("#input").value;
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/ ${word}`;
  axios.get(apiUrl).then(getDictionary);
}
let button = document.querySelector("#btn");
button.addEventListener("click", getWord);
let sound = document.querySelector("#sound");
