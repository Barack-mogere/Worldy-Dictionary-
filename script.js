const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const savedWords = document.getElementById("savedWords");
const saveBtn = document.getElementById("saveBtn");
const playAudio = document.getElementById("playAudio");

let favorites = [];
let currentWord = "";


searchBtn.addEventListener("click", function () {
     const word = searchInput.value;

              fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
         .then((response) => response.json())
        .then((data) => {
           const wordFound = data[0].word;
                 currentWord = wordFound;
           const phonetic = data[0].phonetic;
             const partOfSpeech = data[0].meanings[0].partOfSpeech;
           const definition = data[0].meanings[0].definitions[0].definition;
           const example = data[0].meanings[0].definitions[0].example;
           const synonyms = data[0].meanings[0].synonyms;
      
            result.innerHTML = `
                <h2>${wordFound}</h2>
                <p><strong>Pronunciation:</strong> ${phonetic}</p>
                <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
                <p><strong>Definition:</strong> ${definition}</p>
                <p><strong>Example:</strong> ${example || "No example available."}</p>
                <p><strong>Synonyms:</strong> ${
                  synonyms.length > 0
                    ? synonyms.join(", ")
                    : "No synonyms available."
                }</p>
            `;})

             .catch(error => {
            result.innerHTML = `
                <h2>Word Not Found</h2>
                <p>Sorry, we couldn't find that word.</p>
            `;

            console.error(error);
                });
    

});

saveBtn.addEventListener("click", function () {
    if (currentWord === "") {
      alert("Search for a word first.");
      return;
    }
    favorites.push(currentWord);
    savedWords.innerHTML = "";
    favorites.forEach(function (word) {

        const li = document.createElement("li");
        li.textContent = word;
        savedWords.appendChild(li);

    });
});