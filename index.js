function getDictionary(response) {
  console.log(response);
  let word = document.querySelector("#input").value;
  let result = document.querySelector("#result");
  result.innerHTML = `
    <div class="word">

      <h5>${word}</h5>
      <i class="fa-solid fa-volume-high"></i>
      <p>${response.data[0].phonetics[1].text}</p>
      <h3>${response.data[0].meanings[0].partOfSpeech}</h3>
      <p>
      <ul>
       <li> <i>
          ${response.data[0].meanings[0].definitions[0].definition}
        </i></li> <br/>
        <li><i>${response.data[0].meanings[0].definitions[1].definition}</i></li>
        <ul>
      </p>
      <h3>Synonyms</h3>
      <p>
        <i>
          ${response.data[0]}
        </i>
      </p>
      <hr />
      <h4>similar sounding words</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        pellentesque mattis convallis.
      </p>
    </div>
  `;
}

function getWord(event) {
  event.preventDefault();
  let word = document.querySelector("#input").value;
  console.log(word);
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/ ${word}`;
  axios.get(apiUrl).then(getDictionary);
}
let button = document.querySelector("#btn");
button.addEventListener("click", getWord);
